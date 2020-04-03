<template>
	<view>
		<!-- #ifdef MP -->
		<!-- 自定义导航 -->
		<view class="d-flex a-center" style="height: 90rpx;">
			<!-- 左边 -->
			<view style="width: 85rpx;" class="d-flex a-center j-center"><text class="iconfont icon-xiaoxi"></text></view>
			<!-- 中间 -->
			<view class="flex-1 bg-light rounded d-flex a-center text-light-muted" style="height: 65rpx;" @click="openSearch">
				<text class="iconfont icon-sousuo mx-2"></text>
				在此处输入你想要的的菜品
			</view>
			<!-- 右边 -->
			<view style="width: 85rpx;" class="d-flex a-center j-center"><text class="iconfont icon-richscan_icon"></text></view>
		</view>
		<!-- #endif -->
		<!--顶部选项卡-->
		<scroll-view scroll-x class="border-bottom scroll-row" style="height: 80rpx;" :scroll-into-view="scrollinto" :scroll-with-animation="true">
			<view
				v-for="(item, index) in tabBars"
				:key="index"
				@click="changeTab(index)"
				class="scroll-row-item  span24-12"
				style="height: 80rpx;line-height: 80rpx;text-align: center;"
				:class="tabIndex === index ? 'main-text-color' + ' border-buttom' : ''"
				:id="'tab' + index"
			>
				<text class="font-md">{{ item.name }}</text>
			</view>
		</scroll-view>

		<swiper :duration="150" :current="tabIndex" :style="'height:' + scrollH + 'px;'" @change="onChangeTab">
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:' + scrollH + 'px;'">
					<template>
						<block>
							<!--轮播图组件-->
							<swiperImage :resdata="advImages"></swiperImage>

							
							<card headTitle="店长推荐"></card>
							<template>
									<threeAdv :resdata="dataList.threeAdv"></threeAdv>
							</template>
							<card headTitle="热门推荐"></card>
							<template>
								<view class="row">
									<block v-for="(item2, index2) in dataList.list" :key="index2">
										<commonList :item="item2" :index="index2"></commonList>
									</block>
								</view>
								<view
								class="d-flex a-center j-center text-light-muted font-md py-3 border-top">
									到底了
								</view>
							</template>
						</block>
					</template>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:' + scrollH + 'px;'">
					<view class="cu-bar bg-white solid-bottom margin-top-sm">
						<view class="action">
							<text class="cuIcon-titles text-yellow"></text>
							商家环境
						</view>
					</view>
					<swiperImage :resdata="shop.shopImages" :preview="true"></swiperImage>
					<!-- 地址 -->
					<view class="flex flex-wrap bg-white padding-tb-xl margin-top-xs">
						<view class="flex-sub  text-lg">
							<text class="icon iconfont  padding-lr">&#xe64d;</text>
							<text class="text-bold">商家地址</text>
						</view>
						<view class="flex-twice text-left text-lg padding-right-xl">{{shop.shopAddress}}</view>
					</view>
					<divider></divider>
					<!-- 公告 -->
					<view class="flex flex-wrap bg-white padding-tb-xl margin-top-xs">
						<view class="flex-sub  text-lg">
							<text class="icon iconfont padding-lr">&#xe67a;</text>
							<text class="text-bold">商家公告</text>
						</view>
						<view class="flex-twice text-left text-lg padding-right-xl">{{shop.shopAdv}}</view>
					</view>
					<divider></divider>
					<!-- 商家详情 -->
					<view class="flex flex-wrap bg-white padding-tb-xl margin-top-xs">
						<view class="flex-sub  text-lg">
							<text class="icon iconfont  padding-lr ">&#xe61f;</text>
							<text class="text-bold">商家详情</text>
						</view>
						<view class="flex-twice text-left text-lg padding-right-xl">{{shop.shopDetail}}</view>
					</view>
					<divider></divider>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import $H from '@/common/lib/request.js';
import swiperImage from '@/components/index/swiper-image.vue';
import indexNav from '@/components/index/index-nav.vue';
import threeAdv from '@/components/index/three-adv.vue';
export default {
	components: {
		swiperImage,
		indexNav,
		threeAdv
	},
	data() {
		return {
			showStoreBox: true,
			scrollinto: 'tab1',
			scrollH: 500,
			tabIndex: 0,
			tabBars: [{ name: '首页推荐' }, { name: '店铺信息' }],
			dataList: {},
			advImages:[],
			shop:{
				shopImages:[],
				shopAddress:'',
				shopAdv:'',
				shopDetail:''
			}
			
		};
	},
	onPullDownRefresh() {
		this.__init()
	},
	onNavigationBarSearchInputClicked() {
		uni.navigateTo({
			url: '../search/search'
		});
	},
	created() {},
	onLoad() {
		// 获取可视区域高度
		uni.getSystemInfo({
			success: res => {
				// #ifndef MP
				let navbarH = 0;
				// #endif
				// #ifdef MP
				let navbarH = uni.upx2px(90);
				// #endif
				this.scrollH = res.windowHeight - uni.upx2px(82) - navbarH;
			}
		});

		this.__init();
	},
	methods: {
		async __init() {
			
			let data = await $H.get('/product/product/index');
			if (data) {
				console.log(data);
				this.dataList = data;
			}
			
			$H.get("/admin/index/data/get").then(res=>{
				this.shop = res
				
			}).catch(()=>{
					
			})
				
			$H.get("/admin/index/adv/get").then(res=>{
				this.advImages = res
			}).catch(()=>{
					
			})
			
			uni.stopPullDownRefresh()
			
		},

		changeTab(index) {
			if (this.tabIndex === index) {
				return;
			}
			this.tabIndex = index;
			this.scrollinto = 'tab' + index;
		},
		// 监听滑动列表
		onChangeTab(e) {
			this.changeTab(e.detail.current);
			console.log(e.detail.current);
		},
		// 点击主页搜索框 跳转到搜索页面
		openSearch() {
			uni.navigateTo({
				url: '../search/search'
			});
		},
		addData() {
			let index = this.tabIndex;
		}
	}
};
</script>

<style></style>
