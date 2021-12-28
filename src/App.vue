<template>
  <div id="app">
    <!-- 路由出口 -->
    <router-view/>
    <Tabbar  v-show="!$route.meta.showNav"></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
export default {
  name: 'App',
  data(){
    return{}
  },
  methods:{},
  components:{
    Tabbar
  }
}
</script>

<style>
</style>
