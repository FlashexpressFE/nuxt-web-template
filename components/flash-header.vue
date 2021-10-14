<template>
  <header>
    <div class="banner">
      <div class="logo-nav">
        <logo></logo>
        <nav>
          <ul>
            <li>
              <nuxt-link :to="$path('/')" exact>{{ $ft("home") }}</nuxt-link>
            </li>
            <li>
              <el-dropdown>
                <span class="el-dropdown-link">
                  {{ $ft("Features ") }}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <nuxt-link :to="$path(item.path)" v-for="(item, index) in infolist" :key="index">
                    <el-dropdown-item>{{ $ft(item.info) }}</el-dropdown-item></nuxt-link
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </li>
            <li>
              <el-dropdown>
                <span class="el-dropdown-link">
                  {{ $ft("pay.pay.20") }}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <nuxt-link :to="$path(item.path)" v-for="(item, index) in resourcelist" :key="index">
                    <el-dropdown-item>{{ $ft(item.info) }}</el-dropdown-item></nuxt-link
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </li>
            <li>
              <nuxt-link :to="$path('/contact-us')">{{ $ft("contactus") }}</nuxt-link>
            </li>
            <li @click="download">
              <nuxt-link :to="$path('/down')">{{ $ft("download ") }}</nuxt-link>
            </li>
            <li>
              <switch-language></switch-language>
            </li>
          </ul>
        </nav>
      </div>
      <login-apply-button />
    </div>
  </header>
</template>

<script>
import { infolist, resourcelist } from "~/util/config.js";
export default {
  data() {
    return { infolist, resourcelist };
  },
  methods: {
    download() {
      // 下载埋点
      this.$ga.event("FHRTopNavi", "click", "Download", 6);
    }
  }
};
</script>

<style lang="less" scoped>
header {
  z-index: 999;
  height: 80px;
  min-width: 1200px;
  .banner {
    display: flex;
    width: 1200px;
    margin: 0 auto;
    padding: 18px 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .logo-nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      ul {
        padding-left: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 16px;
        li {
          padding: 0 15px;
          list-style: none;
          span {
            font-size: 16px;
            color: #303133;
            cursor: pointer;
          }
        }
        a {
          display: block;
          width: 100%;
          height: 24px;
          font-size: 16px;
        }
      }
    }
    .nuxt-link-active {
      color: #1592ff;
    }
  }
}
</style>
