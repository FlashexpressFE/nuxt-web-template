<template></template>
<script>
export default {
  layout: "blank",
  mounted() {
    this.$router.push({
      path: this.$path("/")
    });
  }
};
</script>
