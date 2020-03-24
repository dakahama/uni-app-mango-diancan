<template>
	<view>
		<view class="main-bg-color text-white p-4 d-flex a-end j-sb" style="height: 300rpx;">
			<view class="mb-3">
				<view class="font-lg">{{status}}</view>
				<view class="font">{{timeDownText}}</view>
			</view>
			<view class="iconfont icon-daishouhuo line-h mb-3" style="font-size: 100rpx;"></view>
		</view>
		<view class="p-3 bg-white">
			<view class="text-light-muted font-md">
				<text class="font-lg text-dark mr-2">{{address.name}}</text>
				{{address.phone}}
			</view>
			<view class="text-light-muted font-md">
				{{address.address}}{{address.detail}}
			</view>
		</view>
		<divider></divider>
		<view class="px-2">
			<block v-for="(item,index) in order_items" :key="index">
				<order-list-item :item="item" :index="index"></order-list-item>
			</block>
		</view>
		<divider></divider>
		<uni-list-item>
			<text class="font-md text-light-muted">商品总价</text>
			<view slot="right" class="font-md text-light-muted">
				{{price}}
			</view>
		</uni-list-item>
		<uni-list-item>
			<text class="font-md text-light-muted">快递</text>
			<view slot="right" class="font-md text-light-muted">
				包邮
			</view>
		</uni-list-item>
		<uni-list-item>
			<text class="font-md main-text-color">实际付款</text>
			<view slot="right" class="font-md text-light-muted">
				<price>{{total_price}}</price>
			</view>
		</uni-list-item>
		<divider></divider>
		<card headTitle="订单信息">
			<uni-list-item title="订单编号">
				<view slot="right" class="font-md text-light-muted">
					{{no}}
				</view>
			</uni-list-item>
		</card>
		<card v-if="extra" headTitle="退款相关">
			<uni-list-item title="申请退款">
				<view slot="right" class="font-md text-light-muted">
					{{extra}}
				</view>
			</uni-list-item>
		</card>
		
		<view v-if="status === '待支付' || status === '待发货' || status === '待收货' || status === '待评价'" style="height: 100rpx;"></view>
		<view v-if="status === '待支付' || status === '待发货' || status === '待收货' || status === '待评价' " class="bg-white position-fixed bottom-0 left-0 right-0 d-flex a-center j-end px-3" style="height: 100rpx;">
			<template v-if="status === '待支付'">
				<common-button @click="openPayMethods">去支付</common-button>
				<common-button @click="closeOrder">取消订单</common-button>
			</template>
			<template v-else-if="status === '待发货'">
				<common-button>提醒发货</common-button>
				<common-button @click="applyRefund">申请退款</common-button>
			</template>
			<template v-else-if="status === '待收货'">
				<common-button @click="openLogistics">快递员信息</common-button>
				<common-button @click="applyRefund">申请退款</common-button>
				<common-button @click="received">确认收货</common-button>
			
			</template>
			<template v-else-if="status === '待评价'">
				<common-button>去评价</common-button>
			</template>
		</view>
		
	</view>
</template>

