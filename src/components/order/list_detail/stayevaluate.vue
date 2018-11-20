<template>
	<!-- 待评价 -->
  <div class='stayevaluate'>
     <div>
     	还没有商品，去购买吧
     </div>
  </div>
</template>

<script>
export default {
	data () {
		return {
			status: 3
		}
	},
	methods: {
		pingjia () { // 评价
			this.$http.post(global.data.api + 'order/reputation').then(res => {
				console.log(res)
			})
		}
	},
	mounted () { // 待评价列表
		let token = this.$cookie.get('token')
        let query = new URLSearchParams()
        console.log(token)
        query.append('token', token)
        query.append('status', this.status)
        this.$http.post(global.data.api + '/order/list', query ).then(res => {
          let { data } = res
          console.log(data)
        })
	}
}
</script>

<style lang="scss" scoped>
@function rem($px) {
  @return $px / 67.5 + rem;
}
.stayevaluate {
	width: 100%;
	
	>div {
		width:100%;
		line-height: rem(500);
		font-size:rem(40);
		text-align:center;
		color: #999;
	}
}
</style>
