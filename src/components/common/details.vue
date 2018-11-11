<template>
<div class="details">
    <header class="details_title">
        <span @click='Return'><i><</i></span>
    </header>
    <section class="details_warpper">
      <scroller ref="myScroller">
               <div class="details_con">
          <div class="swiper-container banner">
              <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for='(item, i) in imgSrc' :key='i'>
                    <img :src="item.pic" alt="图片加载失败" >
                </li>
            </ul>
             <div class="swiper-pagination"></div>
          </div>

           <!-- 普通 -->
            <div v-if='!title' class="details_data">
                <h3>{{deatil_data.name}}</h3>
                <p>{{ deatil_data.characteristic }}</p>
                <ul>
                    <li>
                        <span>￥{{ deatil_data.pingtuanPrice }}</span>
                        <span>￥{{ deatil_data.originalPrice }}</span>
                    </li>
                    <li>
                        已售 {{ deatil_data.stores }}
                     </li>
                </ul>
            </div>

      <!-- /////////////////////////////////////////////////////////////////////////////// -->
             <!-- 拼团 -->
            <div v-if='title' class="pintuan">
                <div class="details_data2">
                  <h3>{{deatil_data.name}}</h3>
                  <p>{{ deatil_data.characteristic }}</p>
                  <ul>
                      <li>
                            <div>拼团价 ￥<span>{{ deatil_data.pingtuanPrice }}</span></div>
                          <p>
                              <span>2人开团</span>
                              <span>原价 <s>￥{{ deatil_data.originalPrice }}</s></span>
                          </p>
                      </li>
                      <li>
                          已团{{ deatil_data.stores }}件
                      </li>
                  </ul>
              </div>
              <p class="hr"></p>
              <div class="flowpath">
                  <h3>拼团流程</h3>
                    <ol>
                        <li>
                            <i class="iconfont icon-gouwuche"></i>
                            <p>支付开团或拼团</p>
                        </li>
                        <li>
                            <i class="iconfont icon-gouwuche"></i>
                            <P>邀请好友一起拼团</P>
                        </li>
                        <li>
                            <i class="iconfont icon-gouwuche"></i>
                            <p>达到人数一起发货</p>
                        </li>
                        <li>
                            <i class="iconfont icon-gouwuche"></i>
                            <p>人数不够自动退款</p>
                        </li>
                    </ol>
                  <div @click='kuang' class="xuanze">
                        <p>选择规格：选择版本选择服务</p>
                        <span>></span>
                  </div>
              </div>
              <p class="hr"></p>
            </div>

        <!-- 商品介绍、评价 -->
            <div class="content_detail">
                <ul>
                    <li :class="{'active':isShow}" @click='Show'>
                       商品介绍
                    </li>
                    <li :class="{'active':!isShow}" @click='Hide'>
                        商品评价
                    </li>
                </ul>
            </div>
           <section id='detailContent'>
                 <div v-if='isShow'>
                  <Recommend :status='detail_content' />
              </div>
              <div v-else>
                  <Estimate />
              </div>
           </section>
        </div>
        </scroller>
    </section>

    <!-- /////////////////////////////////////////////////////////////////////////////////// -->
    <!-- 普通模式 -->
    <footer v-if='!title' class="details_commit">
        <ul>
            <li class="iocn">
                  <i class="iconfont icon-kefu"></i>
            </li>
            <li class="iocn">
                <i class="iconfont icon-gouwuche"></i>
                <span>{{ cartNum }}</span>
            </li>
            <li class="iocn">
                <i class="iconfont icon-kefu"></i>
            </li>
            <li @click='commonShow'>
                <span>立即购买</span>
            </li>
            <li class="btn">
                <button @click='commonShow2'>加入购物车</button>
            </li>
        </ul>
    </footer>
    <footer v-if='title' class="kaituanBtn">
        <ol>
            <li>
                <i class="iconfont icon-kefu"></i>
            </li>
            <li>
                <i class="iconfont icon-kefu"></i>
            </li>
            <li @click='kuang'>
                <span>￥{{ deatil_data.originalPrice }}</span>
                <span>原价购买</span>
            </li>
            <li @click="moTaiShow">
                <span>￥{{ deatil_data.pingtuanPrice }}</span>
                <span>一键开团</span>
            </li>
        </ol>
    </footer>

    <!-- 拼团模态框 立即购买模式-->
    <div v-if='moT' class="motai">
          <div class="motai_list">
              <div class="motai_con">
                <p><span @click='kuangHide'>X</span></p>
                  <dl class="shangpin">
                      <dt><img :src="deatil_data.pic" alt=""></dt>
                      <dd>
                          <h5>{{deatil_data.name}}</h5>
                          <span>￥{{ deatil_data.originalPrice }}</span>
                      </dd>
                  </dl>
                  <p>选择版本</p>
                  <ul>

                      <li class="li">授权版（加密版本）</li>
                      <li>开发板（未加密版本）</li>
                  </ul>
                  <p>选择服务</p>
                  <ol>
                      <li class="fuwu">不要服务</li>
                      <li>部署上线一条龙服务</li>
                  </ol>
                  <dl class="num">
                      <dt>
                          购买数量
                      </dt>
                      <dd>
                          <span>-</span>
                          <span>1</span>
                          <span>+</span>
                      </dd>
                  </dl>
              </div>
              <footer class="mai">
                  <button>立即购买</button>
              </footer>
          </div>
    </div>

    <!-- 拼团模态框 一键开团模式-->
    <div v-if='moTai' class="motai2">
          <div class="motai_list">
              <div class="motai_con">
                <p><span @click='moTaiHide'>X</span></p>
                  <dl class="shangpin">
                      <dt><img :src="deatil_data.pic" alt=""></dt>
                      <dd>
                          <h5>{{deatil_data.name}}</h5>
                          <span>￥{{ deatil_data.pingtuanPrice }}</span>
                      </dd>
                  </dl>
                  <p>选择版本</p>
                  <ul>

                      <li class="li">授权版（加密版本）</li>
                      <li>开发板（未加密版本）</li>
                  </ul>
                  <p>选择服务</p>
                  <ol>
                      <li class="fuwu">不要服务</li>
                      <li>部署上线一条龙服务</li>
                  </ol>
                  <dl class="num">
                      <dt>
                          购买数量
                      </dt>
                      <dd>
                          <span>-</span>
                          <span>1</span>
                          <span>+</span>
                      </dd>
                  </dl>
              </div>
              <footer class="mai">
                  <button @click='pintuan'>立即开团</button>
              </footer>
          </div>
    </div>

    <!-- 普通购买模态框 -->
    <div v-if='general_kuang' class="moTai_putong">
        <div class="general">
            <div class="motai_con">
                <p><span @click='commonHide'>X</span></p>
                  <dl class="shangpin">
                      <dt><img :src="deatil_data.pic" alt=""></dt>
                      <dd>
                          <h5>{{deatil_data.name}}</h5>
                          <span>￥{{ deatil_data.originalPrice }}</span>
                      </dd>
                  </dl>
                  <dl class="num">
                      <dt>
                          购买数量
                      </dt>
                      <dd>
                          <span>-</span>
                          <span>1</span>
                          <span>+</span>
                      </dd>
                  </dl>
            </div>
              <footer class="mai">
                  <button>立即购买</button>
              </footer>
        </div>
    </div>

    <!-- 普通加入购物车模态框 -->
    <div v-if='general_kuang2' class="moTai_putong2">
        <div class="general">
            <div class="motai_con">
                <p><span @click='commonHide2'>X</span></p>
                  <dl class="shangpin">
                      <dt><img :src="deatil_data.pic" alt=""></dt>
                      <dd>
                          <h5>{{deatil_data.name}}</h5>
                          <span>￥{{ deatil_data.originalPrice }}</span>
                      </dd>
                  </dl>
                  <dl class="num">
                      <dt>
                          购买数量
                      </dt>
                      <dd>
                          <span>-</span>
                          <span>1</span>
                          <span>+</span>
                      </dd>
                  </dl>
            </div>
              <footer class="mai">
                  <button @click="setItems(deatil_data)">加入购物车</button>
              </footer>
        </div>
    </div>

