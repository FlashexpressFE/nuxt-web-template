<template>
  <main>
    <div class="top">
      <div class="banner">
        <p class="title">{{ val.h1 }}</p>
        <p class="detail">{{ val.p }}</p>
      </div>
    </div>
    <div class="line"></div>
    <div class="structure">
      <slot></slot>
    </div>
  </main>
</template>

<script>
import BlogDetail from "@/components/blog-detail";
export default {
  components: { BlogDetail },
  props: {
    enums: {
      type: Object
    },
    hotArticle: {
      type: Object
    },
    val: {
      type: Object
    }
  }
};
</script>

<style lang="less" scoped>
main {
  .top {
    background: #1592ff;
    .banner {
      padding: 64px 0 102px 0;
      width: 1200px;
      margin: 0 auto;
      background: url("~assets/images/img_call2.png") center no-repeat;
      background-size: cover;
      text-align: center;
      .title {
        font-size: 64px;
        font-weight: 500;
        text-align: center;
        color: #ffffff;
        line-height: 94px;
      }
      .detail {
        padding-top: 16px;

        font-size: 16px;
        font-weight: 400;
        text-align: center;
        color: #ffffff;
        line-height: 24px;
      }
    }
  }
  .structure {
    min-width: 1200px;
    padding: 8px 0 64px 0;
  }
}
</style>
