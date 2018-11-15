<template>
  <div class="newsite">
      <header class="site_title">
          <span @click='Return'><img src="../../../static/images/lefttou.svg" alt=""></span>
          新增地址
      </header>
      <section class="site_con">
          <ul>
              <li>
                  <label for="">联系人</label><input type="text" v-model='linkMan' placeholder="姓名">
              </li>
              <li>
                  <label for="">手机号</label><input type="text" v-model='mobile' placeholder="11位手机号">
              </li>
              <li>
                  <label for="">选择地区</label>
                  <select >
                      <option value="">请选择</option>
                      <option v-for='(item, i) in shengfen' :key='i'  value="item.id">{{item.name}}</option>
                  </select>
                  <select name="" id="">
                      <option value="">请选择</option>
                  </select>
                  <select name="" id="">
                      <option value="">请选择</option>
                  </select>
              </li>
              <li>
                  <label for="">详细地址</label><input type="text" v-model='address' placeholder="街道门牌信息">
              </li>
              <li>
                  <label for="">邮政编码</label><input type="text" v-model='code' >
              </li>
          </ul>
          <div class="buttonBtn">
              <button @click='setSite'>保存</button>
              <button>取消</button>
          </div>
      </section>
  </div>
</template>

<script>
import { getCookie } from '@/components/util/cookie.js'
export default {
  data () {
    return {
      shengfen: [],
      address: '', // 详细地址
      cityId: '750001', // 所属城市编码
      code: '', // 邮编
      linkMan: '', // 联系人
      mobile: '', // 手机号码
      provinceId: '750001', // 所属省份编码
      token: getCookie('token') // 登录接口返回的token
    }
  },
  mounted () {
    this.getShengfen()
  },

  methods: {
    Return () { // 返回上一页
      this.$router.back()
    },
    getShengfen () {
      this.$http.post('https://api.it120.cc/common/region/province').then(res => {
        console.log(res.data.data)
        let { data } = res
        if (data.code === 0) {
          this.shengfen = data.data
        } else {
          alert('跨域了')
        }
      })
    },
    setSite () {
      let params = new URLSearchParams() // query 请求方式
      params.append('address', this.address)
      params.append('cityId', this.cityId)
      params.append('code', this.code)
      params.append('linkMan', this.linkMan)
      params.append('mobile', this.mobile)
      params.append('provinceId', this.provinceId)
      params.append('token', this.token)
      this.$http.post('/api/user/shipping-address/add', params).then(res => {
        let { data } = res
        console.log(data)
        if (data.code === 0) {
          this.$store.commit('setDizhi', data.data)
          this.$router.back()
        } else if (data.code === 2000) {
          this.$router.replace('/login')
        }
      })
    }
  }
}
</script>

<style>

</style>
