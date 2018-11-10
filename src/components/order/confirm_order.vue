<template>
    <!-- 确认订单 -->
  <div class="confirm">
      <header class="confirm_head">
          <h3>
              <span @click='Return'>〈</span>
              确认订单
          </h3>
          <div>
              <span @click='site'>+</span>
              <p>新增收货地址</p>
              <i @click='site'>〉</i>
          </div>
      </header>
      <section class="condirm_title">
          <h3>商品列表</h3>
          <div class="condirm_list">
             <img src="../../../static/images/img_06.png" alt="">
             <div>
                  <p>清欢素雅小程序端模板 （API工厂授权版）</p>
                  <p>选择版本：开发板（未加密版本）</p>
             </div>
             <div>
                  <p>￥599</p>
                  <span>X 1</span>
             </div>
          </div>
          <p class="xian"></p>
          <div class="delivery">
              <h3>配送方式 <span>包邮</span></h3>
              <h3>备注 <input type="text" placeholder="如需备注请输入"></h3>
          </div>
          <p class="xian"></p>
          <div class="price_all">
              <p>商品金额</p>
              <span>￥ 0</span>
          </div>
      </section>
      <footer class="confirm_foot">
          <span>合计：<i>￥ 0</i></span>
          <button>提交订单</button>
      </footer>
  </div>
</template>

<script>
export default {
  methods: {
    Return () { // 返回上一页
      this.$router.back()
    },
    site () { // 新增地址
      this.$router.push('/newsite')
    }
  }
}
</script>

<style>

</style>
