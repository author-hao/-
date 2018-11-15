<template>
    <!-- 确认订单 -->
  <div class="confirm">
      <header class="confirm_head">
          <h3>
              <span @click='Return'>〈</span>
              确认订单
          </h3>
          <div v-if='!siteData'>
              <span @click='site'>+</span>
              <p @click='site'>新增收货地址</p>
              <i @click='site'>〉</i>
          </div>
          <div v-else>
              <span @click='site'>+</span>
              <p @click='site_list'>{{ siteData }} </p>
              <i @click='site_list'>〉</i>
          </div>
      </header>
      <section class="condirm_title">
          <h3>商品列表</h3>
          <div class="condirm_list" v-for='item in createOrder' :key='item.id'>
             <img :src="item.pic" alt="">
             <div>
                  <p>{{ item.name }}</p>
                  <p>选择规格：<span>{{item.name1}}</span> <span>{{ item.name2 }}</span></p>
             </div>
             <div>
                  <p>￥{{item.originalPrice}}</p>
                  <span>X {{ item.number }}</span>
             </div>
          </div>
          <p class="xian"></p>
          <div class="delivery">
              <h3>配送方式 <span>包邮</span></h3>
              <h3>备注 <input type="text" v-model='beizhu' placeholder="如需备注请输入"></h3>
          </div>
          <p class="xian"></p>
          <div class="price_all">
              <p>商品金额</p>
              <span>￥ {{ zjAll }}</span>
          </div>
      </section>
      <footer class="confirm_foot">
          <span>合计：<i>￥ {{ zjAll }}</i></span>
          <button @click='from_order'>提交订单</button>
      </footer>
  </div>
</template>

<script>
import { getCookie } from '@/components/util/cookie.js'
export default {
  data () {
    return {
      siteData: '',
      beizhu: '',
      token: getCookie('token'),
      site_dizhi: {}
    }
  },
  computed: {
    createOrder () {
      return this.$store.state.order_list
    },
    zjAll () {
      let zjnum = 0
      this.createOrder.forEach(i => {
        zjnum += i.originalPrice * i.number
      })
      return zjnum
    },
    Str () {
      return this.$store.state.goodsJsonStrimg
    }
  },
  mounted () {
    // 获取默认地址
    let params = new URLSearchParams()
    params.append('token', this.token)
    this.$http.post('/api/user/shipping-address/default', params).then(res => {
      let { data } = res
      if (data.code === 0) {
        this.siteData = data.data.linkMan + data.data.mobile
        this.$store.commit('setDizhi', data.data)
      }
    })
    setTimeout(() => {
      this.getSite()
    })
  },
  methods: {
    getSite () { // 获取默认地址
      let data = this.$store.state.site_dizhi
      this.siteData = data.linkMan + data.mobile
      this.site_dizhi = data
    },
    Return () { // 返回上一页
      this.$router.back()
    },
    site () { // 新增地址
      this.$router.push('/newsite')
    },
    site_list () { // 新增地址
      this.$router.push('/site')
    },
    from_order () { // 生成订单
      // this.$router.replace('/success')
      this.$http.post('/api/order/create',
        'token=' + this.token +
      '&goodsJsonStr=' + JSON.stringify(this.createOrder) +
      '&expireMinutes=2'
      ).then(res => {
        let { data } = res
        console.log(data)
        if (data.code === 0) {
          this.$store.commit('orderOnpay', data.data)
          this.$router.replace('/success')
        } else {
          alert('出错了')
        }
      })
    }
  }
}
</script>

<style>

</style>
