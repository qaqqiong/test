<template>
  <div id="search">
    <van-popover v-model="showPopover" trigger="click" placement="bottom">
      <van-grid clickable>
        <van-grid-item>
          <div class="main">
            <div class="history">
              <div class="historyTitle">历史搜索记录：</div>
              <span v-for="(item, index) in searchMessage" :key="index">{{
                item.name
              }}</span>
            </div>
            <div class="host">
              <div>热门搜索</div>
              <span v-for="(item, index) in hotSearch" :key="index">
                {{item.name}}
              </span>
            </div>
          </div>
        </van-grid-item>
      </van-grid>
      <template #reference>
        <van-search
          v-model="value"
          shape="round"
          background="red"
          placeholder="请输入搜索关键词"
          @search="addSearchNum(value)"
        />
      </template>
    </van-popover>
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
      value: "",
      showPopover: false,
      searchMessage: [],
      hotSearch:[]
    };
  },
  methods: {
    addSearchNum(value) {
      this.$store.commit("addSearchNum", value);
      this.$router.push({ name: "SearchDetails" });
    },
    sort(){
      for(let i=0;i<this.hotSearch.length;i++)
      {
        for(let j=0;j<this.hotSearch.length-i-1;j++)
        {
          if(this.hotSearch[j].num<this.hotSearch[j+1].num)
          {
            let temp=this.hotSearch[j+1];
            this.hotSearch[j+1]=this.hotSearch[j];
            this.hotSearch[j]=temp;
          }
        }
      }
    }
  },
  mounted() {
    this.searchMessage = JSON.parse(localStorage.getItem("searchDetail"));
    this.hotSearch = JSON.parse(localStorage.getItem("searchDetail"));
    this.sort();
  },
};
</script>
<style>
#search {
  display: flex;
  align-items: center;
  justify-content: center;
}
.van-search {
  width: 365px;
}
.issue {
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
.issue div {
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
.van-grid-item__content--clickable {
  width: 300px;
  height: auto !important;
  height: 50px;
  min-height: 50px;
}
.historyTitle {
  text-align: left;
}
.main{
  width: 300px;
  height: auto !important;
  height: 50px;
  min-height: 50px;
}
.main span{
  margin-right: 10px;
}
</style>