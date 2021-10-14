<template>
  <section class="active">
    <img v-lazy width="48" height="48" :data-src="info.image" :alt="$ft(info.alt)" />
    <h3>{{ $ft(info.title) }}</h3>
    <p>{{ $ft(info.info) }}</p>
  </section>
</template>

<script>
export default {
  props: {
    info: { type: Object, default: () => ({}) }
  }
};
</script>

<style lang="less" scoped>
section {
  text-align: center;
  h3 {
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    padding: 16px 0;
    color: #303133;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: #606266;
    line-height: 24px;
  }
}
</style>
