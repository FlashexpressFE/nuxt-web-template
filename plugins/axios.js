import { Message } from "element-ui";
import { ft } from "~/util";
const errorNotice = message => Message.error({ message });

const timeZone = function () {
  const off = 0 - new Date().getTimezoneOffset() / 60
  const end = off.toFixed(2).split('.')
  return `+${end[0]}:${end[1]}`
}
export default async ({ app, $axios, env, store }, inject) => {
  inject("ft", (str, obj) => ft(store.state.langPack, str, obj));
  $axios.defaults.baseURL = env.baseUrl;
  $axios.defaults.timeout = 20 * 1000;

  await $axios.onRequest(config => {
    config.headers["Accept-Language"] = store.state.lang.value;
    config.headers["X-Timezone"] = timeZone();
  });
  await $axios.interceptors.response.use(
    res => {
      const data = res.data;
      const code = data.code;
      if (code !== 1 && res.config.responseType !== 'blob') errorNotice(data.message || app.$ft("151"));
      return data;
    },
    err => {
      errorNotice(err.message || app.$ft("151"));
      return err;
    }
  );
};
