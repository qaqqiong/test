<template>
  <div id="search">
    <van-search
      v-model="value"
      shape="round"
      background="red"
      placeholder="请输入搜索关键词"
    />
    <div class="issue">
      <div>+</div>
      <span>发布</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value:""
    };
  },
  methods: {},
  computed: {},
};
</script>
<style>
#search{
  display: flex;
  align-items: center;
  justify-content: center;
}
.van-search{
  width: 365px;
}
.issue{
  width: 40px;
  height: 54px;
  background-color: red;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 8px;
  color: #fff;
  padding-right: 12px;
}
.issue div{
  width: 25px;
  height: 25px;
  border: 1px solid white;
  border-radius: 50%;
  text-align: center;
  line-height: 25px;
  font-size: 20px;
  background-color: white;
  color: red;
}
</style>
