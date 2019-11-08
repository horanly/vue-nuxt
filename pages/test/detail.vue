<template>
  <section>
    <div class="nav">
      <nuxt-link to="/">index</nuxt-link>
    </div>
    <div class="container">
      This is List
    </div>

    <el-row :gutter="20" style="padding: 20px">
      <el-col :span="8">
        <el-card class="box-card" v-for="list in searchData" :key="list.name">
          <div slot="header" class="clearfix">
            <span>{{list.name}}</span>
          </div>
          <div v-for="tag in list.tagItem" :key="tag.name">
            {{tag.name }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="14">
        <div class="demo-image__lazy" v-for="list in listData" :key="list.userId">
          <el-image :src="list.avatar" lazy></el-image>
        </div>
      </el-col>
    </el-row>
  </section>
</template>


<script>
  import {getIndexList, getSearchList} from '@/api/user'

  export default {
    data() {
      return {
        searchData: [],
        listData: []
      }
    },
    async asyncData(context) {
      console.log(context, 'asyncData')
      let paramsSearch = {
        platform: 'web',
        type: 1
      }
      let paramsList = {
        platform: 'web',
        type: 1
      }
      let [searchList, indexList] = await Promise.all([
        await getSearchList(paramsSearch),
        await getIndexList(paramsList)
      ])
      // let searchList = await getSearchList(paramsSearch)
      // let indexList = await getIndexList(paramsList)
      return {searchData: searchList.data, listData: indexList.data}
    },
    created() {
      console.log(this.listData)
    }
  }
</script>

<style>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
