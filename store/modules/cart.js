import $H from '@/common/lib/request.js';
import $U from '@/common/lib/util.js';
export default {
	state:{
		list:[],
		//选中id数组
		selectedList:[],
		//当前操作的商品
		popupIndex:-1
	},
	getters:{
		//判断是否全选
		checkedAll:(state)=>{
			return state.list.length === state.selectedList.length
		},
		//合计
		totalPrice:(state)=>{
			var total = 0
			state.list.forEach(v=>{
				if(state.selectedList.indexOf(v.id) > -1){
					 total += v.price*v.num
				}
			})
			return total
		},
		disableSelectAll:(state)=>{
			return state.list.length === 0
		},
		
		cartCount:(state)=>{
			if(state.list.length <=99) {
				return state.list.length
			}
			return '99+'
		}
		
	},
	mutations:{
		initCartList(state,list){
			state.list = list
			
			//$U.updateCartBadge(state.list.length)
			/*
			let count = state.list.length
			if(count > 0){
				uni.setTabBarBadge({
					index:2,
					text:count.toString()
				})
			}
			*/
		
		},
		
		
		
		//全选
		selectAll(state){
			state.selectedList = state.list.map(v=>{
				v.checked = true
				return v.id
			})
		},
		unSelectAll(state){
			state.list.forEach(v=>{
				v.checked = false
			})
			state.selectedList = []
		},
		//选中、取消选中
		selectItem(state,index){
			let id = state.list[index].id
			let i = state.selectedList.indexOf(id)
			if (i > -1){
				//取消选中商品状态
				state.list[index].checked = false
				//移除选中列表中的当前商品
				return state.selectedList.splice(i,1)
			}
			//
			state.list[index].checked = true
			state.selectedList.push(id)
		},
		//删除选中
		delGoods(state){
			state.list = state.list.filter(v=>{
				return state.selectedList.indexOf(v.id) === -1
			})
			//$U.updateCartBadge(state.list.length)
			
		},
		//加入购物车
		addGoodsToCart(state,goods){
			state.list.unshift(goods)
			
			//$U.updateCartBadge(state.list.length)
		},
		
		clearCart(state){
			state.list = []
			state.selectedList = []
		}
	},
	actions:{
		
		doSelectAll({commit,getters}){
			getters.checkedAll ? commit('unSelectAll'):commit('selectAll')
		},
		doDelGoods({commit,state}){
			
			if(state.selectedList.length === 0){
				return uni.showToast({
					title: '请选择要删除的商品',
					icon: 'none'
				});
			}
			uni.showModal({
				content: '是否删除选中',
				success: function (res) {
					if (res.confirm) {
						
						$H.post('/product/cart/delete',{
							cartIds:state.selectedList
						},{
							token:true
						}).then(res=>{
							commit('delGoods')
							commit('unSelectAll')
							uni.showToast({
								title:res
							})
						})
						
					}
				}
			});
		},
	}
}