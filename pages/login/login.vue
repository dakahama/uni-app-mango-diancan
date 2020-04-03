<template>
	<view>
		<uni-status-bar></uni-status-bar>
		<view class="d-flex a-center j-sb py-2 px-3 text-light-muted">
			<view class="iconfont icon-shanchu1" @click="goBack"></view>
			
			<view class="font-md" @click="forget">忘记密码</view>
			
		</view>
		
		<view class="p-5">
			<view class="font-big mb-5">密码登录</view>
			
			<!--
			<view class="font mb-5 text-light-muted" @click="toVaild">验证码登录</view>
			-->
			<input type="text" class="border-bottom mb-4   px-0"
			placeholder="请输入手机号" v-model="username"
			placeholder-class="text-light-muted"
			@focus="focus('username')" @blur="blur('username')"
			:class="focusClass.username ? 'input-border-color' : ''"/>
			
			<input type="password" class="border-bottom mb-4 px-0"
			placeholder="请输入密码" v-model="password"
			placeholder-class="text-light-muted"
			@focus="focus('password')" @blur="blur('password')"
			:class="focusClass.password ? 'input-border-color' : ''"/>
			<view class="py-2 w-100 d-flex a-center j-center main-bg-color text-white rounded font-md mb-4" 
			hover-class="main-bg-hover-color" @click="submit">
				登录
			</view>
			
			<view class="font mb-5 d-flex j-center text-light-muted" @click="register">去注册</view>
			
			<label class="d-flex a-center" @click="check = !check">
				<radio color="#1CBBB4" :checked="check"/>
				<text class="text-light-muted font ml-3">已阅读并同意芒果点餐应用协议</text>
			</label>
		</view>
		
	</view>
</template>

<script>
	import uniStatusBar from "@/components/uni-ui/uni-status-bar/uni-status-bar.vue"
	import {mapMutations} from 'vuex';
	export default {
		components: {
			uniStatusBar
		}, 
		data() {
			return {
				username:"",
				password:"",
				check:false,
				
				// 验证规则
				rules:{
					
					username:[
						{
							rule:/^1[3456789]\d{9}$/,
							msg:"手机号格式不正确"
						}
					],
					password:[
						{
							rule:/^.{5,20}$/,
							msg:"密码长度必须为5-20个字符"
						}
					]
					
				},
				
				focusClass:{
					username:false,
					password:false
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
			
			toVaild(){
				uni.navigateTo({
					url: './login-vail?phone='+this.username
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
				// 验证密码
				if (!this.validate('password')) return;
				
				uni.showLoading({
					title: '登录中...',
					mask: true
				})
				
				this.$H.post('/user/user/login',{
					username:this.username,
					password:this.password
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
					uni.navigateBack({
						delta:1
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
			},
			register(){
				uni.navigateTo({
					url:'./register'
				})
			}
		}
	}
</script>

<style>

</style>
