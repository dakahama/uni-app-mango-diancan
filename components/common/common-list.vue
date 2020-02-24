<template>
	<!-- 372.5 5 372.5-->
	<view style="width: 372.5upx;" @click="openDetail"
	:style="index%2 === 0 ? 'border-right: 7upx solid #F5F5F5;':''">
		<image :src="item.cover" mode="widthFix" lazy-load></image>
		<view class="p-1 pt-1">
			<view class="font-md">{{item.name}}</view>
			<text class="d-block font text-light-muted">{{item.desc}}</text>
			<view class="d-flex my-1">
				<price>{{item.pprice}}</price>
				<view class="font-sm text-light-muted line-through ml-1 a-self-end line-h" >￥{{item.oprice}}</view>
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
			openDetail() {
				uni.navigateTo({
					url:'/pages/detail/detail'
				})
			}
		}
	}
</script>

<style>
</style>
