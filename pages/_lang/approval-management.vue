<!--
 * @Author: your name
 * @Date: 2021-08-26 20:23:27
 * @LastEditTime: 2021-09-14 15:22:23
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /website-template/pages/_lang/approval-management.vue
-->
/**
审批管理
 */

<template>
  <main>
    <top-show category="FHRApproval" label="PosterTrial" :info="swiperlists[2]" class="active"></top-show>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="$path('/')" exact>{{ $ft("home") }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ $ft("20") }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <structure-info v-for="(item, index) in infolist[2].childer" :key="index" :info="item"></structure-info>
    <blog-banner v-if="articleList.length" :articleList="articleList"></blog-banner>
    <form-info category="FHRApproval" label="BottomTrialButton"></form-info>
  </main>
</template>

<script>
import { infolist, swiperlists, structuredData } from "~/util/config.js";
import BlogBanner from "@/components/blog-banner";
export default {
  components: { BlogBanner },
  async asyncData({ $axios }) {
    // 审批管理 在blog标签中id为3
    let id = 3;
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
      title: this.$ft("sp_1"),
      meta: [
        { name: "keywords", content: this.$ft("sp_3") },
        { hid: "description", name: "description", content: this.$ft("sp_2") }
      ],
      __dangerouslyDisableSanitizers: ["script"],
      script: structuredData("https://www.flash-hr.com/approval-management", this.$ft("20"))
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
  .structure:nth-child(5) {
    /deep/ img {
      box-shadow: none;
    }
  }

  .breadcrumb {
    padding: 16px 0;
    width: 1200px;
    margin: 0 auto;
  }
}
</style>
