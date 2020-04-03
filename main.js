import Vue from 'vue'
import App from './App'
import store from './store'

Vue.prototype.$store = store
Vue.config.productionTip = false
// 引入全局组件
import divider from "@/components/common/divider.vue"
import card from "@/components/common/card.vue"
import price from "@/components/common/price.vue"
import commonList from "@/components/common/common-list.vue"
// 全局加载动画
import loading from "@/components/common/loading.vue"

import cuCustom from '@/common/colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)


import $H from "@/common/lib/request.js"
Vue.prototype.$H = $H
import $U from '@/common/lib/util.js';
Vue.prototype.$U = $U
Vue.prototype.navigateTo = (options)=>{
	if(!store.state.user.loginStatus){
		uni.showToast({
			title:'请先登录',
			icon:'none'
		})
		return uni.navigateTo({
			url:'/pages/login/login'
		})
	}
	uni.navigateTo(options)
	
}

Vue.component('divider',divider)
Vue.component('card',card)
Vue.component('price',price)
Vue.component('commonList',commonList)
Vue.component('loading',loading)
App.mpType = 'app'




const app = new Vue({
	store,
    ...App
})
app.$mount()
