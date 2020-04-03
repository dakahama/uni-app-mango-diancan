<template>
	<view>
		<uni-status-bar></uni-status-bar>
		<view class="d-flex a-center j-sb py-2 px-3 text-light-muted">
			<view class="iconfont icon-shanchu1" @click="goBack"></view>
		</view>
		<view class="p-5">
			<view class="font-big mb-5">手机号注册</view>
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
			
			<common-button style="margin-right: auto;" @click="openVaild" class="mb-4 text-light-muted">获取验证码(1234)</common-button>
			<valid-code class="mt-4" :maxlength="4" :isPwd="false" @finish="getCode"></valid-code>
			 
			<view class="py-2 w-100 d-flex a-center j-center main-bg-color text-white rounded font-md mb-4" 
			hover-class="main-bg-hover-color" @click="submit">
				注 册
			</view>
			
			<label class="d-flex a-center" @click="check = !check">
				<radio color="#1CBBB4" :checked="check"/>
				<text class="text-light-muted font ml-3">已阅读并同意芒果点餐应用协议</text>
			</label>
		</view>
		
	</view>
</template>

<script>
	import uniStatusBar from "@/components/uni-ui/uni-status-bar/uni-status-bar.vue"
	import validCode from "@/components/common/vaildCode.vue"
	import {mapMutations} from 'vuex';
	export default {
		components: {
			uniStatusBar,validCode
		}, 
		data() {
			return {
				username:"",
				password:"",
				check:false,
				vaildcode:'',
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
					password:false,
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
				if (!this.validate('password')) return;
				uni.showLoading({
					title: '注册中...',
					mask: true
				})
				this.$H.post('/user/user/register',{
					username:this.username,
					password:this.password,
					vaildcode:this.vaildcode
				}).then(res=>{
					uni.hideLoading()
					uni.showToast({
						title: '注册成功',
						icon: 'none'
					});
					uni.navigateBack({
						delta:1
					})
				}).catch(err=>{
					
				})
			},
			openVaild(){
				uni.showModal({
					content:'默认为 1234'
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

