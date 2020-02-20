<template>
	<view>
		<!-- 自定义导航 -->
		<view class="d-flex a-center" style="height: 90rpx;">
			<!-- 左边 -->
			<view style="width: 85rpx;" class="d-flex a-center j-center">
				<text class="iconfont icon-xiaoxi"></text>
			</view>
			<!-- 中间 -->
			<view class="flex-1 bg-light rounded d-flex a-center text-light-muted" style="height: 65rpx;" @click="openSearch">
				<text class="iconfont icon-sousuo mx-2"></text>
				智能积木
			</view>
			<!-- 右边 -->
			<view style="width: 85rpx;" class="d-flex a-center j-center">
				<text class="iconfont icon-richscan_icon"></text>
			</view>
		</view>
		
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
			<swiper-item v-for="(item,index) in dataList" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'">
					<template v-if="item.list.length > 0">
						<block v-for="(list,listIndex) in item.list" :key="listIndex">
							<!--轮播图组件-->
							<swiperImage v-if="list.name === 'swipers'" :resdata="list.data"></swiperImage>
							<template v-else-if="list.name === 'indexNavs'">
								<indexNav :resdata="list.data"></indexNav>
								<divider></divider>
							</template>
							
							<!--
							<card headTitle="店长推荐"></card>
							<divider></divider>
							-->
							<template v-else-if="list.name === 'threeAdvs'">
									<threeAdv   :resdata="list.data"></threeAdv>
									<divider></divider>
							</template>
						
							<template v-else-if="list.name === 'commonLists'">
								<view class="row">
									<block v-for="(item2,index2) in list.data" :key="index2">
										<commonList :item="item2" :index="index2"></commonList>
									</block>
								</view>	
							</template>
						</block>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
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
				dataList:[
					{
						dataName: "首页推荐",
						list: [
							{
								name:"swipers",
								data:[
										{
											src:"../../static/images/demo/demo4.jpg"
										},
										{
											src:"../../static/images/demo/demo5.jpg"
										}
								]
							},
							{
								name:"indexNavs",
								data: [
									{
										src:"/static/images/indexnav/1.png",text:"新品发布"
									},
									{
										src:"/static/images/indexnav/1.png",text:"新品发布"
									},
									{
										src:"/static/images/indexnav/1.png",text:"新品发布"
									}
								]
							},
							{
								name:"threeAdvs",
								data:{
									big: {
										src:"/static/images/demo/demo1.jpg",
									},
									smalltop:{
										src:"/static/images/demo/demo1.jpg"
									},
									smallbottom:{
										src:"/static/images/demo/demo1.jpg",
									}	
								}
							},
							{
								name:"commonLists",
								data:[
									{
										cover:"/static/images/demo/demo1.jpg",
										name:"buzhidao",
										desc:"sdfa",
										pprice:3388,
										oprice:3344
									},
									{
										cover:"/static/images/demo/demo1.jpg",
										name:"buzhidao",
										desc:"sdfa",
										pprice:3388,
										oprice:3344
									}
								]
							}
						]		
					}		
				]
			}				 
		},
		onLoad() {
			// 获取可视区域高度
			uni.getSystemInfo({
				success: (res) => {
					this.scrollH = res.windowHeight - uni.upx2px(82)
				}
			})
			
			this.__init()

		},
		methods: {
			__init(){
				//初始化顶部的选项卡
				//this.tabBars = demoTabBars
				
				
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
