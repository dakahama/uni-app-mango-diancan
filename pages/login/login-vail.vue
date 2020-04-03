<template>
	<view>
		<uni-status-bar></uni-status-bar>
		<view class="d-flex a-center j-sb py-2 px-3 text-light-muted">
			<view class="iconfont icon-shanchu1" @click="goBack"></view>
		</view>
		
		<view class="p-5">
			<view class="font-big mb-5">验证码登录</view>
			
			<view class="font mb-5 text-light-muted">短信验证码默认为1234</view>
			
			<view class="d-flex a-center mb-4">
				
				<input type="text" class="border-bottom mb-4 px-0 flex-1" style="width: 300upx;"
					placeholder="请输入手机号" v-model="username"
					placeholder-class="text-light-muted"
					@focus="focus('username')" @blur="blur('username')"
					:class="focusClass.username ? 'input-border-color' : ''"/>
				<common-button style="margin-right: auto;" @click="openVaild">获取验证码</common-button>
					
			</view>
			
		
			<valid-code :maxlength="4" :isPwd="false" @finish="getCode"></valid-code>
			
			<view class="mt-4 py-2 w-100 d-flex a-center j-center main-bg-color text-white rounded font-md mb-4" 
			hover-class="main-bg-hover-color" @click="submit">
				登录
			</view>
			
			
			
			
			<view class="font mb-5 d-flex j-center text-light-muted">去注册</view>
			
			<label class="d-flex a-center" @click="check = !check">
				<radio color="#1CBBB4" :checked="check"/>
				<text class="text-light-muted font ml-3">已阅读并同意芒果点餐应用协议</text>
			</label>
		</view>
		
	</view>
</template>

<script>
	import validCode from "@/components/common/vaildCode.vue"
	import uniStatusBar from "@/components/uni-ui/uni-status-bar/uni-status-bar.vue"
	import commonButton from '@/components/common/common-button.vue';
	import {mapMutations} from 'vuex';
	export default {
		components: {
			validCode,uniStatusBar,commonButton
		}, 
		onLoad(e) {
			if(e.phone !== ''){
				this.username = e.phone
			}
			
		},
		data() {
			return {
				username:"",
				vaildcode:"",
				check:false,
				
				// 验证规则
				rules:{
					
					username:[
						{
							rule:/^1[3456789]\d{9}$/,
							msg:"手机号格式不正确"
						}
					]
				},
				
				focusClass:{
					username:false,
					vaild:false
				},
			}
		},
		methods: {
			...mapMutations(['login']),
			goBack(){
				uni.navigateBack({
					delta: 1
				});
			},
			getCode(val){
				this.vaildcode = val
			},
			openVaild(){
				uni.showModal({
					content:'默认为1234'
				})
			},
			// 表单验证
			validate(key){
				var check = true
				this.rules[key].forEach((v)=>{
					if (!(v.rule).test(this[key])) {
						uni.showToast(
							{ 
								title: v.msg, 
								icon: 'none'
							}
						)
						check = false
						return false
					}
				})
				if(this.vaildcode !== '1234')
				{
					uni.showToast(
						{ 
							title: '验证码错误', 
							icon: 'none'
						}
					)
					check = false
					return check
				}
				
				return check
			},
			submit(){
				if (!this.check) {
					return uni.showToast({
						title: '请先同意芒果点餐应用协议',
						icon: 'none'
					});
				}
				if (!this.validate('username')) return;
				
				uni.showLoading({
					title: '登录中...',
					mask: true
				})
				this.$H.post('/user/user/login/vaild',{
					username:this.username,
					password:this.vaildcode
				}).then(res=>{
					console.log(res)
					this.login(res)
					// 刷新购物车
					uni.$emit('updateCart')
					uni.hideLoading()
					uni.showToast({
						title: '登录成功',
						icon: 'none'
					});
					uni.navigateTo({
						url:'/pages/profile/profile'
					})
				}).catch(err=>{
					console.log(err)
				})
			},
			forget(){
				
			},
			focus(key){
				this.focusClass[key] = true
			},
			blur(key){
				this.focusClass[key] = false
			}
		}
	}
</script>

<style>

</style>
