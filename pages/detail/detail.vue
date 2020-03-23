<template>
	<view>
		<swiperImage :resdata="banners" :height="750" preview></swiperImage>
		
		<!--基础详情-->
		<baseInfo :detail="detail"></baseInfo>
		
		<!--属性选择-->
		<!--
		<view class="p-2">
			<view class="rounded border  bg-light-secondary">
				<uniListItem extraWidth="15%">
					<view class="d-flex a-center">
						<view class="text-muted font d-flex a-center mr-2">
							<view class="iconfont icon-finish main-text-color">假一赔十</view>
						</view>
					</view>
				</uniListItem>
			</view>
		</view>
		-->
		<commentsScroll :comments="comments" :goodId="detail.id"></commentsScroll>
		
		<!--详细页面 富文本-->
		<view class="py-4">
			<wxParse className="uparse" :content="content" @preview="preview" @navigate="navigate">
			</wxParse>
		</view>
		
		<!--底部按钮-->
		<bottomBtn @addCart="addCart"></bottomBtn>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	import swiperImage from "@/components/index/swiper-image.vue"
	import baseInfo from "@/components/detail/base-info.vue"
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	import commentsScroll from '@/components/detail/comments-scroll.vue';
	import bottomBtn from "@/components/detail/bottom-btn.vue"
	import wxParse from '@/components/uni-ui/uParse/src/wxParse.vue';
	import wacradioGroup from '@/components/common/radio-group.vue'
	import uniNumberBox from '@/components/uni-ui/uni-number-box/uni-number-box.vue'
	
	export default {
		components:{
			swiperImage,baseInfo,uniListItem,commentsScroll,wxParse,bottomBtn,
			wacradioGroup,uniNumberBox
		},
		data() {
			return {
				comments:[],
				banners:[],
				detail:{},
				content:""
			}
		},
		computed:{
			...mapState({
				pathList:state=>state.path.list,
				userInfo:state=>state.user.userInfo
			})
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
		onLoad(e) {
			//console.log(e.id);
			if(e.id){
				this.__init(e.id)
			}
			
		},
		methods: {
			...mapMutations([
				'addGoodsToCart'
			]),
			
			async __init(id){
				console.log(id)
				await this.$H.get('/product/product/get/'+id).then(res=>{
					console.log(res);
					let product = res.detail
					uni.setNavigationBarTitle({
						title:product.title
					})
					this.banners = product.imagesObject.map(v=>{
						return {
							cover:v
						}
					})
					
					this.detail = {
						id:product.id,
						title:product.title,
						cover:product.cover,
						desci:product.desci,
						price:product.price,
						num:product.num
					}
					this.content = product.content
					
					this.comments = res.comments.map(v=>{
						return {
							userpic:v.user.avatar,
							username:v.user.username,
							createTime:v.review.updateTime,
							context:v.review.detail,
							imgList:v.review.imageObject
						}
					})
					console.log(res.comments)
				})
				
			},
			//加入购物车
			addCart(){
				this.$H.post('/product/cart/add',{
					userId:this.userInfo.id,
					productId:this.detail.id
				},{
					token:true
				}).then(res=>{
					console.log(res)
					// 通知购物车页面更新数据
					uni.$emit('updateCart')
					uni.showToast({
						title:res
					})
				}).catch(err=>{
					
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
