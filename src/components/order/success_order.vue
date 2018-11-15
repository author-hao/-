<template>
  <div class="success">
          <header class="cuccess_head">
            <span @click='Return'>&lt;</span>
              订单详情
          </header>
          <section class="success_wrapper">
              <div class="success_con">
                  <dl>
                      <dt>
                          <img src="" alt="">
                      </dt>
                      <dd>

                      </dd>
                  </dl>
              </div>
          </section>
        <footer class="zhifu">
            <button @click='pay'>确认支付</button>
        </footer>
        <div v-if='up' class="tanduang">
            <span>正在生成支付</span>
        </div>
  </div>
</template>

<script>
import { getCookie } from '@/components/util/cookie.js'
export default {
  data () {
    return {
      id: '',
      successData: [],
      up: false
    }
  },
  mounted () {
    let params = new URLSearchParams()
    params.append('token', getCookie('token'))
    params.append('id', 99762)
    this.$http.post('/api/order/detail', params).then(res => {
      let { data } = res
      console.log(data)
    })
  },
  methods: {
    Return () {
      this.$router.back()
    },
    pay () {
      this.up = true
      setTimeout(() => {
        this.up = false
        window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe93d3f996beab1eb&redirect_uri=http://www.wyunfei.com/&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
      }, 1000)
    }
  }
}
</script>

<style>

</style>
