<template>
  <div class="blog-detail">
    <header v-if="detail.id">
      <h1>{{ detail.title }}</h1>
      <div class="info">
        <span>
          <img width="14" height="14" src="../assets/images/icon2/icon_blog1.png" alt="" />
          <i>{{ detail.author }}</i>
        </span>
        <span>
          <img width="14" height="14" src="../assets/images/icon2/icon_blog2.png" alt="" />
          <i>{{ detail.publish_at }}</i>
        </span>
        <span>
          <img width="14" height="14" src="../assets/images/icon2/icon_blog3.png" alt="" />
          <i>{{ detail.pv }}</i>
        </span>
        <div class="tag">
          <nuxt-link class="tag-item" v-for="item in detail.tag" :key="item.tag_id" :to="$path(`/tag/${item.url}`)">
            {{ item.tag_name }}
          </nuxt-link>
        </div>
      </div>
    </header>
    <section v-if="detail.id" class="section">
      <div
        class="content wangeditor-style"
        v-lazy
        v-dompurify-html="detail.content.split('src=').join('data-src=')"
      ></div>
      <ul class="footer">
        <li @click="handlrPraise(detail)">
          <img width="64" height="64" src="../assets/images/icon2/icon_blog4.png" alt="" />
          <span class="text">{{ $ft("167", { key: detail.praise_number }) }}</span>
        </li>
        <li @mouseleave="onMouseleave" @mouseenter="onMouseenter">
          <div>
            <img width="64" height="64" src="../assets/images/icon2/icon_blog5.png" alt="" />
            <span class="text">{{ $ft("pay.pay.14") }}</span>
          </div>
          <ShareThis v-if="share_show" class="share" />
        </li>
      </ul>
    </section>
    <div class="not-data" v-if="!detail.id">{{ $ft("cms_articles_0") }}</div>
    <div class="recommend">
      <h2 class="title">{{ $ft("163") }}</h2>
      <ul>
        <nuxt-link :to="$path(item.path)" v-for="(item, index) in recommendInfolist" :key="index">
          <img width="200" height="120" v-lazy :data-src="item.image" />
          {{ $ft(item.info) }}
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { recommendInfolist } from "~/util/config.js";
export default {
  props: {
    detail: {
      type: Object,
      default: function () {
        return { content: "" };
      }
    }
  },
  data() {
    return {
      share_show: false,
      recommendInfolist
    };
  },
  methods: {
    // 点赞调用接口
    handlrPraise(detail) {
      this.detail.praise_number = Number.parseInt(detail.praise_number) + 1;
      this.$axios.post("/pub/article/praise", {
        id: detail.id
      });
    },
    // 是否展示分享图标
    onMouseleave() {
      this.share_show = false;
    },
    onMouseenter() {
      this.share_show = true;
    }
  }
};
</script>

<style lang="less" scoped>
.blog {
  &-detail {
    flex: 1;
    margin-left: 39px;
    header {
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      h1 {
        font-size: 32px;
        font-weight: 500;
        color: #333333;
      }
      .info {
        font-size: 12px;
        margin-top: 12px;
        margin-bottom: 16px;
        i {
          color: rgba(0, 0, 0, 0.45);
          margin-right: 24px;
          vertical-align: middle;
        }
        .tag {
          margin-top: 10px;
          .tag-item {
            background: #f6f7f8;
            padding: 3px 6px;
            color: rgba(0, 0, 0, 0.85);
            margin-right: 24px;
            &:hover {
              color: #1592ff;
            }
          }
        }
      }
    }
    section {
      padding-bottom: 64px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      .img {
        width: 600px;
        height: 338px;
        display: block;
        margin: 40px auto 25px;
      }
      .content {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.85);
        line-height: 28px;
      }
      .footer {
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
        margin-top: 64px;
        li {
          position: relative;
          text-align: center;
          margin: 0 10px;
          .text {
            font-size: 12px;
          }
          img {
            display: block;
            cursor: pointer;
            // width: 64px;
            margin-bottom: 12px;
          }
          .text {
            font-size: 12px;
          }
          .share {
            width: 200px;
            position: absolute;
            bottom: 40px;
            left: 60px;
          }
        }
      }
    }
    .recommend {
      .title {
        color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
        font-size: 16px;
        border-left: 4px solid #1592ff;
        padding-left: 8px;
        margin: 25px 0;
      }
      ul {
        display: flex;
        justify-content: space-between;
        a {
          width: 200px;
          text-align: center;
          font-size: 14px;
          img {
            // width: 100%;
            margin-bottom: 12px;
          }
        }
      }
    }
  }
}
</style>

<style lang="less">
@import "~@/assets/less/wangeditor.less";
</style>
