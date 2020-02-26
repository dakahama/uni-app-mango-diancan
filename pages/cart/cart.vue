<template>
	<view style="background: #F5F5F5;">
		<uniNavBar :right-text="isEdit?'完成':'编辑'" title="购物车" :statusBar="true" 
		:shadow="false" :fixed="true"
		@click-right="isEdit = !isEdit">
		</uniNavBar>
		
		<!--购物车为空-->
		<view class="py-5 d-flex a-center j-center bg-white border-bottom"
		v-if="disableSelectAll">
			<view class="iconfont icon-gouwuche text-light-muted"
			style="font-size: 40upx;height: 200upx;">
				<text class="text-light-muted mx-2">购物车还是为空</text>
			</view>
		</view>
		
		
		<!--购物车商品列表-->
		<view class="bg-white px-2"
		v-else-if="!disableSelectAll">
			<view class="d-flex py-3 a-center border-bottom border-light-secondary"
			v-for="(item,index) in list" :key="index">	
				<view class="d-flex a-center">
					<label class="radio d-flex a-center j-center flex-shrink" 
					style="width: 80upx;height: 80upx;" @click="selectItem(index)">
						<radio :value="item.id" :checked="item.checked" color="#FD6801"/>
					</label>
					<image :src="item.cover" mode="widthFix"
					style="width: 150upx;height: 150upx;"
					class="border border-light-secondary rounded p-2 flex-shrink"></image>
				</view>
				<view class="flex-1 d-flex flex-column pl-2">
					<view class="text-dark" style="font-size: 35upx;">{{item.title}}</view>
					<!--规格属性-->
					<view class="d-flex text-light-muted mb-1 p-1 mb-2"
					:class="isEdit ? 'bg-light-secondary':''"
					@tap="isEdit ? doShowPopup(index):''">
						<text class="mr-1"
						v-for="(attr,attrIndex) in item.attrs" :key="attrIndex">
						{{attr.list[attr.selected].name}}
						</text>
						<view v-if="isEdit" class="iconfont icon-bottom font ml-auto"></view>
					</view>
					<view class="mt-auto d-flex j-sb">
						<price style="font-size: 35upx;">{{item.pprice}}</price>
						<view class="a-self-end">
							<uniNumberBox :min="item.minnum" :value="item.num" :max="item.maxnum"
							@change="changeNum($event,item,index)">
							</uniNumberBox>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="" style="height: 100upx;"></view>
		<!-- 合计 -->
		<view class="d-flex a-center position-fixed left-0 right-0 bottom-0 border-top border-light-secondary a-stretch bg-white"
		style="height: 100upx;z-index: 1000;">
			<label class="radio d-flex a-center j-center flex-shrink"
			style="width: 120upx;" @click="doSelectAll">
				<radio color="#FD6801" :checked="checkedAll" 
				:disabled="disableSelectAll"/>
			</label>
			<template v-if="!isEdit">
				<view class="flex-1 d-flex a-center j-center font-md">
					 合计 <price>{{totalPrice}}</price>
				</view>
				<view class="flex-1 d-flex a-center j-center main-bg-color 
				text-white font-md" 
				hover-class="main-bg-hover-color" @tap="orderConfirm"> 
				结算</view>
			</template>
			<template v-else>
				<view class="flex-1 d-flex a-center j-center bg-danger 
				text-white font-md" hover-class="main-bg-hover-color" 
				@tap="doDelGoods">删除</view>
			</template>
		</view>	
			
		<commonPopup :popupClass="popupShow" @hide="doHidePopup">
			<view class="d-flex a-center"
			style="height: 275rpx;">
				<image :src="popupData.cover" mode="widthFix"
				style="height: 180rpx;width: 180rpx;"
				class="border rounded"></image>
				<view class="pl-2">
					<price priceSize="font-lg" unitSize="font">{{popupData.pprice}}</price>
					<text class="mr-1"
					v-for="(attr,attrIndex) in popupData.attrs" :key="attrIndex">
					{{attr.list[attr.selected].name}}
					</text>
				</view>
			</view>
			<scroll-view scroll-y class="w-100" style="height: 660rpx;">
				<card :headTitle="item.title" :headTitleWeight="false" :headBorderBottom="false"
				v-for="(item,index) in popupData.attrs" :key="index">
					<wacradioGroup :label="item"
					:selected.sync='item.selected'></wacradioGroup>
				</card>
				<view class="d-flex j-sb a-center p-2 border-top border-light-secondary">
					<text>购买数量</text>
					<uni-number-box :min="popupData.minnum" :max="popupData.maxnum"
					:value="popupData.num" @change="popupData.num = $event"></uni-number-box>
				</view>
			</scroll-view>
			<view class="text-white font-md d-flex a-center j-center main-bg-hover-color" 
			style="height: 100rpx;margin-left: -30rpx;margin-right: -30rpx;"  
			@tap.stop="doHidePopup">确定</view>
		</commonPopup>	
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	import uniNumberBox from '@/components/uni-ui/uni-number-box/uni-number-box.vue'
	
	import commonPopup from '@/components/common/common-popup.vue'
	import wacradioGroup from '@/components/common/radio-group.vue'
	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
	export default{
		components:{
			uniNavBar,uniNumberBox,commonPopup,wacradioGroup
		},
		computed:{
			...mapState({
				list:state=>state.cart.list,
				popupShow:state=>state.cart.popupShow
			}),
			...mapGetters([
				'checkedAll',
				'totalPrice',
				'disableSelectAll',
				'popupData'
			])
		},
		data() {
			return {
				isEdit:false
			}
		},
		methods:{
			...mapMutations([
				'selectItem'
			]),
			...mapActions([
				'doSelectAll',
				'doDelGoods',
				'doShowPopup',
				'doHidePopup'
			]),
			changeNum(e,item,index){
				item.num = e
			}
		}
	}
</script>

<style>
</style>
