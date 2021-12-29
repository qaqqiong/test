<template>
  <div id="recommend">
    <ul>
      <li v-for="(item, index) in message" :key="index">
        <div class="title">{{ item.title }}</div>
        <img v-show="item.image_url!=null&&item.image_url!=''" :src="item.image_url">
        <div class="message">
          <span class="belong">{{ item.media_name }}</span>
          <span class="com">{{item.comment_count}}评论</span>
          <span class="datetime">{{item.datetime}}</span>
        </div>
        <hr />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: [],
    };
  },
  mounted() {
    this.toAxios();
  },
  methods: {
    toAxios() {
      let that = this;
      this.$axios({
        method: "get",
        url: "/list/",
        params: {
          tag: "news_food",
          ac: "wap",
          count: "20",
          format: "json_raw",
          as: "A17538D54D106FF",
          cp: "585DF0A65F0F1E1",
          min_behot_time: "1482491618",
        },
      })
        .then(function (response) {
          that.message = response.data.data;
          console.log(response);
          console.log(that.message);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  computed: {},
};
</script>
<style scoped>
li {
  margin:0px 10px;
  padding-top: 8px;
}
li:last-child{
  margin-bottom: 53px;
}
.title{
  font-size: 15px;
}
.zd {
  font-size: 10px;
  color: red;
}
.belong {
  font-size: 12px;
  color: #ccc;
}
.com {
  font-size: 12px;
  color: #ccc;
}
.datetime{
  font-size: 12px;
  color: #ccc;
}
hr{
  width:394px;
  height: 1px;
  color: #E0E0E0;
  margin: 0px;
  padding: 0px;
  text-align: center;
  margin-top: 8px;
}
img{
  width: 394px;
  height: 200px;
  margin: 3px 0px;
}
</style>
