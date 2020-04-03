<template>
	<!-- 372.5 5 372.5-->
	<view style="width: 372.5upx;" @click="openDetail"
	:style="index%2 === 0 ? 'border-right: 7upx solid #F5F5F5;':''">
		<image :src="item.cover" style="width: 372.5upx;height: 264upx;;" mode="widthFix" lazy-load></image>
		<view class="p-1 pt-1">
			<view class="font-md">{{item.title}}</view>
			<text class="d-block font text-light-muted"
			style="word-break: break-all;">{{item.desci}}</text>
			<view class="d-flex my-1">
				<price>{{item.price}}</price>
			</view>
		</view>			
	</view>
</template>

<script>
	export default{
		props:{
			index: [Number,String],
			item:  Object
		},
		methods: {
			// 前往详情页
			openDetail() {
				uni.navigateTo({
					url:'/pages/detail/detail?id='+this.item.id
				})
			}
		}
	}
</script>

<style>
</style>
