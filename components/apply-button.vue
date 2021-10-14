<template>
  <el-button type="primary" @click="apply">{{ $ft("free") }}</el-button>
</template>

<script>
export default {
  props: {
    category: { type: String },
    label: { type: String },
  },
  data() {
    return {};
  },
  methods: {
    apply() {
      const form = document.querySelector(".form-info");
      form.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      // 免费试用埋点
        this.$ga.event(this.category, 'click', this.label, 1)
    }
  }
};
</script>

<style lang="less" scoped>
button {
  padding: 12px 48px;
  text-align: center;
}
</style>
