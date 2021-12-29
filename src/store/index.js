import Vue from "vue"
//引入vuex
import Vuex from "vuex"
import mutations from '@/store/mutations'
//挂载vuex
Vue.use(Vuex)
    //创建vuex对象
const store = new Vuex.Store({
        state: {
            //此处的键值对就是vuex要管理的状态
            recommendDetail: {}
        },
        //方法 用来给数据赋值
        mutations,
    })
    //导出store
export default store