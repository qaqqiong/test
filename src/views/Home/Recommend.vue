<template>
  <div id="recommend">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <ul>
        <li
          v-for="(item, index) in message"
          :key="index"
          @click="toRecommendDetails(item.tag_id)"
        >
          <div class="title">{{ item.title }}</div>
          <img
            v-show="item.image_url != null && item.image_url != ''"
            :src="item.image_url"
          />
          <div class="message">
            <span class="zd" v-show="index < 3">置顶</span>
            <span class="belong">{{ item.media_name }}</span>
            <span class="com">{{ item.comment_count }}评论</span>
            <span class="datetime">{{ item.datetime }}</span>
          </div>
          <hr v-show="index > 2" />
        </li>
      </ul>
    </van-pull-refresh>
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      message: [],
        isLoading: false,
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
          that.message = response.data.data;
          console.log(response);
          console.log(that.message);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    toRecommendDetails(value) {
      this.$store.commit("setRecommendDetail", value);
      this.$router.push({ name: "RecommendDetail" });
    },
    onRefresh() {
      this.toAxios();
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
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
</style>
