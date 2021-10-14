<template>
  <el-dropdown @command="changeLang">
    <span class="el-dropdown-link">
      <icon class="icon-yuyan el-icon--left" />
      {{ $store.state.lang.label }}<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="item in options" :key="item.value" :command="item">{{ item.label }}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { langArr } from "~/util/config";
export default {
  data() {
    return {
      options: langArr
    };
  },
  methods: {
    changeLang(item) {
      const lang = this.$route.params.lang;
      const path = this.$route.fullPath === "/" ? "" : this.$route.fullPath;
      const pathLang = item.value === this.$store.state.env.lang ? "" : `/${item.value}`;
      const href = lang
        ? path.replace(`/${lang}`, pathLang) === ""
          ? "/"
          : path.replace(`/${lang}`, pathLang)
        : `${pathLang}${path}`;
      this.$store.commit("set_lang", langArr.filter(v => v.value === item.value)[0]);
      this.$router.push(href, () => {
        window.location.reload();
      });
    }
  }
};
</script>

<style lang="less" scoped>
.el-dropdown span {
  color: #303133;
}
.el-dropdown-link {
  cursor: pointer;
  font-size: 16px;
}
.el-dropdown-link:hover {
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
