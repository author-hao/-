<template>
  <div class="orderslist">
        <header class="site_title">
          <h3>
              <span @click='Return'><img src="../../../static/images/lefttou.svg" alt=""></span>
          订单列表
          </h3>
          <ul>
              <li class="site_red">
                 <router-link exact to='/orderslist/staypayment'>待付款</router-link>

              </li>
              <li>
                  <router-link to='/orderslist/staysend'>待发货</router-link>

              </li>
              <li>
                  <router-link to='/orderslist/staygoods'>待收货</router-link>

              </li>
              <li>
                  <router-link to='/orderslist/stayevaluate'>待评价</router-link>

              </li>
              <li>
                  <router-link to='/orderslist/hascompleted'>已完成</router-link>
              </li>
          </ul>
      </header>
      <section class="orders_list">
          <router-view />
      </section>
  </div>
</template>

<script>
export default {
  methods: {
    Return () {
      this.$router.push('/personal')
    }
  }
}
</script>

<style>

</style>
