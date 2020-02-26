<template>
	<view>
		<swiperImage :resdata="banners" :height="750" preview></swiperImage>
		
		<!--基础详情-->
		<baseInfo :detail="detail"></baseInfo>
		
		<!--属性选择-->
		<view class="p-2">
			<view class="rounded border  bg-light-secondary">
				<uniListItem @click="show('attr')">
					<view class="d-flex">
						<text class="mr-2 text-muted">已选</text>
						<text>小杯</text>
					</view>
				</uniListItem>
				<uniListItem @click="show('express')">
					<view class="d-flex">
						<text class="mr-2 text-muted">配送</text>
						<text class="mr-2">天津农学院</text>
						<text class="main-text-color">现配</text>
					</view>
				</uniListItem>
				<!--
				<uniListItem extraWidth="15%">
					<view class="d-flex a-center">
						<view class="text-muted font d-flex a-center mr-2">
							<view class="iconfont icon-finish main-text-color">假一赔十</view>
						</view>
					</view>
				</uniListItem>
				-->
			</view>
		</view>
	
		<commentsScroll :comments="comments" :goodId="detail.goodId"></commentsScroll>
		
		<!--详细页面 富文本-->
		<view class="py-4">
			<wxParse className="uparse" :content="content" @preview="preview" @navigate="navigate">
				
			</wxParse>
		</view>
		
		<!--底部按钮-->
		<bottomBtn @show="show('attr')"></bottomBtn>
		
		<commonPopup :popupClass="popup.attr" @hide="hide('attr')">
			<!--180 180-->
			<view class="d-flex a-center"
			style="height: 275rpx;">
				<image src="../../static/images/demo/cate_01.png" mode="widthFix"
				style="height: 180rpx;width: 180rpx;"
				class="border rounded"></image>
				<view class="pl-2">
					<price priceSize="font-lg" unitSize="font">2333</price>
					<text class="d-block">哈哈哈</text>
				</view>
			</view>
			<scroll-view scroll-y class="w-100" style="height: 660rpx;">
				<card :headTitle="item.title" :headTitleWeight="false" :headBorderBottom="false"
				v-for="(item,index) in selects" :key="index">
					<wacradioGroup :label="item"
					:selected.sync='item.selected'></wacradioGroup>
				</card>
				<view class="d-flex j-sb a-center p-2 border-top border-light-secondary">
					<text>购买数量</text>
					<uni-number-box :min="detail.minnum" :max="detail.maxnum"
					:value="detail.num" @change="detail.num = $event"></uni-number-box>
				</view>
			</scroll-view>
			<!-- 按钮(100rpx) -->
			<view class="text-white font-md d-flex a-center j-center main-bg-hover-color" 
			style="height: 100rpx;margin-left: -30rpx;margin-right: -30rpx;"  
			@tap.stop="addCart">加入购物车</view>
		</commonPopup>
		
		<!-- 收货地址 -->
		<common-popup :popupClass="popup.express" @hide="hide('express')">
			<view class="d-flex a-center j-center font-md border-bottom border-light-secondary" 
			style="height: 100rpx;">
				收货地址
			</view>
			<scroll-view scroll-y class="w-100" style="height: 835rpx;">
				<uni-list-item v-for="(item,index) in pathList" :key="index">
					<view class="iconfont icon-dingwei font-weight font-md"
					>{{item.name}}</view>
					<view class="font text-light-muted">
						{{item.path}} {{item.detailPath}}
					</view>
				</uni-list-item>
			</scroll-view>
			<!-- 
			 按钮(100rpx)
			 -->
			 <view class="main-bg-color text-white font-md d-flex a-center j-center"
			 hover-class="main-bg-hover-color" 
			 style="height: 100rpx;margin-left: -30rpx;margin-right: -30rpx;" 
			 @tap.stop="openCreatePath">
			 	选择新的地址
			 </view>
		</common-popup>
		
	</view>
</template>