</div>
</template>

<script>
import Swiper from 'swiper'
import Recommend from '@/components/common/detail_recommend'
import Estimate from '@/components/common/detail_estimate'
export default {
  components: {
    Recommend,
    Estimate
  },
  data () {
    return {
      imgSrc: [], // 轮播图
      deatil_data: {}, // 商品数据
      detail_content: '', // 商品介绍内容
      isShow: true, // 商品介绍和评价
      title: false, // 底部操作的切换
      general_kuang: false, // 普通模态框
      general_kuang2: false, // 普通模态框 加入购物车
      moT: false, // 拼团立即购买模态框
      moTai: false // 一键拼团模态框
    }
  },
  computed: {
      cartNum () {
          return this.$store.state.cart_count
      }
  },
  methods: {

    Return () {
      this.$router.back()
    },
    // 商品介绍
    Show () {
      this.isShow = true
    },
    Hide () { // 商品评价
      this.isShow = false
    },
    // 立即购买模式
    kuang () {
      this.moT = true
    },
    // 关闭立即购买模式
    kuangHide () {
      this.moT = false
    },
    commonShow () { // 普通模式显示 模态框
      this.general_kuang = true
    },
    commonHide () { //  关闭普通模式模态框
      this.general_kuang = false
    },
    commonShow2 () { // 普通模式显示 加入购物车 模态框
      this.general_kuang2 = true
    },
    commonHide2 () { //  关闭普通模式加入购物车模态框
      this.general_kuang2 = false
    },
    moTaiShow () { // 开启一键开团模态框
      this.moTai = true
    },
    moTaiHide () {  // 关闭一键开团模态框
      this.moTai = false
    },
    pintuan () {
        this.$http.post('/api/shop/goods/pingtuan/open', {
          token:  this.deatil_data.userId,
          goodsId: this.deatil_data.id
        }).then(res => {
            console.log(res)
        })
    },
    setItems (item) { // 加入购物车
        this.general_kuang2 = false
        this.$store.commit('setListData', item)

        setTimeout(()=> {
          alert('加入购物车成功')
        }, 50)

    }
   },
  mounted () {
    setTimeout(() => {
      this.scroll = this.$refs.myScroller
    }, 20)
    let mySwiper = new Swiper('.banner', {
      loop: true,
      autoplay: {// 自动滑动
        disableOnInteraction: false
      },
      pagination: {// 如果需要分页器
        el: '.swiper-pagination'
      },
      observer: true,
      observeParents: true
    })
    let { id } = this.$route.query
    // console.log(id)
    this.$http.post('/api/shop/goods/detail?id=' + id).then(res => {
      let { data } = res
      if (data.code === 0) {
        if (data.data.basicInfo.pingtuan === true) {
          this.title = false
        }

        this.imgSrc = data.data.pics // 轮播图
        this.deatil_data = data.data.basicInfo // 商品名称
        this.detail_content = data.data.content // 商品内容
      }
      console.log(res)
    })
  }
}
</script>

<style>

</style>
