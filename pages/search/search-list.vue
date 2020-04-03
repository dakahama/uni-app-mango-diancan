<template>
	<view>
		<!-- 自定义导航 -->
		<!-- #ifdef MP -->
		<view class="d-flex a-center" style="height: 90rpx;">
			<!-- 中间 -->
			<input type="text" v-model="keyword" 
			class="flex-1 bg-light rounded ml-3 px-2"
			style="height: 65rpx;" placeholder="请输入搜索关键词"/>
			<!-- 右边 -->
			<view style="width: 85rpx;" class="d-flex a-center j-center"
			@click="search">
				搜索
			</view>
		</view>
		<!-- #endif -->
		<!-- 排序|筛选 -->
		<view class="d-flex border-top border-bottom a-center position-fixed left-0 right-0 bg-white" 
		style="height: 100upx;z-index: 100;">
			<view class="flex-1 d-flex a-center j-center"
			v-for="(item,index) in screen.list" :key="index"
			@tap="changeScreen(index)">
				<text class="font-md" 
				:class="screen.currentIndex === index ? 'main-text-color':'text-muted'">{{item.name}}</text>
				<view v-show="index === 1">
					<!-- line-h0 取消行高 -->
					<view class="iconfont icon-paixu-shengxu line-h0"
					:class="item.status === 1? 'main-text-color':'text-light-muted'"></view>
					<view class="iconfont icon-paixu-jiangxu line-h0"
					:class="item.status === 2? 'main-text-color':'text-light-muted'"></view>
				</view>
			</view>
			
			<view class="flex-1 d-flex a-center j-center main-text-color"
			@click="showRigth = true">
				筛选
			</view>
		</view>
		<view style="height: 100rpx;"></view>
		<!-- 抽屉 -->
		<uni-drawer :visible="showRigth" mode="right" @close="showRigth = false">
			<card headTitle="服务" :headBorderBottom="false" :headTitleWeight="false">
				
				<!-- 单选按钮组 -->
				<zcm-radio-group :label="label" 
				:selected.sync='label.selected'></zcm-radio-group>
				
			</card>
			<!-- 按钮 -->
			<view class="d-flex position-fixed bottom-0 right-0 w-100 border-top border-light-secondary">
				<view class="flex-1 main-bg-color text-white font-md py-2 text-center" 
				hover-class="main-bg-hover-color"
				@click="confirm">确定</view>
				<view class="flex-1 font-md py-2 text-center"
				hover-class="bg-light-secondary" @click="reset">重置</view>
			</view>
		</uni-drawer>	
		<!-- 列表 -->
		<block v-for="(item,index) in list" :key="index">
			<searchList :item="item" :index="index"></searchList>
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
	import uniDrawer from "@/components/uni-ui/uni-drawer/uni-drawer.vue"
	import zcmRadioGroup from "@/components/common/radio-group.vue"
	import searchList from "@/components/search/search-list.vue"
	import noThing from '@/components/common/no-thing.vue';
	export default {
		components: {			
			searchList,
			noThing,
			uniDrawer,
			zcmRadioGroup
		},
		data() {
			return {
				// 1.上拉加载更多  2.加载中... 3.没有更多了
				loadtext:"上拉加载更多",
				keyword:"",
				page:1,
				limit:5,
				list:[],
				screen:{
					currentIndex:0,
					list:[
						// status 0 1升序 2 降序
						{ name:"综合",status:1,key:"all" },
						{ name:"销量",status:0,key:"sale_count" },
						{ name:"价格",status:0,key:"min_price" },
					]
				},
				label:{
					selected:0,
					list:[
						{name:"不限",rule:false,value:false},
						{name:"0-5",rule:"between",value:"0,5"},
						{name:"5-10",rule:"between",value:"5,10"},
						{name:"10-50",rule:"between",value:"10,50"},
						{name:"50-100",rule:"between",value:"50,100"},
						{name:"大于100",rule:">",value:"100"},
					]
				},
				showRigth:false,
				condition:{},
				oldSelected:0,
			}
		},
		computed: {
			// 排序相关
			options() {
				let obj = this.screen.list[this.screen.currentIndex]
				let value = obj.status === 1 ? 'asc' : 'desc'
				return {
					[obj.key]:value
				}
			},
		},
		onNavigationBarSearchInputChanged(e) {
			this.keyword = e.text
		},
		onNavigationBarSearchInputConfirmed() {
			this.initSearch()
			this.search()
		},
		onNavigationBarButtonTap() {
			this.initSearch()
			this.search()
		},
		onLoad(e) {
			this.keyword = e.keyword
			// 加载数据
			this.getData()
		},
		onPullDownRefresh() {
			this.getData(true,()=>{
				uni.showToast({
					title: '刷新成功',
					icon:"none"
				});
				uni.stopPullDownRefresh()
			})
		},
		onReachBottom() {
			// 是否已经处于加载状态
			if (this.loadtext !== '上拉加载更多') return;
			// 改变加载状态
			this.loadtext = '加载中...'
			this.page++
			// 请求数据
			this.getData(false)
		},
		beforeDestroy() {
			this.keyword = ''
		},
		methods: {
			// 初始化搜索
			initSearch(){
				this.label.selected = 0
				this.condition = {}
				this.page = 1
			},
			// 搜索
			search(){
				if (this.keyword === '') {
					return uni.showToast({
						title: '关键词不能为空',
						icon: 'none'
					});
				}
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord()
				// #endif
				// #ifndef APP-PLUS
				uni.hideKeyboard()
				// #endif
				
				this.addHistory()
				this.initSearch()	
				this.list = []
				
				this.getData()
					
			},
			addHistory(){
				// 拿到所有的搜索历史
				let history = uni.getStorageSync('searchHistory')
				history = history ? JSON.parse(history) : []
				// 判断之前是否有该搜索记录
				let index = history.indexOf(this.keyword)
				if (index === -1) {
					history.unshift(this.keyword)
				} else {
					history.unshift(history.splice(index,1)[0])
				}
				uni.setStorageSync('searchHistory',JSON.stringify(history))
			},
			// 加载数据
			getData(refresh = false, callback = false){
				let page = refresh ? 1 : this.page
				
				//console.log(JSON.stringify(this.options))
				//console.log(JSON.stringify(this.condition))
				
				this.$H.post('/product/product/search',{
					title:this.keyword,
					page:page,
					limit:this.limit,
					...this.options,
					...this.condition
				}).then(res=>{
					
					//this.keyword = ""
					
					//console.log(res)
					let list = this.format(res.list)
					this.list = refresh ? [...list]:[...this.list,...list]
					
					// 恢复加载状态
					this.loadtext = res.list.length < this.limit ? '没有更多了' : '上拉加载更多'
					console.log(this.loadtext)
					if (typeof callback === 'function') {
						callback()
					}
				})
			},
			// 格式化
			format(res){
				return res.map(item=>{
					var goodNums = item.num === 0 ? 0 : (item.goodNums / item.num) * 100
					return {
						id:item.id,
						title:item.title,
						cover:item.cover,
						desci:item.desci,
						price:item.price,
						num:item.num,
						goodNums:goodNums.toFixed(2) + '%'
					}
				})
			},
			changeScreen(index){
				this.page = 1
				this.list = []
				// 判断当前点击是否已经是激活状态
				let oldIndex = this.screen.currentIndex
				let oldItem = this.screen.list[oldIndex]
				if (oldIndex === index) {
					oldItem.status = oldItem.status === 1 ? 2 : 1
					// 加载数据
					this.getData()
					return
				}
				let newIitem = this.screen.list[index] 
				// 移除旧激活状态
				oldItem.status = 0
				this.screen.currentIndex = index
				// 增加新激活状态
				newIitem.status = 1
				// 加载数据
				
				this.getData()
			},			
			// 提交筛选条件
			confirm(){
				this.page = 1
				this.list = []
				// 组织筛选条件
				this.getCondition()
				// 获取数据
				this.getData()
				
				this.showRigth = false
			},
			// 重置
			reset(){
				this.condition = {}
				this.label.selected = 0
				// 获取数据
				this.getData(true)
				
			},
			
			// 组织筛选条件
			getCondition(){
				let item = this.label.list[this.label.selected]
				this.condition = (item.rule && item.value) ? {
					price:item.rule+','+item.value
				} : {
				}
			}
		}
	}
</script>

<style>

</style>
