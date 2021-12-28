<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.toAxios();
  },
  methods: {
    toAxios() {
      this.$axios({
        method: "get",
        url: "/list/",
        params: {
          tag: "__all__",
          ac: "wap",
          count: "20",
          format: "json_raw",
          as: "A17538D54D106FF",
          cp: "585DF0A65F0F1E1",
          min_behot_time: "1482491618",
        },
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  computed: {},
};
</script>
<style>
</style>
