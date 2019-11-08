<template>
  <section>
    <div class="nav">
      <el-button type="text">
        <nuxt-link to="/test/list">Go to List</nuxt-link>
      </el-button>
    </div>
    <div class="container">
      This is Index
    </div>
  </section>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  /* min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
}

</style>
