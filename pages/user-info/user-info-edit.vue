<template>
	 <view>
		<view class="uni-common-mt">
			<view class="uni-form-item uni-column">
				
				<view class="title text-center">更改密码</view>
				
				<input class="uni-input border mx-3 my-2" style="height: 75upx;" type="password"
				@input="update1" focus placeholder="输入旧密码" :value="oldpassword"/>
				
				<input class="uni-input border mx-3 my-2" style="height: 75upx;" type="password"
				@input="update2" placeholder="输入新密码" :value="newpassword"/>
				
				<input class="uni-input border mx-3 my-2" style="height: 75upx;" type="password"
				@input="update3" placeholder="确认新密码" :value="newpassword2"/>
			
			</view>
			
			<view class="p-3 d-flex">
				<view class="text-center w-100 flex j-center main-bg-color text-white font-md rounded py-2"
				hover-class="main-bg-hover-color" @click="submit">
					确定
				</view>
			</view>
		</view>
		
		
		
	</view>
</template>

<script>
	import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
	export default {
		data() {
			return {
				oldpassword:'',
				newpassword:'',
				newpassword2:'',
				rule:{
					rule:/^.{5,20}$/,
					msg:"密码长度必须为5-20个字符"
				},
			}
		},
		computed: {
			...mapState({
				userInfo:state=>state.user.userInfo,
			})
		},
		onLoad() {
			
		},
		methods: {
			submit(){
				if(!this.rule.rule.test(this.oldpassword) || !this.rule.rule.test(this.newpassword) || 
				 !this.rule.rule.test(this.newpassword2)){
					return uni.showToast({
						title:this.rule.msg,
						icon:'none'
					})
				}
				
				if(this.newpassword !== this.newpassword2){
					return uni.showToast({
						title:'两次密码不一致',
						icon:'none'
					})
				}
				
				this.$H.post('/user/user/changepass/'+this.userInfo.id,{
					old:this.oldpassword,
					new1:this.newpassword,
					new2:this.newpassword2
				},{
					token:true
				}).then(res=>{
					uni.showToast({
						title: res,
						icon:'none'
					});
					uni.navigateBack({
						delta:1
					})
				}).catch(err=>{
					
				})
				
			},
			update1(e){
				this.oldpassword = e.detail.value
			},
			update2(e){
				this.newpassword = e.detail.value
			},
			update3(e){
				this.newpassword2 = e.detail.value
			}
		}
	}
</script>

<style>

</style>
