<template>
  <div class="swiper-container banner">
        <div class="swiper-wrapper">
            <div v-for='(item, i) in banner_list' :key='i' class="swiper-slide">
                <router-link :to="'/details/'+item.id">
                  <img :src='item.picUrl' alt="图片加载失败">
                </router-link>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->

        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  data () {
    return {
      banner_list: []
    }
  },
  mounted () {
    // console.log(global.data.api)
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
      // 如果需要前进后退按钮
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev'
      // }
      // 如果需要滚动条
      // scrollbar: {
      //   el: '.swiper-scrollbar'
      // }
    })
    // console.log(mySwiper.$el.length)
    this.$http.get('/api/banner/list').then(res => {
      let { data } = res
      if (data.code === 0) {
        this.banner_list = data.data
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@function rem($px) {
  @return $px / 46.875 + rem;
}
  .swiper-container {
      width: 100%;
      margin: 0;
          .swiper-wrapper {
                  width: 100%;
                  padding: 0;
                  margin: 0;
              .swiper-slide {
                  width: 100%;
                  margin: 0;
                 a > img {
                      width: 100%;
                      height: rem(400);
                      margin: 0;
                      padding: 0;
                  }
              }
          }
           .swiper-pagination-bullets {
              bottom: rem(40);
          }
      }

</style>
