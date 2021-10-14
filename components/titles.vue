<template>
  <section class="titles">
    <div class="banner">
      <p>{{ $ft("15") }}</p>
      <apply-button></apply-button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.titles {
  background-color: #1592ff;
  .banner {
    height: 240px;
    width: 1200px;
    margin: 0 auto;
    padding: 61px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: url("~assets/images/img_banner_call.png") center no-repeat;
    background-size: cover;
    > button {
      border: 1px solid #ffffff;
    }
    > p {
      font-size: 40px;
      color: #ffffff;
    }
  }
}
</style>
