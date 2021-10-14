/**
首页
 */
<template>
  <main>
    <el-carousel indicator-position="outside" :interval="5000">
      <el-carousel-item v-for="(item, index) in swiperlist" :key="item.title">
        <top-show-main
          category="FHRHome"
          :label="index === 0 ? 'PosterTrial' : 'MiddleTrial0' + index"
          :info="item"
          class="active"
        >
        </top-show-main>
      </el-carousel-item>
    </el-carousel>
    <div class="management">
      <section class="banner">
        <h1>{{ $ft("6") }}</h1>
        <div class="function">
          <function-info v-for="(item, index) in functionInfoList" :key="index" :info="item"> </function-info>
        </div>
      </section>
    </div>
    <titles></titles>
    <div class="effect">
      <section class="banner">
        <!-- 特色功能 -->
        <h2>{{ $ft("Features ") }}</h2>
        <div>
          <nuxt-link v-for="(item, index) in effectInfoList" :key="index" :to="$path(item.path)"
            ><function-info :info="item"> </function-info
          ></nuxt-link>
        </div>
      </section>
    </div>
    <titles></titles>
    <div class="salary">
      <section class="banner">
        <h2>{{ $ft("22") }}</h2>
        <div>
          <word-info v-for="(item, index) in salaryInfoList" :key="index" :info="item"></word-info>
        </div>
      </section>
    </div>
    <blog-banner v-if="articleList.length" :articleList="articleList"></blog-banner>
    <form-info category="FHRHome" label="BottomTrialButton"></form-info>
  </main>
</template>

<script>
import { functionInfoList, effectInfoList, salaryInfoList, swiperlist, imgswipe } from "~/util/config.js";
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  url: "https://www.flash-hr.com",
  logo: "https://www.flash-hr.com/img/logo.png",
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "support@flash-hr.com",
      contactType: "customer service",
      areaServed: "TH"
    }
  ],
  sameAs: ["https://www.facebook.com/flashhrofficial/"],
  name: "Flash HR",
  image: "https://www.flash-hr.com/img/logo.png",
  description:
    "Flash HR เป็นโปรแกรมHRที่แน้นการบริหารจัดการบุคลากรเป็นหลัก  ให้บริการฟังกชัน การจัดการข้อมูลลงเวลา การคำนวนเงินเดือน โครงสร้างองค์กร การจัดการการอนุมัติ การสแกนใบหน้าลงชื่อเข้าออกงาน การแจ้งเตือนต่างๆ"
};

const preloadImage = imgswipe("img_bannerhome1");

export default {
  async asyncData({ $axios }) {
    let res1 = await $axios.get(`/pub/article/items?page=&size=&category=&tag=`);
    let res = res1.code === 1 ? res1.data : {};
    let articleList = [];
    if (res.items) {
      let num = 3;
      let data = res.items.splice(0, 9);
      let len = data.length;
      let lineNum = len % num === 0 ? len / num : Math.floor(len / num + 1);
      for (let i = 0; i < lineNum; i++) {
        let temp = data.slice(i * num, i * num + num);
        articleList.push(temp);
      }
    }
    return { articleList };
  },
  data() {
    return {
      input: "",
      functionInfoList,
      effectInfoList,
      salaryInfoList,
      swiperlist
    };
  },
  head() {
    return {
      title: this.$ft("s_1"),
      meta: [
        { name: "keywords", content: this.$ft("s_3") },
        { hid: "description", name: "description", content: this.$ft("s_2") }
      ],
      __dangerouslyDisableSanitizers: ["script"],
      script: [{ json: structuredData, type: "application/ld+json" }],
      link: [
        {
          rel: "preload",
          as: "image",
          href: preloadImage
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
main {
  /deep/.el-carousel {
    min-height: 600px;
  }
  /deep/.el-carousel__container {
    min-height: 600px;
  }
  .management {
    .banner {
      width: 1200px;
      margin: 0 auto;
      padding: 64px 0;
      h1 {
        color: #303133;
        text-align: center;
        font-size: 40px;
        font-weight: 500;
        padding-bottom: 67px;
      }
      .function {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        section {
          width: 273px;
          text-align: center;
        }
      }
    }
  }
  .effect {
    color: #f9fcff;

    .banner {
      width: 1200px;
      margin: 0 auto;
      padding: 64px 0;
      h2 {
        font-size: 32px;
        font-weight: 500;
        text-align: center;
        color: #303133;
        line-height: 47px;
        padding-bottom: 48px;
      }
      > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        > a {
          width: 282px;
          padding: 36px 24px;
          background: #ffffff;
          border: 1px solid #dcdee0;
          border-radius: 1px;
        }
        a:hover {
          box-shadow: 0px 10px 14px 0px rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
  .salary {
    .banner {
      width: 1200px;
      margin: 0 auto;
      padding: 64px 0 52px 0;

      h2 {
        height: 47px;
        text-align: center;
        font-size: 32px;
        font-weight: 500;
        margin-bottom: 36px;
      }
      > div {
        width: 1200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        section {
          background: #ffffff;
          border: 1px solid #dcdee0;
          padding: 36px;
          display: flex;
          flex-direction: row;
          margin: 12px 0;
        }
        section:first-child {
          width: 1200px;
          padding: 28px 0 16px 36px;
          align-items: center;
        }
      }
    }
  }
  .blog {
    background: #f9fcff;
    .banner {
      width: 1200px;
      margin: 0 auto;
      padding: 64px 0 52px 0;

      h2 {
        height: 47px;
        text-align: center;
        font-size: 48px;
        font-weight: 500;
        margin-bottom: 36px;
        color: #303133;
      }

      /deep/ .el-carousel {
        min-height: 484px !important;
        .el-carousel__container {
          min-height: 484px !important;
        }
      }
    }
    .el-carousel__item {
      display: flex;
    }
    &-item {
      display: block;
      width: 384px;
      background: #ffffff;
      border: 1px solid #dcdee0;
      position: relative;
      &:nth-child(2) {
        margin: 0 24px;
      }
      .img {
        height: 216px;
        width: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .content {
        padding: 0 24px;
        h1 {
          font-size: 24px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.85);
          margin-bottom: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .tag {
          &-item {
            font-size: 12px;
            padding: 3px 6px;
            background: #f6f7f8;
            border-radius: 2px;
            color: rgba(0, 0, 0, 0.85);
            margin-right: 4px;
          }
        }
        p {
          font-size: 16px;
          color: rgba(0, 0, 0, 0.65);
          margin-top: 15px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .footer {
          position: absolute;
          bottom: 24px;
          display: flex;
          span {
            margin-right: 25px;
            color: rgba(0, 0, 0, 0.45);
            font-size: 12px;
            img {
              width: 14px;
            }
            i {
              vertical-align: middle;
            }
            .anthor {
              display: inline-block;
              max-width: 88px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              word-break: break-all;
            }
          }
        }
      }
      &:hover {
        box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.08);
        cursor: pointer;
      }
    }
  }
}
</style>
