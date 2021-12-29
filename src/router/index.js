import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
    // 解决报错
const originalPush = Router.prototype.push
const originalReplace = Router.prototype.replace
    // push
Router.prototype.push = function push(location, onResolve, onReject) {
        if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
        return originalPush.call(this, location).catch(err => err)
    }
    // replace
Router.prototype.replace = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
    return originalReplace.call(this, location).catch(err => err)
}
export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            //dedirect重定向
            redirect: "/home/home"
        },
        //首页
        {
            name: "Home",
            path: "/home/home",
            component: () =>
                import ("@/views/Home/Home.vue")
        },
        //视频
        {
            name: "VideoInterface",
            path: "/videointerface/videointerface",
            component: () =>
                import ("@/views/VideoInterface/VideoInterface.vue")
        },
        //放映厅
        {
            name: "Theater",
            path: "/theater/theater",
            component: () =>
                import ("@/views/Theater/Theater.vue")
        },
        //我的
        {
            name: "File",
            path: "/file/file",
            component: () =>
                import ("@/views/File/File.vue")
        },
        //推荐详情界面
        {
            name: "RecommendDetail",
            path: "/home/recommenddetail",
            meta: { showNav: true },
            component: () =>
                import ("@/views/Home/RecommendDetail.vue")

        }
    ]
})