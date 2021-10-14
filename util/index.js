export const ft = (lang = {}, str, obj) => {
  let res = lang[str];
  !res && (res = str);
  // !res && (res = str) && console.warn(`${str} 字典项不存在 哦 ~~~ ^-^`);
  if (obj) for (const k in obj) res = res.replace(`{${k}}`, obj[k]);
  return res;
};

export const isURL = s => /^http[s]?:\/\/.*/.test(s);

export const isObj = k => Object.prototype.toString.call(k) === "[object Object]";

export const isEmptyObj = k => !Object.keys(k).length;

export const isArr = k => Array.isArray(k);

export const isIos = () => /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);

export const isAndroid = () => /(Android)/i.test(navigator.userAgent);

export const getPlatform = () => (process.client ? (isIos() ? "IPHONE" : "ANDROID") : "IPHONE");
