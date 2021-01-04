/*
 * @Author: maggot-code
 * @Date: 2020-12-23 00:19:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2020-12-29 14:50:58
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
