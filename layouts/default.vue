<template>
  <div class="flash">
    <flash-header ref="head" :class="{ topactive: toshow }"></flash-header>
    <div class="flash-info" @scroll="onscroll" ref="main">
      <el-backtop target=".flash-info">
        <div class="backtop"><img width="40" height="40" src="~/assets/images/totop.png" alt="" /></div>
      </el-backtop>
      <Nuxt />
      <flash-bottom></flash-bottom>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$store.state.lang.value
      },
      title: this.$ft("s_1"),
      link: [
        {
          rel: "alternate",
          hreflang: "th",
          href: "https://www.flash-hr.com" + (this.href === "/" ? "" : this.href)
        },
        {
          rel: "alternate",
          hreflang: "en",
          href: "https://www.flash-hr.com/en" + (this.href === "/" ? "" : this.href)
        },
        {
          rel: "alternate",
          hreflang: "zh",
          href: "https://www.flash-hr.com/zh" + (this.href === "/" ? "" : this.href)
        }
      ],
      meta: [
        { name: "keywords", content: this.$ft("s_3") },
        { hid: "description", name: "description", content: this.$ft("s_2") },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@site_username" },
        { name: "og:description", content: this.$ft("s_2") },
        { name: "og:title", content: this.$ft("6") },
        { name: "og:image", content: require("../assets/images/Logo.png") },
        { name: "og:url", content: "https://www.flash-hr.com" }
      ]
    };
  },
  watch: {
    $route: {
      handler(val) {
        this.$refs.main && (this.$refs.main.scrollTop = 0);
        this.href = val.fullPath.substr(val.params.lang ? 3 : 0);
      },
      deep: true,
      immediate: true
    }
  },
  data() {
    return {
      toshow: false,
      href: ""
    };
  },
  methods: {
    onscroll() {
      this.toshow = Boolean(this.$refs.main.scrollTop);
    }
  }
};
</script>
<style lang="less">
html {
  font-size: 16px;
  word-spacing: 1px;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.flash {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  .flash-info {
    flex: 1;
    display: flex;
    overflow: auto;
    flex-direction: column;
    .backtop {
      // height: 100%;
      // width: 100%;
      border-radius: 50%;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        box-shadow: 0px 5px 18px 0px rgba(0, 0, 0, 0.2);
      }
    }
  }
}

.active {
  animation: 2s opacity2;
  -webkit-animation: 2s opacity2;
  -moz-animation: 2s opacity2;
}
.topactive {
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.06);
}
@keyframes opacity2 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

main {
  border-top: 1px solid #ebedf0;
}
</style>
