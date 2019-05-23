/*vue在普通网页的使用
* 1.使用script标签导入vue的包
* 2.在index中创建id为app的div
* 3.实例化Vue
* */
/*webpack中使用vue
* 1.import Vue from 'vue';
* 2.注意导入的构造函数功能不玩整(runtime-only)
* 如何解决:1.在vue包中更改main的入口文件(不推荐)
*         2.import Vue from vue/dist/vue.js(一般)
*         3.在resolve中的alias属性添加(以vue结尾,更换路径)vue$:vue/dist/vue.js(推荐)
* */
/*node.js中导入和导出模块
* 导入 require
* 导出对象 module.exports={}
* 导出方法 exports.method=method
*
*
* ES6中导入和导出模块
* import name,{number} from 'module' {}为按需导出
* import 'root'
*
* export default {}默认导出
* export var number=1
* */
import Vue from 'vue';

// import login from '../login.vue'

/*const vm = new Vue({
        el: '#app',
        data: {
            msg: 'hello'
        },
        render: function (createElement) {
            return createElement(login);
        }
        // components:{
        //     login
        // }
    }*/

import VueRouter from 'vue-router'
import App from '../App.vue';

Vue.use(VueRouter);
import account from '../main/Account.vue'
import goodslist from '../main/GoodsList.vue'
import login from '../subcom/login.vue'
import register from '../subcom/register.vue'
const router = new VueRouter({
    routes: [
        {path: '/account', component: account,children:[{path:'login',component:login},{path:'register',component:register}]},
        {path: '/goodslist', component: goodslist}
    ]
});
var vm = new Vue({
    el: '#app',
    // router: router
    render:(cb)=>cb(App),
    router
});


