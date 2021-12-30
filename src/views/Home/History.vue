<template>
  <div id="recommend">
    <ul>
      <li v-for="(item, index) in message" :key="index">
        <div class="title">{{ item.title }}</div>
        <div class="img1">
          <div
            class="imgList"
            v-for="(item2, index2) in item.image_list"
            :key="index2"
          >
            <img :src="item2.url" />
          </div>
        </div>
        <div class="message">
          <span class="belong">{{ item.media_name }}</span>
          <span class="com">{{ item.comment_count }}评论</span>
          <span class="datetime">{{ item.datetime }}</span>
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
        url: "/bpi/list/",
        params: {
          tag: "news_history",
          ac: "wap",
          count: "10",
          format: "json_raw",
          as: "A17538D54D106FF",
          cp: "585DF0A65F0F1E1",
          min_behot_time: "1482491618",
        },
      })
        .then(function (response) {
          that.message = response.data.data;
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
  margin: 0px 10px;
  padding-top: 8px;
}
li:last-child {
  margin-bottom: 53px;
}
.title {
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
.datetime {
  font-size: 12px;
  color: #ccc;
}
hr {
  width: 394px;
  height: 1px;
  color: #e0e0e0;
  margin: 0px;
  padding: 0px;
  text-align: center;
  margin-top: 8px;
}
img {
  width: 394px;
  height: 200px;
  margin: 3px 0px;
}
.img1{
  display: flex;
  align-items: center;
  justify-content: center;
}
.imgList img {
  width: 131px;
  height: 100px;
}
</style>
