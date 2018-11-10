<template>
<div class="personalData_con">
  <div class="personalData_wapper" ref='personalData_wapper'>
  <div class="personalData">
      <header class="head_portrait ">
          <dl>
              <dt><img src="../../../static/images/img_06.png" alt=""></dt>
              <dd>
                  <p>星辰闪烁</p>
                  <span @click='jifen'>积分：20</span>
              </dd>
          </dl>
      </header>
       <div class="swiper-container broadcast">
          <div class="swiper-wrapper">
              <div class="swiper-slide"><i class="iconfont icon-laba"></i> 新上线更稳定的付费快递查询接口</div>
          </div>
      </div>
      <div class="hr"></div>
      <section class="order_from">
        <h3 @click='Orders'>
           <i class="iconfont icon-dingdan1"></i> 我的订单
        </h3>
        <ul>
            <li>
               <router-link to='/orderslist/staypayment'><i class="iconfont icon-qianbao"></i>
                <p>待付款</p></router-link>
            </li>
            <li>
                <router-link to='/orderslist/staysend'><i class="iconfont icon-daifahuo"></i>
                <p>待发货</p></router-link>
            </li>
            <li>
                <router-link to='/orderslist/staygoods'><i class="iconfont icon-fahuo"></i>
                <p>待收货</p></router-link>
            </li>
            <li>
               <router-link to='/orderslist/stayevaluate'><i class="iconfont icon-pingjia"></i>
                <p>待评价</p></router-link>
            </li>
        </ul>
        <div class="orders">
            <ol>
                <li>
                  <router-link to='/balance'><i class="iconfont icon-yue"></i>
                  <p>我的余额</p>
                  <span>0 元</span></router-link>
                </li>
                <li>
                  <router-link to=''><i class="iconfont icon-kanjia"></i>
                  <p>我的砍价</p></router-link>
                </li>
                <li>
                  <router-link to=''><i class="iconfont icon-youhuiquan"></i>
                  <p>我的礼券</p></router-link>
                </li>
                <li>
                  <router-link to=''><i class="iconfont icon-xingxing"></i>
                  <p>我的收藏</p></router-link>
                </li>
                <li>
                  <router-link to='/site'><i class="iconfont icon-LC_icon_gps_line_1"></i>
                  <p>我的地址</p></router-link>
                </li>
                <li>
                  <router-link to=''><i class="iconfont icon-kefu"></i>
                  <p>联系客服</p></router-link>
                </li>
            </ol>
        </div>
        <div class="foot">
            清欢严选 v2.2.0
        </div>
      </section>
  </div>
  </div>
  </div>
</template>

<script>
import '@/assets/font_iocn/iconfont.css'
import BScroll from 'better-scroll'
export default {
  created () {
    setTimeout(() => {
      this.scroll = new BScroll(this.$refs.personalData_wapper, {
        click: true
      })
    }, 10)
  },
  methods: {
    jifen () { // 签到页
      this.$router.push('/signin')
    },
    Orders () { // 订单列表
      this.$router.push('/orderslist/staypayment')
    }
  }
}
</script>

<style>

</style>