<script>
	var timer = null;
	import orderListItem from "@/components/order/order-list-item.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	import price from '@/components/common/price.vue';
	import card from '@/components/common/card.vue';
	import $T from '@/common/lib/time.js'
	import commonButton from '@/components/common/common-button.vue';
	export default {
		components: {
			orderListItem,
			uniListItem,
			price,
			card,
			commonButton
		},
		data() {
			return {
				id: "",
				no: "",
				address: {
					address: "",
					detail: "",
					name: "",
					phone: "",
				},
				total_price: 0,
				remark: "",
				paid_time: null,
				payment_method: "",
				payment_no: "",
				refund_status: "pending",
				ship_status: "",
				extra: null,
				create_time: "",
				update_time: "",
				reviewed: 0,
				order_items: [],
				end_time:0,
				timeDown:'',
				orderStatus:0
			}
		},
		computed: {
			// 商品总价
			price(){
				let p = 0
				this.order_items.forEach(item=>{
					p += item.pprice * item.num
				})
				return p.toFixed(2)
			},
			// 订单状态
			status(){
				return this.$U.formatStatus({
					status:this.orderStatus,
					refundStatus:this.refund_status
				})
			},
			timeDownText(){
				let msg = ''
				switch (this.status){
					case '待支付':
					msg = '取消'
						break;
					case '待收货':
					msg = '确认'
						break;
					case '待发货':
					return '等待商家发货'
						break;
					case '退款中':
					return '等待商家审核'
						break;
					case '已完成':
					return '订单已签收'
						break;
				}
				/*
				if(msg !== '' && this.timeDown !== ''){
					return `还差 ${this.timeDown} 自动${msg}`
				} 
				*/
				return ''
			}
		},
		onLoad(e) {
			if(!e.id){
				uni.showToast({
					title: '订单不存在',
					icon: 'none'
				});
				return uni.navigateBack({
					delta: 1
				});
			}
			this.id = e.id
		},
		onUnload() {
			if(timer){
				clearInterval(timer)
			}
		},
		onShow() {
			// 获取订单详情
			this.getData()
		},
		methods: {
			// 开启定时器
			openTimeDown(){
				if(this.status === '待支付' || this.status === '待收货'){
					if(timer){
						clearInterval(timer)
					}
					timer = setInterval(()=>{
						let now = (new Date().getTime())/1000
						if(now > this.end_time){
							uni.switchTab({
								url:"../index/index"
							})
							uni.showToast({
								title: this.status === '待支付' ? '订单已关闭' : '订单已确认',
								icon: 'none'
							});
							this.timeDown = ''
							return clearInterval(timer)
						}
						this.timeDown = $T.timeDown(this.end_time)
					},1000)
				}
			},
			getData(){
				this.$H.get('/order/order/get/'+this.id,{},{
					token:true
				}).then(res=>{
					console.log(res);
					this.end_time = res.updateTime ? res.updateTime : 0
					this.no = res.no
					this.address = res.address
					this.total_price= res.totalPrice
					this.remark= res.remark
					this.paid_time= res.paidTime
					this.payment_method= res.paymentMethod
					this.payment_no= res.paymentNo
					this.refund_status = res.refundStatus
					this.ship_status= res.shipStatus
					this.extra= res.extra
					this.create_time= res.createTime
					this.update_time= res.updateTime
					this.reviewed= res.reviewed
					this.orderStatus= res.status
					// 整理商品列表数据
					let order_items = res.orderItems.map(v=>{
						return {
							id:v.productId,
							cover:v.product.cover,
							title:v.product.title,
							pprice:v.productPrice,
							num:v.productNum,
							desci:v.product.desci
						}
					})
					// 开启定时器
					this.openTimeDown()
					this.order_items= order_items
					 
				})
			},
			openLogistics(){
				uni.navigateTo({
					url: '/pages/logistics-detail/logistics-detail?detail='+JSON.stringify({
						id:this.id
					})
				});
			},
			// 去支付
			openPayMethods(){
				// 跳转到支付页面
				uni.navigateTo({
					url: '/pages/pay-methods/pay-methods?detail='+JSON.stringify({
						id:this.id,
						price:this.total_price
					})
				});
			},
			// 取消订单
			closeOrder(){
				uni.showModal({
					content: '是否要取消该订单？',
					success: (res)=>{
						if (res.confirm) {
							uni.showLoading({
								title: '取消订单中...',
								mask: false
							});
							this.$H.post('/order/order/close/'+this.id,{},{
								token:true
							}).then(res=>{
								uni.hideLoading()
								uni.showToast({
									title: '取消订单成功',
									icon: 'none'
								});
								this.$emit('update')
							}).catch(err=>{
								uni.hideLoading()
							})
						}
					}
				});
			},
			// 申请退款
			applyRefund(){
				uni.navigateTo({
					url: '/pages/order-refund/order-refund?detail='+JSON.stringify({
						id:this.id
					})
				});
			},
			// 确认收货
			received(){
				uni.showModal({
					content: '是否要确认收货？',
					success:  (res)=> {
						if (res.confirm) {
							uni.showLoading({
								title: '确认收货中...',
								mask: false
							});
							this.$H.get('/order/order/received/'+this.item.id,{},{
								token:true
							}).then(res=>{
								uni.hideLoading()
								uni.showToast({
									title: '确认收货成功',
									icon: 'none'
								});
								this.$emit('update')
							}).catch(err=>{
								uni.hideLoading()
							})
						}
					}
				});
			},
		}
	}
</script>

<style>

</style>
