<template>
  <div class="footer">
      <ul>
          <li>
              <router-link exact to='/list' ><i class="iconfont icon-shouye"></i>
              <span>首页</span></router-link>
          </li>
          <li>
            <router-link to='/classification'><i class='iconfont icon-guizi'></i>
              <span>分类</span></router-link>
          </li>
          <li>
             <router-link to='/cart'> <i class="iconfont icon-gouwuche"></i>
             <span>购物车 </span></router-link>
             <strong>2</strong>
          </li>
          <li>
              <router-link to='/personal'><i class="iconfont icon-geren"></i>
              <span>个人</span></router-link>
          </li>
      </ul>
  </div>
</template>

<script>
import '@/assets/font/iconfont.css'
export default {

}
</script>

<style lang="scss" scoped>
@function rem($px) {
  @return $px / 67.5 + rem;
}
  .footer {
      width: 100%;
      height:rem(143);
      border-top: 1px solid rgb(226, 223, 223);
      background: #fff;
      z-index: 999;
  }
  .footer ul {
      display: flex;
      list-style: none;
  }
  .footer ul li {
      width: 25%;
      font-size:rem(18);
      text-align: center;
      position: relative;
      padding-top:rem(19);
  }
  .footer ul li a {
       color: #7d7d7d;
  }
  .footer ul li strong {
      position: absolute;
      right:rem(48);
      top: rem(15);
      width: rem(52);
      height: rem(52);
      line-height: rem(52);
      text-align: center;
      border-radius: 50%;
      background: #ff383e;
      color: #ffebe8;
  }
  .footer ul li a i {
      display: block;
      font-size: rem(63);
      padding-bottom:rem(5);
  }
  .footer ul li a span {
      font-size: rem(25);
  }
  .footer ul li .router-link-active {
      color: #a42a2a;
      text-decoration: none;
  }
</style>
