<!--
 * @Author: your name
 * @Date: 2021-08-26 20:23:27
 * @LastEditTime: 2021-09-14 15:19:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /website-template/pages/_lang/toline.vue
-->
/**
  返回首页
*/

<template>
  <main>
    <div class="banner">
      <p>Line</p>
      <img width="400" height="400" :src="error" :alt="$ft('s_4')" />
      <div class="ta">
        <a :href="$path('/contact-us')">{{ $ft("contactus") }}</a
        ><a :href="$path('/')">{{ $ft("92") }}</a>
      </div>
    </div>
  </main>
</template>

<script>
const error = require("~/assets/images/line.jpg");
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
    padding: 20px 0 200px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    // img {
    //   width: 400px;
    //   height: 400px;
    // }
    p {
      padding: 48px 0 24px 0;
      font-size: 30px;
      font-weight: 900;
      text-align: center;
      color: #1592ff;
      line-height: 30px;
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
