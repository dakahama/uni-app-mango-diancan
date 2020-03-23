<template>
	<view class="row p-2 border-bottom border-light-secondary animated fadeIn faster" @click="openDetail">
		<view class="span-6">
			<image :src="item.cover"
			mode="widthFix" class="w-100"></image>
		</view>
		<view class="span-14 pl-3 d-flex flex-column">
			<view class="font-md font-weight">{{item.title}}</view>
			<view class="font text-light-muted line-h-md mb-auto" 
			style="word-break: break-all;">
				{{item.desci}}
			</view>
			<price>{{item.price}}</price>
			<view class="font-sm text-light-muted">
				{{item.num}}条销量 {{item.goodNums}}满意
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {
		},
		props: {
			item: Object,
			index:Number
		},
		methods: {
			openDetail() {
				uni.navigateTo({
					url: '/pages/detail/detail?id='+this.item.id
				});
			}
		},
	}
</script>

<style>
</style>
