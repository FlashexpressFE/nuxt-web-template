<template>
  <div class="structure active">
    <section class="banner">
      <h2>{{ $ft(info.title) }}</h2>
      <p>{{ $ft(info.word) }}</p>
      <img v-lazy width="880" :data-src="info.image" :alt="$ft(info.alt)" />
    </section>
  </div>
</template>

<script>
export default {
  props: {
    info: { type: Object, default: {} }
  }
};
</script>

<style lang="less" scoped>
.structure {
  min-width: 1200px;
  padding: 64px 0;
  .banner {
    margin: 0 auto;
    width: 1200px;
    text-align: center;
    h2 {
      font-size: 32px;
      font-weight: 500;
      text-align: center;
      color: #303133;
      line-height: 47px;
    }
    p {
      padding: 16px 0 36px 0;
      font-size: 16px;
      font-weight: 400;
      text-align: center;
      color: #303133;
      line-height: 24px;
    }
    img {
      min-height: 515px;
      // width: 880px;
      box-shadow: 0px 10px 28px 0px rgba(0, 0, 0, 0.04);
    }
  }
}
</style>
