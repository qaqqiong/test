<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      flag: "",
      message: [],
    };
  },
  methods: {
    toAxios() {
      this.$axios
        .get("http://m.toutiao.com/i7047102241961951755/info/")
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  computed: {
    recommendDetail() {
      return this.$store.state.recommendDetail;
    },
  },
  mounted() {
    this.flag = "i" + this.recommendDetail;
    console.log(this.flag);
    this.toAxios();
  },
};
</script>
<style scoped>
</style>
