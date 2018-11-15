<template>
  <div class="bio_site">
        <!-- 地址 -->
        <header class='site_title'>
               <span @click="Return">&lt;</span>
           地址详情
        </header>
      <section class="site_list">
          <div class="site_con">
              <dl v-for='item in siteLis' :key='item.id'>
                  <dt>
                      <span>
                          <i></i>
                      </span>
                  </dt>
                  <dd>
                      <p><span></span><span></span></p>
                      <i>改</i>
                  </dd>
              </dl>
          </div>
      </section>
      <footer class="set_site">
          <div>
              + 新增地址
          </div>
      </footer>
  </div>
</template>

<script>
import { getCookie } from '@/components/util/cookie.js'
export default {
  data () {
    return {
      siteList: [],
      token: getCookie('token')
    }
  },
  methods: {
    Return () {
      this.$router.back()
    }
  },
  mounted () {
    let params = new URLSearchParams()
    params.append('token', this.token)
    this.$http.post('/api/user/shipping-address/list', params).then(res => {
      let { data } = res
      console.log(data)
      if (data.code === 0) {
        this.siteList = data.data
      }
    })
  }
}
</script>

<style>

</style>
