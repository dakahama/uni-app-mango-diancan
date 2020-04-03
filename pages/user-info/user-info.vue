<template>
	<view>
		<uni-list-item title="头像">
			<block slot="right">
				<image :src="user.avatar" @click="chooseImage"
				style="height: 90rpx;width: 90rpx;"
				class="rounded-circle"></image>
			</block>
		</uni-list-item>
		<uni-list-item title="用户名" @click="toeditUsername">
			<block slot="right">
				{{user.username}}
			</block>
		</uni-list-item>
		
		<view class="uni-common-mt" v-show="editusername">
			<view class="uni-form-item uni-column">
				
				<view class="title text-center">更改用户名</view>
				
				<input class="uni-input border mx-3" style="height: 75upx;" @input="update" 
				focus placeholder="输入用户名" :value="user.username2"/>
			</view>
			<view class="p-3 d-flex">
				<view class="text-center w-100 flex j-center text-white font-md rounded py-2"
				hover-class="main-bg-hover-color" style="background-color: #00BFFF;"
				@click="canceleditusername">
					取 消
				</view>
				<view class="text-center w-100 flex j-center main-bg-color text-white font-md rounded py-2"
				hover-class="main-bg-hover-color" @click="overeidtusername">
					确 定
				</view>
			</view>
		</view>
		<divider></divider>
		
		<view class="py-3 px-5 text-light-muted">
			<view class="text-center w-100 main-bg-color text-white font-md rounded py-2" 
			hover-class="main-bg-hover-color" @click="submit">
				确 定
			</view>
		</view>
		
		<divider></divider>
		<uni-list-item title="修改密码" @click="tochangepassword"></uni-list-item>
		<uni-list-item title="手机号(不可更改)">
			<block slot="right">
				{{userInfo.phone}}
			</block>
		</uni-list-item>
	</view>
</template>

<script>
	import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		components:{
			uniListItem
		},
		data() {
			return {
				editusername:false,
				user:{
					avatar:'',
					username:'',
					username2:''
				}
			}
		},
		computed: {
			...mapState({
				userInfo:state=>state.user.userInfo,
			})
		},
		
		onLoad(e) {
			
			
			this.user = {
				avatar:this.userInfo.avatar,
				username:this.userInfo.username,
				username2:this.userInfo.username
			}
			
		},
		methods: {
			...mapMutations([
				'updateUser'
			]),
			chooseImage() {
				
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'],
					success: res => {
						//res.tempFilePaths是数组
						res.tempFilePaths.forEach(item => {
							uni.uploadFile({
								url: 'http://192.168.1.103:8085/admin/comment/image/upload',
								filePath: item,
								name: 'file',
								success: res => {
									this.user.avatar = JSON.parse(res.data).data
								}
							});
						});
					}
				});
			},
			toeditUsername(){
				this.editusername = true
			},
			update(e){
				this.user.username2 = e.detail.value
			},
			overeidtusername(){
				if(this.user.username2 === '') {
					return uni.showToast({
						title:'用户名不能为空',
						icon:'none'
					})
				}
				if(this.user.username2.length > 20) {
					return uni.showToast({
						title:'用户名不能超过20个字符',
						icon:'none'
					})
				}
				this.user.username = this.user.username2
				this.editusername = false
			},
			canceleditusername(){
				
				this.user.username2 = this.user.username
				this.editusername = false
			},
			submit(){
				this.$H.post('/user/user/update/'+this.userInfo.id,this.user,{
					token:true
				}).then(res=>{
					uni.showToast({
						title:'修改成功',
						icon:'success'
					})
					this.updateUser(this.user)
					
				}).catch(err=>{
					
				})
			},
			tochangepassword(){
				uni.navigateTo({
					url:'user-info-edit'
				})
			}
		}
	}
</script>

<style>

</style>
