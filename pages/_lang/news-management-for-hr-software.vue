/** 
  组织架构
*/
<template>
  <main>
    <top-show category="FHRSturcture" label="PosterTrial" :info="swiperlists[3]" class="active"> </top-show>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="$path('/')" exact>{{ $ft("home") }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ $ft("msg") }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <structure-info v-for="(item, index) in infolist[3].childer" :key="index" :info="item"> </structure-info>
    <blog-banner v-if="articleList.length" :articleList="articleList"></blog-banner>
    <form-info category="FHRSturcture" label="BottomTrialButton"></form-info>
  </main>
</template>

<script>
import { infolist, swiperlists, structuredData } from "~/util/config.js";
export default {
  async asyncData({ $axios }) {
    // 组织架构 在blog标签中id为4
    let id = 4;
    let type = "tag";
    let res1 = await $axios.get(`/pub/article/items?page=&size=&type=${type}&id=${id}`);
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
  head() {
    return {
      title: this.$ft("msg.title"),
      meta: [
        { name: "keywords", content: this.$ft("msg.key") },
        {
          hid: "description",
          name: "description",
          content: this.$ft("msg.des")
        }
      ],
      __dangerouslyDisableSanitizers: ["script"],
      script: structuredData("xxxxxx/news-management-for-hr-software", this.$ft("msg"))
    };
  },
  data() {
    return {
      infolist,
      swiperlists
    };
  }
};
</script>

<style lang="less" scoped>
main {
  .structure:nth-child(4) {
    background: #fafcff;
  }
  .breadcrumb {
    width: 1200px;
    margin: 0 auto;
    padding: 16px 0;
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
