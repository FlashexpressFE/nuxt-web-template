<template>
  <main>
    <div class="banner">
      <img :src="error" :alt="$ft('s_4')" />
      <p>{{ $ft("93") }}</p>
      <div class="ta">
        <a :href="$path('/contact-us')">{{ $ft("contactus") }}</a
        ><a :href="$path('/')">{{ $ft("92") }}</a>
      </div>
    </div>
  </main>
</template>

<script>
const error = require("~/assets/images/404.png");
export default {
  data() {
    return {
      error
    };
  }
};
</script>

<style lang="less" scoped>
main {
  .banner {
    min-width: 1200px;
    padding: 120px 0 200px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 623px;
      height: 377px;
    }
    p {
      padding: 48px 0 24px 0;
      font-size: 16px;
      font-weight: 400;
      text-align: center;
      color: #909399;
      line-height: 24px;
    }
    .ta {
      display: flex;
      flex-direction: row;

      a {
        border: 1px solid #1592ff;
        border-radius: 2px;
        background: #fff;
        margin: 0 12px;
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        color: #1592ff;
        line-height: 27px;
        padding: 7px 36px;
      }
      a:last-child {
        background: #1592ff;
        box-shadow: 0px 10px 24px 0px rgba(21, 146, 255, 0.18);
        text-shadow: 0px 10px 24px 0px rgba(21, 146, 255, 0.18);
        color: #ffffff;
      }
    }
  }
}
</style>
