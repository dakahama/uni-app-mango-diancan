<template>
	<view style="background: #F5F5F5;">

		<!-- 选项卡 -->
		<view class="d-flex bg-white a-center font-md text-muted border-top border-bottom border-light-secondary">
			<view class="flex-1 d-flex a-center j-center py-2"
			v-for="(item,index) in tabBars" :key="index"
			:class="tabIndex === index ? 'tabactive' : ''"
			@tap="changeTab(index)">
				{{item.name}}
			</view>
		</view>
		
		<!-- 订单列表 -->
		<block v-for="(tab,tabI) in tabBars" :key="tabI">
			<view class="position-relative" v-show="tabI === tabIndex"
			style="min-height: 440rpx;">
				<template v-if="tab.list.length > 0">
					<!-- 订单列表 -->
					<block v-for="(item,index) in tab.list" :key="index">
						<order-list :item="item" :index="index" @update="getOrderList"></order-list>
					</block>
				</template>
				<!-- 默认无订单时的状态 -->
				<template v-else>
					<no-thing :icon="tab.no_thing" :msg="tab.msg"></no-thing>
				</template>
			</view>
		</block>
	</view>
</template>

<script>
	import noThing from "@/components/common/no-thing.vue"
	import orderList from "@/components/order/order-list.vue"
	import {mapState} from "vuex"
	export default {
		components:{
			noThing,
			orderList
		},
		data() {
			return {
				tabIndex:0,
				tabBars:[
					{
						name:"全部",
						no_thing:"no_comment",
						msg:"你还没有待评价订单",
						key:"all",
						list:[]
					},
					{
						name:"待付款",
						no_thing:"no_pay",
						msg:"你还没有待付款订单",
						key:"nopay",
						list:[]
					},
					{
						name:"待发货",
						no_thing:"no_pay",
						msg:"你还没有待付款订单",
						key:"noship",
						list:[]
					},
					{
						name:"待收货",
						no_thing:"no_receiving",
						msg:"你还没有待收货订单",
						key:"receiving",
						list:[]
					},
					{
						name:"待评价",
						no_thing:"no_comment",
						msg:"你还没有待评价订单",
						key:"received",
						list:[]
					},
					{
						name:"待退款",
						no_thing:"no_comment",
						msg:"你还没有待评价订单",
						key:"refunding",
						list:[]
					}
				],
			}
		},
		onLoad(e) {
			if(e.tabIndex){
				this.tabIndex = parseInt(e.tabIndex)
			}
			this.getHotList()
		},
		computed: {
			...mapState({
				userInfo:state=>state.user.userInfo
			}),
			key() {
				return this.tabBars[this.tabIndex].key
			}
		},
		onShow() {
			this.getOrderList()
		},
		methods: {
			// 获取订单列表
			getOrderList(){
				let index = this.tabIndex
				this.$H.post('/order/order/list/'+this.key,{
					userId:this.userInfo.id
				},{
					token:true
				}).then(res=>{
					
					console.log(res)
					this.tabBars[index].list = res.list.map(item=>{
						let order_items = item.orderItems.map(v=>{
							return {
								id:v.id,
								productId:v.product.id,
								cover:v.product.cover,
								title:v.product.title,
								pprice:v.productPrice,
								num:v.productNum,
								reviewId:v.reviewId
							}
						})
						return {
							id:item.id,
							create_time:item.createTime,
							status:this.$U.formatStatus(item),
							order_items:order_items,
							total_price:item.totalPrice
						}
					})
				})
			},
			// 切换选项卡
			changeTab(index){
				this.tabIndex = index
				this.getOrderList()
			}
		}
	}
</script>

<style>
.tabactive{
	border-bottom: 5rpx solid #FD6801;
	color: #FD6801;
	margin-bottom: -5rpx;
}
</style>
