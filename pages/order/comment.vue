<template>
	<view>
		<view class="content page-main">
				<form>
					<view class="cu-form-group margin-top">
						<view class="title">评论星级</view>
						<view class="flex flex-wrap text-left flex-sub text-content">
							<uni-rate size="16" value="5" margin="5" @change="getLevel"></uni-rate>
						</view>
					</view>
					<view class="cu-form-group align-start margin-top">
						<view class="title">评论内容</view>
						<textarea maxlength="-1" @input="textareaBInput" placeholder="请输入评价"></textarea>
					</view>
					<view class="cu-bar bg-white ">
						<view class="action">评论配图</view>
						<view class="action">{{ imgList.length }}/4</view>
					</view>
					<view class="cu-form-group">
						<view class="grid col-4 grid-square flex-sub">
							<view class="bg-img" v-for="(item, index) in imgList" :key="index" @tap="viewImage" :data-url="imgList[index]">
								<image :src="imgList[index]" mode="aspectFill"></image>
								<view class="cu-tag bg-red" @tap.stop="deleteImage" :data-index="index"><text class="cuIcon-close"></text></view>
							</view>
							<view class="solids" @tap="chooseImage" v-if="imgList.length < 4"><text class="cuIcon-cameraadd"></text></view>
						</view>
					</view>
					<view class="bg-white flex flex-direction padding-sm"><button class="cu-btn bg-yellow margin-tb-sm lg" @click="comment">保存</button></view>
				</form>
			</view>
		</view>
	</view>
</template>

<script>
import uniRate from '@/components/uni-ui/uni-rate/uni-rate.vue';
export default {
	components: { uniRate },
	data() {
		return {
			orderItemId: 0,
			textareaBValue: '',
			imgList: [],
			attachment: [],
			valueSync: 5
		};
	},
	onLoad(e) {
		this.orderItemId = e.orderItemId
	},
	onShow() {},
	methods: {
		textareaBInput(e) {
			this.textareaBValue = e.detail.value;
		},
		chooseImage() {
			uni.chooseImage({
				count: 4,
				sizeType: ['original', 'compressed'],
				sourceType: ['album'],
				success: res => {
					if (this.imgList.length != 0) {
						this.imgList = this.imgList.concat(res.tempFilePaths);
					} else {
						this.imgList = res.tempFilePaths;
					}
					//res.tempFilePaths是数组
					res.tempFilePaths.forEach(item => {
						uni.uploadFile({
							url: 'http://localhost:8085/admin/comment/image/upload',
							filePath: item,
							name: 'file',
							success: res => {
								console.log(JSON.parse(res.data).data);

								this.attachment.push(JSON.parse(res.data).data);
							}
						});
					});
				}
			});
		},
		viewImage(e) {
			uni.previewImage({
				urls: this.imgList,
				current: e.currentTarget.dataset.url
			});
		},
		deleteImage(e) {
			uni.showModal({
				content: '确定要删除此图片吗？',
				cancelText: '取消',
				confirmText: '确定',
				success: res => {
					if (res.confirm) {
						this.imgList.splice(e.currentTarget.dataset.index, 1);
					}
				}
			});
		},
		getLevel(level) {
			this.valueSync = level.value
		},
		comment() {
			uni.showLoading();
			if(this.textareaBValue === ''){
				return uni.showToast({
					title:'评价内容不能为空'
				})
			}
			this.$H.post('/product/comment',{
				orderItemId:this.orderItemId,//this.orderItemId,
				comment: this.textareaBValue,
				starLevel: this.valueSync,
				images: this.attachment,
			},{
				token:true
			}).then(res => {
				uni.showToast({
					title:'评价成功',
					icon:'none'
				})
				uni.navigateBack()
			})
		}
	}
};
</script>

<style></style>
