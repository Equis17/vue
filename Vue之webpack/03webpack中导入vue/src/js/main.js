console.log(1);
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

import Vue from 'vue';
import login from '../login.vue'

const vm = new Vue({
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
});
