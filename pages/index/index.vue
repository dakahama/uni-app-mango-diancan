<template>
	<view>
		<!-- #ifdef MP -->
		<!-- 自定义导航 -->
		<view class="d-flex a-center" style="height: 90rpx;">
			<!-- 左边 -->
			<view style="width: 85rpx;" class="d-flex a-center j-center">
				<text class="iconfont icon-xiaoxi"></text>
			</view>
			<!-- 中间 -->
			<view class="flex-1 bg-light rounded d-flex a-center text-light-muted" style="height: 65rpx;" @click="openSearch">
				<text class="iconfont icon-sousuo mx-2"></text>
				在此处输入你想要的的菜品
			</view>
			<!-- 右边 -->
			<view style="width: 85rpx;" class="d-flex a-center j-center">
				<text class="iconfont icon-richscan_icon"></text>
			</view>
		</view>
		<!-- #endif -->
		<!--顶部选项卡-->
		<scroll-view scroll-x class="border-bottom scroll-row"
		style="height: 80rpx;" :scroll-into-view="scrollinto"
		:scroll-with-animation="true">
			<view v-for="(item,index) in tabBars" :key="index" @click="changeTab(index)" 
			class="scroll-row-item  span-10 "
			style="height: 80rpx;line-height: 80rpx;text-align: center;"
			:class="tabIndex === index ? 'main-text-color'+' border-buttom':''"
			:id="'tab'+index">
				<text class="font-md">{{item.name}}</text>
			</view>
		</scroll-view>
		
		<swiper :duration="150" :current="tabIndex" :style="'height:'+scrollH+'px;'" @change="onChangeTab">
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'">
					<template>
						<block>
							<!--轮播图组件-->
							
							<swiperImage :resdata="dataList.swiper"></swiperImage>
							
							<!--
							<template v-else-if="list.name === 'indexNavs'">
								<indexNav :resdata="list.data"></indexNav>
								<divider></divider>
							</template>
							-->
							<!--
							<card headTitle="店长推荐"></card>
							<divider></divider>
							-->
							<!--
							<template>
									<threeAdv :resdata="dataList.threeAdv"></threeAdv>
									<divider></divider>
							</template>
							-->
							
							<card headTitle="店长推荐"></card>
							<template>123</template>
							<template>
								<view class="row">
									<block v-for="(item2,index2) in dataList.list" :key="index2">
										<commonList :item="item2" :index="index2"></commonList>
									</block>
								</view>	
							</template>
							
							
						</block>
						<view class="" style="height: 500rpx;"></view>
					</template>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'">
					<template>
						<block>
							<card headTitle="店长推荐"></card>
							<template>
								<view class="row">
									<block v-for="(item2,index2) in dataList.list" :key="index2">
										<commonList :item="item2" :index="index2"></commonList>
									</block>
								</view>	
							</template>
							{{dataList.gonggao}}
							
							
						</block>
						<view class="" style="height: 500rpx;"></view>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
		
		
		<!-- 服务说明 -->
		<!--
		<common-popup :popupClass="none" @hide="hide('service')">
			<view class="d-flex a-center j-center font-md border-bottom border-light-secondary" style="height: 100rpx;">
				服务说明
			</view>
			<scroll-view scroll-y class="w-100" style="height: 835rpx;">
				<view class="py-1">
					<view class="d-flex a-center">
						<view class="iconfont icon-finish main-text-color mr-1"></view>
						小米自营
					</view>
					<text class="text-light-muted font pl-4">
						不管满多少，就是不包邮
					</text>
				</view>
			</scroll-view>
			 <view class="main-bg-color text-white font-md d-flex a-center j-center" hover-class="main-bg-hover-color" style="height: 100rpx;margin-left: -30rpx;margin-right: -30rpx;" @tap.stop="hide('service')">
			 	确定
			 </view>
		</common-popup>
		-->
	</view>
</template>

<script>
	import $H from "@/common/lib/request.js"
	import swiperImage from "@/components/index/swiper-image.vue"
	import indexNav from "@/components/index/index-nav.vue"
	import threeAdv from "@/components/index/three-adv.vue"
	export default {
		components: {
			swiperImage,
			indexNav,
			threeAdv
		},
		data() {
			return {
				scrollinto: "tab1",
				scrollH:500,
				tabIndex:0,
				tabBars:[
					{ name:"首页推荐" },
					{ name:"店铺信息" }
				],
				dataList:{}
			}				 
		},
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url:'../search/search'
			})
		},
		created() {
			
		},
		onLoad() {
			// 获取可视区域高度
			uni.getSystemInfo({
				success: (res) => {
					// #ifndef MP
					let navbarH = 0
					// #endif
					// #ifdef MP
					let navbarH = uni.upx2px(90)
					// #endif
					this.scrollH = res.windowHeight - uni.upx2px(82) - navbarH
				}
			})
			
			this.__init()

		},
		methods: {
			
			async __init(){
				
				let data = await $H.get("/product/product/index")
				if(data){
					console.log(data)
					this.dataList = data
				}
				/*
				$H.get("/product/product/index").then(res=>{
					console.log(res)
					this.dataList = res
				}).catch(()=>{
					
				})
				
				*/
				/*
				let [error,result] = await uni.request({
					url: 'http://localhost:8085/product/product/index',
					//url: 'http://ceshi3.dishait.cn/api/index_category/data',
					method:'GET'
				})
				
				if (error) {
					//return console.log(error.errMsg)
					return uni.showToast({
						title:error.errMsg,
						icon:'none'
					})
				}
				if (result.statusCode !== 200) {
					//return console.log(result.data.msg)
					return uni.showToast({
						title:result.data.msg,
						icon:'none'
					})
				}
				*/
			},
			
			
			changeTab(index) {
				if(this.tabIndex === index){
					return;
				}
				this.tabIndex = index;
				this.scrollinto = 'tab'+index;
			},
			// 监听滑动列表
			onChangeTab(e){
				this.changeTab(e.detail.current)
				console.log(e.detail.current)
			},
			// 点击主页搜索框 跳转到搜索页面
			openSearch(){
				uni.navigateTo({
					url: '../search/search',
				});
			},
			addData() {
				let index = this.tabIndex;
			}
			
		}
	}
</script>

<style>
	
</style>
