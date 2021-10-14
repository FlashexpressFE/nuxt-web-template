<template>
  <div class="blog" v-if="articleList.length">
    <section class="banner">
      <h2>{{ $ft("169") }}</h2>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item, index) in articleList" :key="'articleList-' + index">
          <nuxt-link
            v-for="blogItem in item"
            :key="blogItem.id"
            class="blog-item"
            :to="$path(`/blog/${blogItem.url || ''}`)"
          >
            <div class="img">
              <img width="100%" height="100%" v-lazy :data-src="blogItem.pic_object_url" :alt="blogItem.title" />
            </div>
            <div class="content">
              <h3>{{ blogItem.title }}</h3>
              <div class="tag">
                <span class="tag-item" v-for="(tag, tagIndex) in blogItem.tag" :key="tagIndex">{{ tag.tag_name }}</span>
              </div>
              <p>{{ blogItem.content_intro }}</p>
              <div class="footer">
                <span class="author">
                  <img width="14" height="14" src="../assets/images/icon2/icon_blog1.png" alt="" />
                  <i>{{ blogItem.author }}</i>
                </span>
                <span class="time">
                  <img width="14" height="14" src="../assets/images/icon2/icon_blog2.png" alt="" />
                  <i>{{ blogItem.publish_at }}</i>
                </span>
                <span>
                  <img width="14" height="14" src="../assets/images/icon2/icon_blog3.png" alt="" />
                  <i>{{ blogItem.pv }}</i>
                </span>
              </div>
            </div>
          </nuxt-link>
        </el-carousel-item>
      </el-carousel>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    articleList: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped lang="less">
.blog {
  background: #f9fcff;
  .banner {
    width: 1200px;
    margin: 0 auto;
    padding: 64px 0 52px 0;

    h2 {
      text-align: center;
      font-size: 32px;
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
    }
    .content {
      padding: 0 24px;
      h3 {
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
          margin-right: 6px;
          margin-bottom: 6px;
          display: inline-block;
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
</style>
