<template>
  <section>
    <div class="nav">
      <el-button type="text">
        <nuxt-link to="/">index</nuxt-link>
      </el-button>
      <el-button type="text">
        List
      </el-button>
      <el-button type="text">
        <nuxt-link to="/test/detail">detail</nuxt-link>
      </el-button>
    </div>
    <div class="container">
      This is List
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
            content: "这是列表页面"
          }
        ]
      };
    },
    created() {
      // console.log(this.$axios);
    }
  };
</script>
<style lang="scss" scoped>

</style>

