<template>
  <aside class="blog-left">
    <div class="hot">
      <p class="title">{{ $ft("160") }}</p>
      <div class="category" v-if="enums.category && Object.keys(enums.category) && Object.keys(enums.category).length">
        <p v-for="item in enums.category" :key="item.id" :class="['category-item']">
          <nuxt-link :to="item.id == 0 ? $path(`/blog`) : $path(`/category/${item.url}`)">
            {{ item.category_name }}
          </nuxt-link>
        </p>
      </div>
      <div v-else class="not-data">{{ $ft("164") }}</div>
    </div>
    <div class="hot">
      <p class="title">{{ $ft("161") }}</p>
      <div class="tag" v-if="enums.tag && Object.keys(enums.tag) && Object.keys(enums.tag).length">
        <span v-for="item in enums.tag" :class="['tag-item']" :key="item.id">
          <nuxt-link :to="$path(`/tag/${item.url || ''}`)">
            {{ item.tag_name }}
          </nuxt-link>
        </span>
      </div>
      <div v-else class="not-data">{{ $ft("164") }}</div>
    </div>
    <div class="hot">
      <p class="title">{{ $ft("162") }}</p>
      <ul class="article" v-if="hotArticle.hot_items && hotArticle.hot_items.length">
        <li class="article-item" v-for="(item, index) in hotArticle.hot_items" :key="index">
          <nuxt-link :to="$path(`/blog/${item.url || ''}`)">
            <el-image class="img" :src="item.pic_object_url" lazy></el-image>
            <p>{{ item.title }}</p>
          </nuxt-link>
        </li>
      </ul>
      <div v-else class="not-data">{{ $ft("164") }}</div>
    </div>
  </aside>
</template>

<script>
export default {
  props: ["enums", "hotArticle"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.blog-left {
  width: 264px;
  margin-right: 24px;
  .hot {
    margin-bottom: 32px;
  }
  .title {
    height: 48px;
    background: #f6fbff;
    border-left: 4px solid #1592ff;
    border-radius: 2px 0px 0px 2px;
    padding-left: 12px;
    padding-top: 10px;
    font-size: 18px;
    color: #1592ff;
  }
  .category {
    &-item {
      display: block;
      padding-left: 16px;
      cursor: pointer;
      height: 48px;
      line-height: 48px;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.85);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      a {
        display: block;
      }
      &:hover {
        background: #f6f8fa;
        a {
          color: #1592ff;
        }
      }
      &.category_active {
        a {
          color: #1592ff;
        }
      }
    }
  }
  .tag {
    padding-top: 4px;
    span {
      display: inline-block;
      margin-top: 12px;
      margin-right: 16px;
      a {
        cursor: pointer;
        display: inline-block;
        color: rgba(0, 0, 0, 0.65);
        background: #f6f7f8;
        font-size: 14px;
        border-radius: 2px;
        padding: 4px 8px;
      }
      &:hover {
        a {
          background: rgba(21, 146, 255, 0.12);
          color: #1592ff;
        }
      }
    }
  }
  .article {
    &-item {
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      cursor: pointer;
      .img {
        width: 100%;
        height: 148px;
        margin-top: 16px;
      }
      p {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.65);
        margin: 12px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      &:hover {
        p {
          color: #1592ff;
        }
      }
      &:last-child {
        border: none;
      }
    }
  }
}
.not-data {
  font-size: 14px;
  margin-left: 10px;
  margin-top: 10px;
}
</style>
