<template>
	<view>
		<uni-list-item title="姓名">
			<block slot="right">
				{{express.name}}
			</block>
		</uni-list-item>
		<uni-list-item title="手机">
			<block slot="right">
				{{express.phone}}
			</block>
		</uni-list-item>
		<view v-if="express.id === 0" class="d-flex a-center j-center py-5">
			<text class="font-md text-light-muted">暂无信息</text>
		</view>
	</view>
</template>

<script>
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		components:{
			uniListItem
		},
		data() {
			return {
				id:0,
				express:{
					id:0,
					name:"",
					phone:""
				}
			}
		},
		onLoad(e) {
			if(!e.detail){
				return uni.showToast({
					title: '非法参数',
					icon: 'none'
				});
			}
			this.id = (JSON.parse(e.detail)).id
			this.getShipInfo()
		},
		methods: {
			getShipInfo(){
				this.$H.get('/order/order/shipInfo/'+this.id,{},{
					token:true
				}).then(res=>{
					
					this.express = res
					console.log(res)
				})
			}
		}
	}
</script>

<style>

</style>
