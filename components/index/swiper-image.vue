<template>
	<view>
		<!--轮播图组件-->
		<!-- 图片格式 750:350-->
		<swiper :indicator-dots="true" :autoplay="true" :circular="true" 
		:interval="3000" :duration="200"
		:style="getStyle">
			<block v-for="(item,index) in resdata" :key="index">
				<swiper-item @tap="event(item,index)">
					<view class="swiper-box">
						<image :src="item" 
						lazy-load
						:style="getStyle"
						mode="scaleToFill"></image>
					</view>
				</swiper-item>
			</block>
			
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			resdata: Array,
			height:{
				type:Number,
				default:350
			},
			preview:{
				type:Boolean,
				default:false
			}
		},
		computed:{
			getStyle() {
				return `height: ${this.height}rpx`
			},
			getUrls() {
				return this.resdata.map( v => v)
			}
		},
		methods: {
			event(item,index){
				if(this.preview){
					return uni.previewImage({
						current:index,
						urls:this.getUrls,
						indicator:"default"
					})
				}
			}
		}
	}
</script>

<style>
</style>
