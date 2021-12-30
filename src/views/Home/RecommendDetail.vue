<template>
  <div id="RecommendDetail" :class="{ bgc: flag2 == false }">
    <div class="header">
      <img v-if="flag2==true" class="back" src="../../assets/Home/back.svg" @click="goBack()" />
      <img v-else class="back" src="../../assets/Home/back2.svg" @click="goBack()" />
      <span @click="changeType()">切换主题</span>
      <img v-if="flag2==true" src="../../assets/Home/耳机-02.svg" />
      <img v-else src="../../assets/Home/耳机2.svg" />
      <img v-if="flag2==true" src="../../assets/Home/搜索.svg" />
      <img v-else src="../../assets/Home/搜索2.svg" />
      <img v-if="flag2==true" src="../../assets/Home/更多.svg" />
      <img v-else src="../../assets/Home/更多2.svg" />
    </div>
    <div class="title">{{ this.message.title }}</div>
    <div class="top">
      <div class="left">
        <div class="logo">
          <img :src="this.message.media_user.avatar_url" />
        </div>
      </div>
      <div class="center">
        <span class="belong">{{ this.message.detail_source }}</span>
        <span class="time"
          >{{ this.message.publish_time }} ·
          {{ this.message.media_user.user_auth_info.auth_info }}</span
        >
      </div>
      <div class="right">关注</div>
    </div>
    <div class="content" v-html="this.message.content">
      {{ this.message.content }}
    </div>
    <div class="com">
      <div class="num">评论{{}}</div>
      <div class="comList"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: "",
      message: [],
      commentList: [],
      flag2: true,
    };
  },
  methods: {
    toAxios() {
      let that = this;
      this.$axios
        .get("/bpi/" + this.flag + "/info/")
        .then(function (response) {
          that.message = response.data.data;
          console.log(that.message);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    toGetCommentList() {
      let that = this;
      this.$axios({
        method: "get",
        url: "/bpi/api/comment/list/",
        params: {
          group_id: this.recommendDetail,
          item_id: this.recommendDetail,
          offset: 0,
          count: 20,
        },
      })
        .then(function (response) {
          that.commentList = response.data.data;
          console.log(that.commentList);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    goBack() {
      this.$router.push({ name: "Home" });
    },
    changeType(){
      this.flag2=!this.flag2
    }
  },
  computed: {
    recommendDetail() {
      return this.$store.state.recommendDetail;
    },
  },
  mounted() {
    this.flag = "i" + this.recommendDetail;
    this.toAxios();
  },
  created() {
    this.toGetCommentList();
  },
};
</script>
<style scoped>
#RecommendDetail {
  padding: 0px 10px;
}
.bgc{
  background-color: #000;
  color: #fff;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 10px;
}
.header img {
  width: 25px;
  height: 25px;
}
.back {
  margin-right: 180px;
}
.title {
  margin-top: 10px;
  font-size: 24px;
}
.logo {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
}
.logo img {
  width: 35px;
  height: 35px;
}
.top {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
.center {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0px 30px;
}
.belong {
  font-size: 14px;
}
.time {
  font-size: 14px;
  color: #ccc;
}
.right {
  width: 60px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: white;
  background-color: red;
  font-size: 12px;
}
.content {
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 160%;
}
</style>