<script>
	import {mapMutations} from 'vuex'
	import swiperImage from "@/components/index/swiper-image.vue"
	import baseInfo from "@/components/detail/base-info.vue"
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	import commentsScroll from '@/components/detail/comments-scroll.vue';
	import bottomBtn from "@/components/detail/bottom-btn.vue"
	import wxParse from '@/components/uni-ui/uParse/src/wxParse.vue';
	
	//var htmlString = "<h1>hahaha</h1>"
	import commonPopup from '@/components/common/common-popup.vue'
	import wacradioGroup from '@/components/common/radio-group.vue'
	import uniNumberBox from '@/components/uni-ui/uni-number-box/uni-number-box.vue'
	
	export default {
		components:{
			swiperImage,baseInfo,uniListItem,commentsScroll,wxParse,bottomBtn,commonPopup,
			wacradioGroup,uniNumberBox
		},
		data() {
			return {
				buyNums:1,
				pathList:[
					{
						name:"asdf",
						path:"fsdf",
						detailPath:"dsdfasdfasdf"
					}
				],
				selects:[
					{
						title:"大小",
						selected:0,
						list:[
							{name:"大杯"},
							{name:"中杯"},
							{name:"小杯"}
						]
					},
					{
						title:"大小",
						selected:0,
						list:[
							{name:"大杯"},
							{name:"中杯"},
							{name:"小杯"}
						]
					}
				],
				//
				popup:{
					attr:"none",
					express:"none"
				},
				comments:[
					{
						userpic:"/static/images/demo/demo6.jpg",
						username:"王安成",
						createTime:"2011-1-1",
						goodNum:"111",
						context:"sdfasdfasdfasdfasdfasdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasd",
						imgList:[
							"/static/images/demo/demo6.jpg",
							"/static/images/demo/demo6.jpg",
							"/static/images/demo/demo6.jpg",
							"/static/images/demo/demo6.jpg"
						]
					},
					{
						userpic:"/static/images/demo/demo6.jpg",
						username:"王安成",
						createTime:"2011-1-1",
						goodNum:"111",
						context:"sdfasdfasdfasdfasdfasdfsdSfasdfasdfasdfasdfasdfasdfasdfasdfasd",
						imgList:[
							"/static/images/demo/demo6.jpg",
							"/static/images/demo/demo6.jpg",
							"/static/images/demo/demo6.jpg",
							"/static/images/demo/demo6.jpg"
						]
					}
				],
				banners:[
					{
						src:"../../static/images/demo/cate_01.png"
					},{
						src:"../../static/images/demo/cate_01.png"
					}
				],
				detail:{
					id:11,
					title:"小米",
					cover:"/static/images/demo/cate_01.png",
					desc:"是的发送到发送到发送到发斯蒂芬",
					pprice:3299,
					num:1,
					minnum:1,
					maxnum:100
				},
				content:"<h1>hahaha</h1>"
			}
		},
		// 监听页面返回事件
		onBackPress() {
			//关闭模态框
			for (let key in this.popup) {
				if(this.popup[key] !== 'none') {
					this.hide(key)
					return true
				}
			}
		},
		methods: {
			...mapMutations([
				'addGoodsToCart'
			]),
			//加入购物车
			addCart(){
				let goods = this.detail
				goods['checked'] = false
				goods['attrs'] = this.selects
				this.addGoodsToCart(goods)
				this.hide('attr')
				uni.showToast({
					title:'加入成功'
				})
				
			},
			preview(){
				
			},
			navigate(href, e) {
				console.log("href:" +href);
				uni.showModal({
					content:"点击链接为："+href,
					showCancel:false
				})
			},
			show(key){
				this.popup[key] = 'show'
			},
			hide(key){
				this.popup[key]='hide'
				setTimeout(()=>{
					this.popup[key] = 'none'
				},200)
			},
			maxStock(){
				
			}
		}
	}
</script>

<style>
.uparse .p{
	padding: 0!important;
}
.uparse view{
	line-height: 0!important;
}
</style>
