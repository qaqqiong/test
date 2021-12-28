<template>
  <div id="home">
    <!-- 引入搜索组件 -->
    <Search></Search>
    <!-- 引入标签页 -->
    <Tab></Tab>
  </div>
</template>
<script>
import Search from '@/views/Home/Search'
import Tab from '@/views/Home/Tab'
export default {
  data(){
    return{}
  },
  methods:{
  },
  computed:{
  },
  components:{
    Search,
    Tab
  }
}
</script>
<style>
</style>
