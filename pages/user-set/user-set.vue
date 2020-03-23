<template>
	<view>
		<card headTitle="账号管理" bodyStyle="background:#FFFFFF"
		v-show="loginStatus">
			<uni-list-item title="个人资料" @click="navigate('user-info')"></uni-list-item>
			<uni-list-item title="收货地址" @click="navigate('user-address')"></uni-list-item>
		</card>
		<card headTitle="关于" bodyStyle="background:#FFFFFF">
			<uni-list-item title="关于应用" @click="navigate('about')"></uni-list-item>
		</card>
		<view class="p-3">
			<view class="text-center w-100 main-bg-color text-white font-md rounded py-2" 
			hover-class="main-bg-hover-color" @click="logoutEvent">
				退 出
			</view>
		</view>
		
	</view>
</template>

<script>
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	import {mapMutations,mapState} from 'vuex';
	export default {
		components:{
			uniListItem
		},
		data() {
			return {
			}
		},
		computed:{
			...mapState({
				token:state=>state.user.token,
				loginStatus:state=>state.user.loginStatus
			})
		}
		,
		methods: {
			...mapMutations(['logout']),
			logoutEvent(){
				
				this.$H.post('/user/user/logout',{},{
					token:true,
					checkToken:true,
					toast:false
				}).then(res=>{
					this.logout()
					uni.showToast({
						title:'退出成功',
						icon:'none'
					})
					uni.navigateBack({
						delta: 1
					});
				})
				
				
				
			},
			
			navigate(path){
				if(!path) return;
				uni.navigateTo({
					url:`/pages/${path}/${path}`
				})
			}
		}
	}
</script>

<style>
page{
	background: #EEEEEE;
}
</style>
