<template>
	<view class="p-2">
		<scroll-view scroll-x class="scroll-row" style="word-break: break-all;">
			<view class="scroll-row-item rounded bg-light-secondary mr-2 p-2" 
			v-for="(item,index) in comments" :key="index"
			style="width: 600rpx;height: 380rpx;">
				
				<view class="d-flex a-center mb-1">
					<image :src="item.userpic" 
					mode="widthFix" style="width: 70rpx;height: 70rpx;"
					class="rounded-circle"></image>
					<view class="ml-2">
						<text class="font-md line-h">
						{{item.username}}</text>
						<text class="d-block font text-light-muted line-h">{{item.createTime | formatTime}}</text>
					</view>
				</view>
				
				<view class="font mb-3 line-h-sm" style="white-space: normal">
					{{item.context}}
				</view>
				
				<scroll-view scroll-x class="scroll-row">
					<block v-for="(item2,index2) in item.imgList" :key="index2">
						<view class="span24-8 mr-2 scroll-row-item"
						@click="event(item2,index2,index)">
							<image :src="item2" 
							mode="widthFix" style="height: 100rpx;"
							class="rounded"></image>
						</view>
					</block>
				</scroll-view>
				<!--
				<view class="row">
					<view class="span24-8 px-2"
					v-for="(item2,index2) in item.imgList" :key="index2">
						<image :src="item2" 
						mode="widthFix" style="height: 115rpx;"
						class="rounded"></image>
					</view>
				</view>
				-->
			</view>
		</scroll-view>
		
		<view class="d-flex a-center j-center py-2 mt-2 text-primary"
		hover-class="bg-light-secondary" @click="open">
			更多评论 <view class="iconfont icon-you"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['comments','goodId'],
		computed:{
			
		},
		methods: {
			open(){
				uni.navigateTo({
					url: '/pages/detail-comments/detail-comments?id='+this.goodId
				});
			},
			event(item2,index2,index){
				return uni.previewImage({
					current:index,
					urls:this.comments[index].imgList,
					indicator:"default"
				})
				
			}
		}
	}
</script>

<style>
.fload {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
