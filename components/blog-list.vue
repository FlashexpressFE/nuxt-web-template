<template>
  <div class="blog" v-if="articleList.total" v-infinite-scroll="load">
    <ul class="blog-list">
      <li v-for="(item, index) in list" :key="index">
        <nuxt-link class="blog-item" :to="$path(`/blog/${item.url || ''}`)">
          <el-image class="blog-item-img" :src="item.pic_object_url" lazy></el-image>
          <div class="blog-item-info">
            <div class="blog-item-text">
              <h2>{{ item.title }}</h2>
              <p>{{ item.content_intro }}</p>
            </div>
            <ul class="blog-item-footer">
              <li>
                <img width="16" height="16" src="../assets/images/icon2/icon_blog1.png" alt="" />
                <span>{{ item.author }}</span>
              </li>
              <li>
                <img width="16" height="16" src="../assets/images/icon2/icon_blog2.png" alt="" />
                <span>{{ item.publish_at }}</span>
              </li>
              <li>
                <img width="16" height="16" src="../assets/images/icon2/icon_blog3.png" alt="" />
                <span>{{ item.pv }}</span>
              </li>
            </ul>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>

  <div v-else class="not-data">{{ $ft("164") }}</div>
</template>

<script>
export default {
  props: {
    articleList: {
      type: Object,
      default() {
        return {
          total: 0
        };
      }
    },
    aList: {
      type: Array,
      default() {
        return [];
      }
    },
    num: {
      type: Number,
      default: 12
    }
  },
  data() {
    return {
      list: this.aList
    };
  },
  methods: {
    load() {
      // 截取articleList.items，每次截取12条数据
      let items = this.articleList.items;
      let listLen = this.list.length;
      this.list = items.slice(0, this.num + listLen);
    }
  }
};
</script>

<style lang="less" scoped>
.blog {
  width: 100%;
  max-height: 2000px;
  overflow: auto;
  flex: 1;
  margin-left: 39px;
  &::-webkit-scrollbar {
    display: none;
  }
  &-item {
    cursor: pointer;
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    padding-bottom: 24px;
    margin-bottom: 32px;
    &-img {
      width: 320px;
      height: 180px;
      margin-right: 16px;
    }
    &-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &-text {
      h2 {
        font-size: 24px;
        color: #333333;
        margin-bottom: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      p {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.45);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
    &-footer {
      display: flex;
      li {
        margin-right: 24px;
        img {
          width: 16px;
        }
        span {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.45);
          vertical-align: middle;
        }
      }
    }
    &:hover {
      h2 {
        color: #1592ff;
      }
    }
  }
}
.not-data {
  margin-left: 39px;
  font-size: 20px;
}
</style>
