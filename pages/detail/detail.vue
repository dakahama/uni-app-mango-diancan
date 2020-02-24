<template>
	<view>
		<swiperImage :resdata="banners" :height="750" preview></swiperImage>
		
		<!--基础详情-->
		<baseInfo :detail="detail"></baseInfo>
		
		<!--属性选择-->
		<view class="p-2">
			<view class="rounded border  bg-light-secondary">
				<uniListItem :showArrow="true">
					<view class="d-flex">
						<text class="mr-2 text-muted">已选</text>
						<text>小杯</text>
					</view>
				</uniListItem>
				<uniListItem>
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
		
	</view>
</template>

<script>
	import swiperImage from "@/components/index/swiper-image.vue"
	import baseInfo from "@/components/detail/base-info.vue"
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	import commentsScroll from '@/components/detail/comments-scroll.vue';
	import bottomBtn from "@/components/detail/bottom-btn.vue"
	export default {
		components:{
			swiperImage,baseInfo,uniListItem,commentsScroll,buttomBtn
		},
		data() {
			return {
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
						context:"sdfasdfasdfasdfasdfasdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasd",
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
					title:"小米",
					goodId:"SDFA",
					desc:"是的发送到发送到发送到发斯蒂芬",
					pprice:3299
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
