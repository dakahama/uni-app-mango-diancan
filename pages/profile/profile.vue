<template>
	<view>
		<view class="position-relative d-flex a-center" style="height: 320rpx;">
			<view class="iconfont icon-xiaoxi position-absolute text-white"
			style="font-size: 50rpx;top: 75rpx;right: 20rpx;z-index: 100;"></view>
			<image src="../../static/bg.jpg" mode="widthFix" 
			style="height: 320rpx;"></image>
			<view class="d-flex a-center position-absolute left-0 right-0"
			style="bottom: 50rpx;">
				<image src="../../static/userpic.png"
				style="width: 145rpx;height: 145rpx;border: 5rpx solid;" 
				class="rounded-circle border-light ml-4"></image>
				<view class="ml-2 text-white font-md">昵称</view>
				<view class="d-flex a-center j-center a-self-end ml-auto pl-1 pr-1"
				style="height: 70rpx;background: #F0AD4E;color: #CC4A00;
				border-top-left-radius: 40rpx;border-bottom-left-radius: 40rpx;">
					<view class="line-h iconfont icon-huangguan mr-1"></view>
					会员积分 1.99333
				</view>
			</view>
		</view>
		<card >
			<view slot="title" class="d-flex a-center j-sb w-100">
				<text class="font-md font-weight">我的订单</text>
				<view class="text-secondary ml-auto font">
					全部订单 <text class="iconfont icon-you font"></text>
				</view>
			</view>
			<view class="d-flex a-center">
				<view class="flex-1 d-flex flex-column a-center j-center py-3"
				hover-class="bg-light-secondary"
				v-for="(item,index) in orders" :key="index"
				@click="openOrder(item)">
					<view class="iconfont font-lg line-h"
					:class="item.icon"></view>
					<view>{{item.name}}</view>
				</view>
			</view>
		</card>
		
		<divider></divider>
		<uni-list-item title="会员" showExtraIcon="true" leftIcon="icon-VIP" 
		leftIconStyle="color:#FDBF2E"></uni-list-item>
		
		<divider></divider>
		<uni-list-item title="更多设置" showExtraIcon="true" leftIcon="icon-icon_set_up"
		leftIconStyle="color:#808C98"
		@click="navigate('user-set')"></uni-list-item>
	</view>
	
</template>

<script>
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		components:{
			uniListItem
		},
		data() {
			return {
				orders:[
					{
						name:"待付款",
						icon:"icon-wallet_icon",
						index:1
					},{
						name:"待收货",
						icon:"icon-daishouhuo",
						index:2
					},{
						name:"待评价",
						icon:"icon-pinglun",
						index:3
					},{
						name:"待退修",
						icon:"icon-buoumaotubiao46"
					},
				]
			}
		},
		methods: {
			navigate(path){
				if(!path) return;
				uni.navigateTo({
					url:`/pages/${path}/${path}`
				})
			}
		}
	}
</script>

<style>
</style>
