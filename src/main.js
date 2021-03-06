// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//引入vant组件库
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios';
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import 'lib-flexible/flexible.js'
Vue.prototype.$video = Video

Vue.prototype.$axios = axios;
Vue.use(Vant)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store
})