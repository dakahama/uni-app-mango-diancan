import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// 引入全局组件
import divider from "@/components/common/divider.vue"
import card from "@/components/common/card.vue"
import price from "@/components/common/price.vue"
import commonList from "@/components/common/common-list.vue"
// 全局加载动画
import loading from "@/components/common/loading.vue"
Vue.component('divider',divider)
Vue.component('card',card)
Vue.component('price',price)
Vue.component('commonList',commonList)
Vue.component('loading',loading)
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
