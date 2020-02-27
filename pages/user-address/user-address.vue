<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<uni-swipe-action :options="options" @click="bindClick($event,index)">
			<uni-list-item @click="choose(item)">
				<view class="text-secondary">
					<view class="d-flex a-center">
						<text class="main-text-color">{{item.name}}</text>
						{{item.phone}}
						<text class="main-text-color"
						v-if="index === 0 && last_used_time !== null">[默认]</text>
					</view>
					<view>{{item.province}} {{item.city}} {{item.district}}</view>
					<view>{{item.address}}</view>
				</view>
			</uni-list-item>
			</uni-swipe-action>
		</block>
		<!-- 没有数据 -->
		<no-thing v-if="list.length === 0" msg="空空如也"></no-thing>
		<!-- 上拉加载更多 -->
		<divider />
		<view class="d-flex a-center j-center text-light-muted font-md py-3">
			{{loadtext}}
		</view>
	</view>
</template>

<script>
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	import uniSwipeAction from "@/components/uni-ui/uni-swipe-action/uni-swipe-action.vue"
	import noThing from '@/components/common/no-thing.vue';
	import {mapState,mapMutations} from "vuex"
	export default {
		components:{
			uniListItem,uniSwipeAction,noThing
		},
		data() {
			return {
				// 1.上拉加载更多 2.加载中... 3.没有更多了
				loadtext:"上拉加载更多",
				isChoose:false,
				options: [{
					text: '修改',
					style: {
						backgroundColor: '#007aff'
					}
				}, {
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}],
				page:1
			}
		},
		computed:{
			...mapState({
				list:state=>state.path.list
			}),
		},
		methods:{
			...mapMutations(['delPath','updatePathList']),
			bindClick(value,i){
				switch (value.index){
					case 0:
					let obj = {index:i,item:this.list[i]}
					// 加上是否默认
					obj.item.default = (i === 0 && obj.item.last_used_time !== null) ? 1 : 0;
					setTimeout(()=> {
						uni.navigateTo({
							url: '../user-address-edit/user-address-edit?data='+JSON.stringify(obj),
						});
					},50);
					break;
					case 1:
					uni.showModal({
						content: '确定删除该收货地址吗？',
						success: (res)=> {
							if (res.confirm) {
								
								this.$H.del('/useraddresses/'+this.list[i].id,{},{
									token:true
								}).then(res=>{
									this.delPath(i)
									uni.showToast({
										title: '删除成功'
									});
								})
							} 
						}
					});
					break;
				}
			}
		},
		onNavigationBarButtonTap(e){
			if(e.index === 0) {
				uni.navigateTo({
					url: '../user-address-edit/user-address-edit'
				})
			}
		}
	}
</script>

<style>

</style>
