<template>
  <footer>
    <div class="banner">
      <div class="information">
        <img width="108" height="28" src="~/assets/images/logo_wihte.png" :alt="$ft('75')" />
        <div class="info">
          <p>
            {{ $ft("101") }}
          </p>
        </div>
        <div class="size">
          <a
            :href="item.url"
            v-for="(item, index) in nlist"
            :key="index"
            @mouseenter="iconenter(item, index)"
            @mouseleave="iconleave(item, index)"
          >
            <img width="24" height="24" v-if="item.tyre" :src="item.nimage" :alt="$ft(item.alt)" />
            <img width="24" height="24" v-else :src="item.image" :alt="$ft(item.alt)" />
          </a>
        </div>
      </div>
      <div class="quickentry">
        <h4>{{ $ft("71") }}</h4>
        <nuxt-link v-for="(item, index) in navlist" :to="$path(item.nav)" :key="index">{{ $ft(item.item) }}</nuxt-link>
      </div>
      <div class="characteristic">
        <h4>{{ $ft("Features ") }}</h4>
        <ul>
          <nuxt-link :to="$path(item.path)" v-for="(item, index) in infolist" :key="index">{{
            $ft(item.info)
          }}</nuxt-link>
        </ul>
      </div>
      <div class="download">
        <h4>{{ $ft("48") }}</h4>
        <img width="128" height="128" src="~/assets/images/down.png" :alt="$ft('s_4')" />
      </div>
    </div>
  </footer>
</template>

<script>
import { nlist, navlist, infolist } from "~/util/config.js";
export default {
  data() {
    return {
      nlist,
      navlist,
      infolist
    };
  },
  methods: {
    iconenter(item, index) {
      item.tyre = false;
    },
    iconleave(item, index) {
      item.tyre = true;
    }
  }
};
</script>

<style lang="less" scoped>
footer {
  position: relative;
  bottom: 0;
  width: 100%;
  background: #1b202d;
  .banner {
    min-height: 300px;
    padding: 64px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
    .information {
      width: 360px;
      height: 100%;
      > img {
        // height: 28px;
        // width: 108px;
      }
      .info {
        width: 360px;
        padding: 16px 0 25px 0;
        p {
          width: 360px;
          font-size: 14px;
          font-weight: 400;
          text-align: left;
          color: #dcdee0;
          line-height: 24px;
        }
      }
      .size {
        height: 24px;
        width: 289px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        // img {
        //   height: 24px;
        //   width: 24px;
        // }
      }
    }
    .quickentry {
      display: flex;
      flex-direction: column;

      h4 {
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        line-height: 24px;
        padding: 4px 0 8px 0;
      }

      a {
        font-size: 14px;
        font-weight: 400;
        text-align: left;
        color: #dcdee0;
        line-height: 20px;
        padding: 8px 0;
      }
      a:hover {
        color: #ffffff;
      }
    }
    .characteristic {
      display: flex;
      flex-direction: column;

      h4 {
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        line-height: 24px;
        padding: 4px 0 8px 0;
      }
      ul {
        display: flex;
        flex-direction: column;
        a {
          font-size: 14px;
          font-weight: 400;
          text-align: left;
          color: #dcdee0;
          line-height: 20px;
          padding: 8px 0;
        }
        a:hover {
          color: #ffffff;
        }
      }
    }
    .download {
      h4 {
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        line-height: 24px;
        padding: 4px 0 16px 0;
      }
      // img {
      //   height: 128px;
      //   width: 128px;
      // }
    }
  }
}
</style>
