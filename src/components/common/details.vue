<template>
<div class="details">
    <header class="details_title">
        <span @click='Return'><i><</i></span>
    </header>
    <section class="details_warpper">
      <scroller ref="myscroller">
        <div class="details_con">
          <div class="swiper-container banner">
              <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for='(item, i) in imgSrc' :key='i'>
                    <img :src="item.pic" alt="图片加载失败" >
                </li>
            </ul>
             <div class="swiper-pagination"></div>
          </div>

            <div class="details_data">
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
    <footer class="details_commit">
        <ul>
            <li class="iocn">
                  <i class="iconfont icon-kefu"></i>
            </li>
            <li class="iocn">
                <i class="iconfont icon-gouwuche"></i>
                <span>10</span>
            </li>
            <li class="iocn">
                <i class="iconfont icon-kefu"></i>
            </li>
            <li>
                <span>立即购买</span>
            </li>
            <li class="btn">
                <button>加入购物车</button>
            </li>
        </ul>
    </footer>
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
      imgSrc: [],
      deatil_data: {},
      detail_content: '',
      isShow: true
    }
  },
  methods: {
    Return () {
        this.$router.back()
    },
    Show() {
        this.isShow = true
    },
    Hide() {
         this.isShow = false
    }
  },
  mounted () {
     setTimeout(()=>{
         this.$refs.myscroller;
      })
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
      if(data.code === 0) {
          this.imgSrc = data.data.pics // 轮播图
          this.deatil_data = data.data.basicInfo  // 商品名称
          this.detail_content = data.data.content // 商品内容
      }
      console.log(res)
    })
  }
}
</script>

<style>

</style>
