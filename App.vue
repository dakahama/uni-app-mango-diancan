<script>
	export default {
		// 全局变量
		globalData:{
			text:""
		},
		onUniNViewMessage(e){
			let data = e.data;
			console.log(e.data)
			// 处理
			if(data.from && data.from === 'index'){
				// 通知分类页修改数据
				uni.$emit('index',data)
			}
		},
		onLaunch: function() {
			this.$store.commit('initUser')
			
			//this.$store.dispatch('updateCartList')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import "/common/uni.css";
	@import "/common/animate.css";
	@import "/common/icon.css");
	@import "/common/common.css";
	@import "/common/diancan-main.css";
</style>
