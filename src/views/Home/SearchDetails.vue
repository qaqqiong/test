<template>
  <div>{{message}}</div>
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
</style>
