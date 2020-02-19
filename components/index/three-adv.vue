<template>
	<!-- 375 530  375 264 2-->
	<view class="d-flex">
		<image :src="resdata.big.src"
		lazy-load
		style="width: 375upx; height: 530upx;border-right: 2upx solid #F5F5F5;"></image>
		<view class="d-flex flex-column"> 
			<image :src="resdata.smalltop.src"
			style="width: 375upx ;height: 264upx;border-bottom: 2upx solid #F5F5F5;"></image>
			<image :src="resdata.smallbottom.src"
			style="width: 375upx ;height: 264upx"></image>
		</view>
	</view>
</template>

<script>
	export default{
		props: {
			resdata: Object
		}
	}
</script>

<style>
</style>
