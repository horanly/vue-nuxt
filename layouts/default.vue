<template>
  <div>
    <!-- 公共头部组件 -->
    <v-header></v-header>

    <!-- 路由视图，相当于router-view -->
    <nuxt />

    <!-- 公共底部组件 -->
    <footer></footer>
  </div>
</template>

<script>
import vHeader from "~/components/header.vue";
import Footer from "~/components/footer.vue";

export default {
  components: {
    Footer,
    vHeader
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  /* word-spacing: 1px; */
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
