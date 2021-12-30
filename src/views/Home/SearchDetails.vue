<template>
  <div>
    111111
  </div>
</template>
<script>
export default {
  data(){
    return{
      message:[]
    }
  },
  methods:{
    getNum(){
      this.message=this.searchValue()
      console.log("111",this.message);
    }
  },
  computed:{
    searchValue() {
      return this.$store.state.searchValue;
    },
    mounted() {
      this.getNum();
      console.log(1111);
    },
  }
}
</script>
<style scoped>
</style>
