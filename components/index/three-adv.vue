<template>
	<!-- 375 530  375 264 2-->
	<view class="d-flex">
		<image :src="resdata[0].cover" 
		lazy-load
		style="width: 375upx; height: 530upx;border-right: 2upx solid #F5F5F5;"
		@click="openDetail(resdata[0])"></image>
		<view class="d-flex flex-column"> 
			<image :src="resdata[1].cover" @click="openDetail(resdata[1])"
			style="width: 375upx ;height: 264upx;border-bottom: 2upx solid #F5F5F5;"></image>
			<image :src="resdata[2].cover" @click="openDetail(resdata[2])"
			style="width: 375upx ;height: 264upx"></image>
		</view>
	</view>
</template>

<script>
	export default{
		props: {
			resdata: Array
		},
		methods: {
			// 前往详情页
			openDetail(e) {
				uni.navigateTo({
					url:'/pages/detail/detail?id='+e.id
				})
			}
		}
	}
</script>

<style>
</style>
