<template>
  <section>
    <div>
      News/List
      <nuxt-link to="/">index</nuxt-link>
      <nuxt-link to="/test/detail">news detail</nuxt-link>
    </div>
  </section>
</template>


<script>
export default {
  head() {
    return {
      meta: [
        {
          name: "keywords",
          content: "最强王者,今晚吃鸡"
        }
      ]
    };
  },
  fetch({ app }) {
    // console.log(app.$axios);
  },
  asyncData({ app }) {
    // console.log(app.$axios);
  },
  created() {
    // console.log(this.$axios);
  }
};
</script>
<style lang="scss" scoped>

</style>

