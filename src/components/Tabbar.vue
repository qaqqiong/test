<template>
  <div id="tabber">
    <van-tabbar
      v-model="active"
      active-color="#2782EA"
      inactive-color="#6E6E6E"
    >
      <van-tabbar-item
        :to="item.name"
        @click="tabIndex(index)"
        v-for="(item, index) in tabbars"
        :key="'tabbar' + index"
      >
        <span>{{ item.title }}</span>
        <template #icon="props">
          <img :src="props.active ? item.active : item.normal" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      x: 1,
      active: 0,
      tabbars: [
        {
          name: "/home/home",
          title: "首页",
          normal: require("../assets/Tabbar/首页.svg"),
          active: require("../assets/Tabbar/首页_active.svg"),
        },
        {
          name: "/videointerface/videointerface",
          title: "视频",
          normal: require("../assets/Tabbar/视频.svg"),
          active: require("../assets/Tabbar/视频_active.svg"),
        },
        {
          name: "/theater/theater",
          title: "放映厅",
          normal: require("../assets/Tabbar/放映厅.svg"),
          active: require("../assets/Tabbar/放映厅_active.svg"),
        },
        {
          name: "/file/file",
          title: "未登录",
          normal: require("../assets/Tabbar/我的.svg"),
          active: require("../assets/Tabbar/我的_active.svg"),
        },
      ],
    };
  },
  mounted() {
    //如有缓存，刷新界面时还进入该界面
    let index = sessionStorage.getItem("tabIndex");
    if (index) {
      this.tabIndex(index);
    }
  },
  methods: {
    tabIndex(index) {
      index = Number(index);
      this.active = index;
      //记录当前tab页
      sessionStorage.setItem("tabIndex", index);
      let val = this.tabbars[index].name;
      this.$router.push(val);
    },
  },
};
</script>
<style scoped>
.van-tabbar {
  width: 414px;
  height: 53px;
  box-shadow: 0px 0.5px 7px 0px rgba(0, 0, 0, 0.1);
}
</style>