<template>
 <!-- 待付款 -->
  <div class="staypayment">
    aaaaaaa
  </div>
</template>

<script>
import { getCookie } from '@/components/util/cookie.js'
export default {
  data () {
    return {
      page: 1,
      pageSize: 10,
      status: 1
    }
  },
  mounted () {
    let token = getCookie('token')
    let query = new URLSearchParams()
    query.append('token', token)
    this.$http.post('/api/order/list', query, {
      params: {
        page: this.page,
        pageSize: this.pageSize,
        status: this.status
      }
    }).then(res => {
      let { data } = res
      console.log(res)
      if (data.code === 0) {

      }
    })
  }
}
</script>

<style>

</style>
