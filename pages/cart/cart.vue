<template>
	<view class="animated fadeIn faster" style="background: #F5F5F5;">
		<!-- 自定义导航 -->
		<!-- #ifdef MP -->
		<view class="d-flex a-center" style="height: 90rpx;">
			<!-- 中间 -->
			<view class="flex-1 ml-3 px-2 a-center j-center">购物车</view>
			<!-- 右边 -->
			<view style="width: 85rpx;" class="d-flex a-center j-center"
			@click="isedit = !isedit">
				{{isedit ? '完成' : '编辑' }}
			</view>
		</view>
		<!-- #endif -->

		<!--
		<uni-nav-bar :right-text="isedit ? '完成' : '编辑'" title="购物车" statusBar :shadow="false" @click-right="isedit = !isedit" :fixed="true"></uni-nav-bar>
		-->
		<!-- 购物车为空 -->
		<view class="py-5 d-flex a-center j-center bg-white" v-if="disableSelectAll">
			<view class="iconfont icon-gouwuche text-light-muted" style="font-size: 50upx;"></view>
			<text class="text-light-muted mx-2">购物车为空</text>
		</view>

		<!-- 购物车商品列表 -->
		<view class="bg-white px-2" v-else>
			<!-- 列表 -->
			<view class="d-flex a-center py-3 border-bottom border-light-secondary" v-for="(item, index) in list" :key="index">
				<label class="radio d-flex a-center j-center flex-shrink" style="width: 80upx;height: 80upx;" @click="selectItem(index)">
					<radio :value="item.id" :checked="item.checked" color="#FD6801" />
				</label>

				<image :src="item.cover" style="height: 150rpx;width: 150rpx;" class="border border-light-secondary rounded p-1 flex-shrink"></image>

				<view class="flex-1 d-flex flex-column pl-2">
					<view class="text-dark" style="font-size: 35upx;">{{ item.title }}</view>

					<view class="mt-auto d-flex j-sb">
						<price>{{ item.price }}</price>
						<view class="a-self-end">
							<uni-number-box :min="min" :value="item.num" :max="max" @change="changeNum($event, item, index)"></uni-number-box>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="text-center main-text-color font-md font-weight mt-5">
					 为你推荐
		</view>
		<view class="position-relative d-flex a-center j-center text-secondary mb-3 pt-3">
			<view style="background: #F5F5F5;z-index: 2;" class="px-2 position-absolute">
				买的人还买了</view>
			<view class="position-absolute" style="height: 1upx;left: 0;right: 0;background-color: #DDDDDD;"></view>
		</view>

		<!-- 占位 -->
		<view style="height: 100upx;"></view>
		<!-- 合计 -->
		<view class="d-flex a-center left-0 position-fixed right-0 bottom-0 border-top border-light-secondary a-stretch bg-white" style="height: 100upx;z-index: 1000;">
			<label class="radio d-flex a-center j-center flex-shrink" style="width: 120upx;" @click="doSelectAll">
				<radio color="#FD6801" :checked="checkedAll" :disabled="disableSelectAll" />
			</label>
			<template v-if="!isedit">
				<view class="flex-1 d-flex a-center j-center font-md">
					合计
					<price>{{ totalPrice }}</price>
				</view>
				<view class="flex-1 d-flex a-center j-center main-bg-color text-white font-md" 
				hover-class="main-bg-hover-color" @tap="orderConfirm">结算</view>
			</template>
			<template v-else>
				<view class="flex-1 d-flex a-center j-center bg-danger text-white font-md" 
				hover-class="main-bg-hover-color" @tap="doDelGoods">删除</view>
			</template>
			
		</view>
	</view>
</template>

<script>
import loading from '@/common/mixin/loading.js';
import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
import uniNumberBox from '@/components/uni-ui/uni-number-box/uni-number-box.vue';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import commonList from '@/components/common/common-list.vue';

export default {
	mixins: [loading],
	components: {
		uniNavBar,
		uniNumberBox,
		commonList
	},
	data() {
		return {
			min:1,
			max:100,
			isedit: false,
			
		}
	},
	computed: {
		...mapState({
			userInfo:state=>state.user.userInfo,
			list: state => state.cart.list,
			selectedList: state => state.cart.selectedList
		}),
		...mapGetters(['checkedAll', 'totalPrice', 'disableSelectAll'])
	},
	onLoad() {
		this.getData();
		
		uni.$on('updateCart',()=>{
			this.getData()
		})
		
	},
	beforeDestroy() {
		uni.$off('updateCart');
	},
	onPullDownRefresh() {
		this.getData()
	},
	onNavigationBarButtonTap(e) {
		//this.isedit = this.isedit
		this.isedit = !this.isedit
		console.log(this.isedit)
		let pages = getCurrentPages()
		let page = pages[pages.length - 1];
		//console.log(page)
		// #ifdef APP-PLUS
		    let currentWebview = page.$getAppWebview();
		    
			let titleObj = currentWebview.getStyle().titleNView;
			titleObj.buttons[0].text = this.isedit?'编辑':'完成'
			
			currentWebview.setStyle({
				titleNView: titleObj
			});
			
		// #endif
		
	
	},
	methods: {
		...mapActions(['doSelectAll', 'doDelGoods','updateCartList']),
		...mapMutations(['selectItem', 'initCartList', 'unSelectAll']),
		changeNum(e, item, index) {
			if (item.num === e) return;
			uni.showLoading({
				title: '加载中...'
			})
			this.$H.post('/product/cart/update/number/' + item.id,{
				num:e
				},{
					token: true
				}
				).then(res => {
					item.num = e;
					uni.hideLoading();
				})
		},
		// 订单结算
		orderConfirm() {
			if (this.selectedList.length === 0) {
				return uni.showToast({
					title: '请选择要结算的商品',
					icon: 'none'
				});
			}
			uni.navigateTo({
				url: '../order-confirm/order-confirm?detail=' + JSON.stringify(this.selectedList)
			});
		},
		// 获取数据
		async getData() {
			// 获取购物车数据
			this.updateCartList().then(res=>{
				uni.stopPullDownRefresh()
			}).catch(err=>{
				uni.stopPullDownRefresh()
			})
			/*
			if(this.userInfo.id  <= 0) return false
			
			await this.$H.get('/product/cart/'+this.userInfo.id,{},{
				token:true,
				toast:false
			}).then(res=>{
				console.log(JSON.stringify(res))
				this.unSelectAll()
				this.initCartList(res)
				uni.stopPullDownRefresh()
			}).catch(err=>{
				uni.showToast({
					title:err,
					icon:'none'
				})
				uni.stopPullDownRefresh()
			})
			*/
		}
	}
};
</script>

<style></style>
