<template>
  <section>
    <div>
      News/Detail
      <nuxt-link to="/">index</nuxt-link>

      <!-- <div v-for="itme in appname" :key="item.id"></div> -->
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      appname: {}
    }
  },
  // async asyncData ({ app, params }) {
  //   let {status, data:appname} = await app.$axios.get(`/pc/index/public/searchItem?platform=web&type=1`);
  //   if (status === 0) {
  //     return { appname }
  //   }
  // },
  created () {
    // console.log(appname)
  }
  
}
</script>