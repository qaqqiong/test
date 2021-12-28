<template>
  <div id="tab">
    <van-tabs v-model="active">
      <van-tab title="关注">内容 1</van-tab>
      <van-tab title="推荐">
        <Recommend></Recommend>
      </van-tab>
      <van-tab title="热榜">内容 3</van-tab>
      <van-tab title="视频">内容 4</van-tab>
      <van-tab title="小说">内容 5</van-tab>
      <van-tab title="宁波">内容 6</van-tab>
    </van-tabs>
    <div class="select">
      <img src="../../assets/Home/分类.svg" />
    </div>
  </div>
</template>
<script>
import Recommend from "./Recommend.vue";
export default {
  components: { Recommend },
  data() {
    return {
      active: 1,
    };
  },
  methods: {},
  computed: {},
};
</script>
<style>
#tab {
  display: flex;
}
.van-tabs--line .van-tabs__wrap {
  width: 366px;
}
.select {
  width: 48px;
  height: 44px;
  text-align: center;
  line-height: 44px;
}
.select img {
  width: 20px;
  height: 20px;
  margin-right: 12px;
  margin-top: 12px;
}
.van-tab--active {
  color: red;
}
</style>
