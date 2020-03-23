<template>
	<!--基础详情-->
	<view class="p-2">
		<view class="font-lg">{{detail.title}}</view>
		<view class="font text-light-muted mb-3 line-h-sm" style="word-break: break-all;">
			{{detail.desci}}
		</view>
		<price priceSize="font-lg" unitSize="font">{{detail.price}}</price>
	</view>
</template>

<script>
	export default {
		props: ['detail'],
	}
</script>

<style>
</style>
