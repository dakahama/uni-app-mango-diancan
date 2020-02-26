//import $H from '@/common/lib/request.js';
//import $U from '@/common/lib/util.js';
export default {
	state:{
		list:[
			{
				checked:false,
				id:2,
				title:"标题",
				cover:"/static/images/demo/cate_01.png",
				attrs:[
					{
						title:"大小",
						selected:0,
						list:[
							{ name:"大" },
							{ name:"小"},
						]
					}
				],
				pprice:3333,
				num:1,
				minnum:1,
				maxnum:5
			},
			{
				checked:false,
				id:5,
				title:"标题",
				cover:"/static/images/demo/cate_01.png",
				attrs:[
					{
						title:"大小",
						selected:0,
						list:[
							{ name:"大" },
							{ name:"小"},
						]
					}
				],
				pprice:3333,
				num:1,
				minnum:1,
				maxnum:5
			}
		],
		//选中id数组
		selectedList:[],
		popupShow:"none",
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
					 total += v.pprice*v.num
				}
			})
			return total
		},
		disableSelectAll:(state)=>{
			return state.list.length === 0
		},
		//拿到当前需要修改属性的商品
		popupData:(state)=>{
			return state.popupIndex > -1 ? state.list[state.popupIndex] : {}
		}
	},
	mutations:{
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
		},
		//初始化popupIndex
		initPopupIndex(state,index){
			state.popupIndex = index
		},
		//加入购物车
		addGoodsToCart(state,goods){
			state.list.unshift(goods)
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
						commit('delGoods')
						uni.showToast({
							title:'删除成功'
						})
					}
				}
			});
		},
		//显示popup
		doShowPopup({state,commit},index){
			commit('initPopupIndex',index)
			state.popupShow = "show"
		},
		//隐藏
		doHidePopup({state}){
			state.popupShow = 'hide'
			setTimeout(()=>{
				state.popupShow = 'none'
				commit('initPopupIndex',-1)
			},200)
		}
	}
}