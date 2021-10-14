<template>
  <div class="show">
    <div class="banner">
      <div class="wordshow">
        <h4>{{ $ft(info.title) }}</h4>
        <span>{{ $ft(info.word) }}</span>
        <apply-button :category="category" :label="label"></apply-button>
      </div>
      <div class="imgshow">
        <img v-lazy height="390" width="570" :data-src="info.image" :alt="$ft(info.alt)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: { type: Object, default: {} },
    category: { type: String },
    label: { type: String }
  }
};
</script>

<style lang="less" scoped>
.show {
  background-color: #fafcff;
  .banner {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .wordshow {
      padding: 120px 50px 130px 0;
      display: flex;
      flex-direction: column;
      > h4 {
        font-size: 64px;
        font-weight: 500;
      }
      > span {
        padding: 12px 0 48px 0;
        font-size: 16px;
        font-weight: 400;
      }
      /deep/.el-button {
        width: 180px;
      }
    }
    .imgshow {
      padding: 80px 0 80px 0;
    }
  }
}
</style>
