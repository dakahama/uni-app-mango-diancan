export default {
	state:{
		// 登录状态
		loginStatus:false,
		// token
		token:null,
		// 用户信息
		userInfo:{}
	},
	mutations:{
		updateUser(state,user){
			state.userInfo.avatar = user.avatar
			state.userInfo.username = user.username
			let data = {
				user:state.userInfo,
				token:state.token
			}
			uni.setStorageSync('userInfo',JSON.stringify(data))
		},
		// 初始化登录状态
		initUser(state){
			let userInfo = uni.getStorageSync('userInfo')
			if (userInfo) {
				userInfo = JSON.parse(userInfo)
				
				state.userInfo = userInfo.user
				state.token = userInfo.token
				state.loginStatus = true
			}
		},
		// 登录
		login(state,userinfo){
			console.log(userinfo)
			state.userInfo = userinfo.user
			state.loginStatus = true
			state.token = userinfo.token
			// 持久化存储
			uni.setStorageSync('userInfo',JSON.stringify(userinfo))
		},
		// 退出登录
		logout(state){
			state.userInfo = {}
			state.loginStatus = false
			state.token = null
			uni.removeStorageSync('userInfo')
		}
	}
}