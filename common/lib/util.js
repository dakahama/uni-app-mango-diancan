export default {
	// 更新tabbar角标
	updateCartBadge(count){
		if(count > 0){
			return uni.setTabBarBadge({
				index:2,
				text:count.toString()
			})
		}
		uni.removeTabBarBadge({
			index:2
		})
	},
	// 判断订单状态
	formatStatus(order){
		if(!order){
			return ''
		}
		
		// 未支付
		if(order.status === 1){
			return "待支付"
		}
		// 未发货
		if(order.status === 2){
			return "待发货"
		}
		
		
		if(order.status === 3){
			return '待收货'
		}
		
		
		if(order.status === 4){
			return '待评价'
		}
		
		if(order.status === 5){
			if(order.refundStatus !== 'pending'){
				switch (order.refundStatus){
					case 'success':
					return '退款成功'
						break;
					case 'failed':
					return '退款失败'
						break;
				}
			}
			return '已完成'
		}
		
		if(order.status === 6){
			return '已取消'
		}
		
		if(order.status === 7){
			return '退款中'
		}
		
	},
}