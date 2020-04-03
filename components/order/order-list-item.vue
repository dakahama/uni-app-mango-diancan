<template>
	<view class="border-bottom d-flex a-center py-2 border-light-secondary"
	@click="open">
		<image :src="item.cover" mode="widthFix"
		style="width: 150rpx;height: 150rpx;" class="rounded mx-2 flex-shrink"
		></image>
		<view class="flex-1">
			<view class="d-flex a-center">
				<text class="font-md text-dark">{{item.title}}</text>
				<text class="font-md text-light-muted ml-auto"
				>￥{{item.pprice}}</text>
			</view>
			<view class="d-flex a-center">
				<text class="font text-light-muted">{{item.attrs}}</text>
				<text class="font text-light-muted ml-auto"
				>x{{item.num}}</text>
			</view>
		</view>
		<view v-show="item.reviewId <= 0 && orderStatus === '待评价'">
			<common-button @click="toComment">去评价</common-button>
		</view>
	</view>
</template>

<script>
	import commonButton from '../common/common-button.vue';
	export default {
		components:{
			commonButton
		},
		props: {
			orderStatus:String,
			item: Object,
			index:Number
		},
		methods: {
			 
			open() {
				uni.navigateTo({
					url: '/pages/detail/detail?id='+this.item.productId
				});
			},
			toComment(){
				uni.navigateTo({
					url: '/pages/order/comment?orderItemId='+this.item.id
				})
			}
		},
	}
</script>

<style>
</style>
