<template>
  <section class="active">
    <div>
      <h3>{{ $ft(info.title) }}</h3>
      <p>{{ $ft(info.info) }}</p>
    </div>
    <el-image style="width: 356px; height: 235px" :src="info.img" v-if="info.img" :alt="$ft(info.alt)" lazy></el-image>
  </section>
</template>

<script>
export default {
  props: {
    info: { type: Object, default: {} }
  }
};
</script>

<style lang="less" scoped>
img {
  height: 235px;
  width: 356px;
  margin: auto;
}
h3 {
  width: 516px;
  height: 36px;
  font-size: 24px;
  font-weight: 500;
  height: 36px;
  margin-bottom: 16px;
  color: #303133;
  line-height: 36px;
}
p {
  width: 516px;

  font-size: 16px;
  font-weight: 400;
  text-align: left;
  color: #606266;
  line-height: 24px;
}
</style>
