<template>
  <div class="logo" @click="ontohome">
    <h2>FLash HR</h2>
    <img width="166" height="44" :src="LogeDefault" :alt="$ft('s_4')" />
  </div>
</template>

<script>
const LogeDefault = require("~/assets/images/Logo.png");

export default {
  data() {
    return {
      LogeDefault
    };
  },
  methods: {
    ontohome() {
      this.$router.push({
        path: this.$path("/")
      });
    }
  }
};
</script>

<style lang="less" scoped>
.logo {
  cursor: pointer;
  h2 {
    display: none;
  }
}
</style>
