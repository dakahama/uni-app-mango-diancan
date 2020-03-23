<template>
	<view>
		<view class="p-2 d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shrink">
				收货人：</view>
			<input class="px-1 font-md flex-1" type="text" 
			v-model="form.name" />
		</view>
		<view class="p-2 d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shrink">
				手机号码：</view>
			<input class="px-1 font-md flex-1" type="text" 
			v-model="form.phone" />
		</view>
		<divider></divider>
		
		<view class="p-2 d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shrink">
				所在地区：</view>
			<input class="px-1 font-md flex-1" type="text" 
			v-model="form.address" />
		</view>
		
		<view class="p-2 d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shrink">
				详细地址：</view>
			<input class="px-1 font-md flex-1" type="text" 
			v-model="form.detail" />
		</view>
		
		<divider></divider>
		
		<view class="p-2 d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shrink">
				设为默认地址：</view>
			<switch :checked="form.status === 1" class="ml-auto" color="#FD6801"
			@change="form.status = $event.detail.value ? 1 : 0"/>
		</view>
		<divider></divider>
		<view class="p-3">
			<view class="text-center w-100 main-bg-color text-white font-md rounded py-2" hover-class="main-bg-hover-color" @click="submit">
				保 存
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations,mapActions} from "vuex"
	export default {
		components: {
		},
		data() {
			return {
				isedit:false,
				themeColor: '#007AFF',
				index:-1,
				form:{
					id:"",
					name:"",
					phone:"",
					address:"",
					detail:"",
					status:0,
				}
			}
		},
		computed: {
			...mapState({
				userInfo:state=>state.user.userInfo
			}),
		},
		onLoad(e) {
			//从地址详情页跳转到地址编辑页 有数据即为编辑 无数据即为创建
			if (e.data) {
				let result = JSON.parse(e.data)
				this.form = result.item
				this.index = result.index
				this.isedit = true
				uni.setNavigationBarTitle({
					title:"修改收货地址"
				})
			}
		},
		// 监听返回
		onBackPress() {
		  
		},
		// 页面卸载
		onUnload() {
			
		},
		methods: {
			...mapActions(['updatePathAction','createPathAction']),
			// 提交
			submit(){
				// 验证表单
				
				// 修改
				if (this.isedit) {
					
					this.$H.post('/user/user/address/update/'+this.form.id,this.form,{
						token:true,
						header:{
							'Content-Type':'application/json;charset=UTF-8',
						}
					}).then(res=>{
						this.updatePathAction({
							index:this.index,
							item:this.form
						})
						uni.showToast({ title: '修改成功' });
						uni.navigateBack({ delta: 1 })
						uni.$emit('updateUserPathList')
					})
					return;
				}
				
				this.$H.post('/user/user/address/'+this.userInfo.id,this.form,{
					token:true,
					header:{
						'Content-Type':'application/json;charset=UTF-8',
					}
				}).then(res=>{
					this.createPathAction(this.form)
					uni.showToast({ title: '创建成功' });
					uni.navigateBack({ delta: 1 });
				})
			},
		}
	}
</script>

<style>
page{
	background: #EEEEEE;
}
</style>
