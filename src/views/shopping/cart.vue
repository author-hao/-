<template>
    <div class="cart">
      <h3><span v-if='cart_data.length' @click='updata_resover'>{{ updata }}</span>  购物车</h3>

       <section class="myCart"  ref="myCart">

          <div class="wapper">
                  <div class="my_list">
                    <div v-if='!cart_data.length' class="empty">
                  <img src="../../../static/images/gwc.jpg" alt="">
                  <p>去加点什么吧</p>
              </div>
            <!-- 购物车 -->
            <section v-for='(item, i) in cart_data' :key='i' class="cart_list">
                <dl>
                    <dt>
                        <span>
                            <i class="check"></i>
                        </span>
                        <img src="../../../static/images/img_04.png" alt="">
                    </dt>
                    <dd>
                        <h3>连庄收纳盒两件组合装组昂</h3>
                        <span>￥299</span>
                        <!-- 加减操作 -->
                        <div class="operation">
                            <span class="reduce">-</span>
                            <span>1</span>
                            <span>+</span>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <span>
                            <i class="check"></i>
                        </span>
                        <img src="../../../static/images/img_04.png" alt="">
                    </dt>
                    <dd>
                        <h3>连庄收纳盒两件组合装组昂</h3>
                        <span>￥299</span>
                        <!-- 加减操作 -->
                        <div class="operation">
                            <span class="reduce">-</span>
                            <span>1</span>
                            <span>+</span>
                        </div>
                    </dd>
                </dl>
            </section>
            <div class="like">
                <h3>猜你喜欢</h3>
                <section class="rec-Sentiment_con">
                      <div>
                            <img src="../../../static/images/img_25.png" alt="">
                            <div>全场使用优惠券立减88元</div>
                            <p>清欢素雅小程序模板开课啦</p>
                            <span>￥299</span>
                      </div>
                      <div>
                            <img src="../../../static/images/img_25.png" alt="">
                            <div>全场使用优惠券立减88元</div>
                            <p>清欢素雅小程序模板开课啦</p>
                            <span>￥299</span>
                      </div>
                      <div>
                            <img src="../../../static/images/img_25.png" alt="">
                            <div>全场使用优惠券立减88元</div>
                            <p>清欢素雅小程序模板开课啦</p>
                            <span>￥299</span>
                      </div>
                      <div>
                            <img src="../../../static/images/img_25.png" alt="">
                            <div>全场使用优惠券立减88元</div>
                            <p>清欢素雅小程序模板开课啦</p>
                            <span>￥299</span>
                      </div>
                  </section>
            </div>
              </div>
        </div>
      </section>

      <!-- 底部下单和删除 -->
       <footer class="orders" v-if="cart_data.length" v-show='!updelete' >
          <div>
              <input type="checkbox" v-model="isShow" id='checked'><label for="checked"></label>
              <span>全选</span>
          </div>
          <div>
              <span>合计：<i>￥0.00</i></span>
              <button :disabled='!isShow' @click='Confirm' :class="{'button': isShow}">下单</button>
          </div>
       </footer>
       <footer v-show="updelete" class="deleteAll">
           <div>
              <input type="checkbox" v-model="isShow" id='checked2'><label for="checked2"></label>
              <span>全选</span>
          </div>
          <div>
              <span v-if='0'>合计：<i>￥0.00</i></span>
              <button :class="{'button2':true }">删除</button>
          </div>
       </footer>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      isShow: false,
      cart_data: ['aa'],
      updelete: false
    }
  },
  computed: {
    updata () {
      return this.updelete ? '完成' : '编辑'
    }
  },
  mounted () {
    setTimeout(() => {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.myCart, {
          tap: true,
          click: true
        })
        this.scroll.refresh()
      })
    }, 500)
  },
  methods: {
    updata_resover () { // 切换header 编辑按钮
      this.updelete = !this.updelete
    },
    Confirm () {
      this.$router.push('/confirm')
    }
  }
}
</script>

<style>

</style>
