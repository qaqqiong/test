<template>
  <div>
    <div class="top">
      <img src="../../assets/Home/back.svg" @click="goBack()">
    </div>
    <div>{{ message }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: [],
    };
  },
  methods: {
    getNum() {
      this.message = this.searchValue;
      localStorage.setItem("searchDetail", JSON.stringify(this.message));
      console.log(this.message);
    },
    goBack(){
      this.$router.push({name:"Home"})
    }
  },
  computed: {
    searchValue() {
      return this.$store.state.searchValue;
    },
  },
  mounted() {
    this.getNum();
  },
};
</script>
<style scoped>
.top{
  width: 414px;
  height: 30px;
  background-color: red;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.top img{
  width: 25px;
  height: 25px;
}
</style>
