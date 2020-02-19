<template>
	<view>
		<!--轮播图组件-->
		<!-- 图片格式 750:350-->
		<swiper :indicator-dots="true" :autoplay="true" :circular="true"
		:interval="3000" :duration="1000">
			<block v-for="(item,index) in resdata" :key="index">
				<swiper-item @tap="event(item)">
					<view class="swiper-box">
						<image :src="item.src" 
						lazy-load
						style="height: 350upx;"
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
			resdata: Array
		},
		methods: {
			event(item){
				console.log('点击了轮播图'+item.index)
			}
		}
	}
</script>

<style>
</style>
