import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/goods/index'
import List from '@/components/center/list'
import Theme from '@/components/center/theme'
import Classification from '@/views/sort/classification'
import Cart from '@/views/shopping/cart'
import PersonalData from '@/views/bio/personalData'
import Details from '@/components/common/details'

import Signin from '@/components/modelu/signin'
import ConfirmOrder from '@/components/order/confirm_order'
import ClassifyDetail from '@/components/classify/classifyDetail'
import Newsite from '@/components/order/newsite'
import OrdersList from '@/components/order/orderslist'
import Staypayment from '@/components/order/list_detail/staypayment'
import Staysend from '@/components/order/list_detail/staysend'
import Staygoods from '@/components/order/list_detail/staygoods'
import Stayevaluate from '@/components/order/list_detail/stayevaluate'
import Hascompleted from '@/components/order/list_detail/hascompleted'
import Bargain from '@/components/modelu/bargain'
import Biobalance from '@/components/bio_resources/bio_balance'
import BioSite from '@/components/bio_resources/bio_site'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/list',
      children: [
        {
          path: '/list', // 首页列表

          component: List
        },
        {
          path: '/classification', // 分类
          component: Classification
        },
        {
          path: '/cart', // 购物车
          component: Cart
        },
        {
          path: '/personal', // 个人中心
          component: PersonalData
        }
      ]
    },
    {
      path: '/theme', // 精选主题
      component: Theme
    },
    {
      path: '/details/:id?', // 商品详情页
      component: Details
    },
    {
      path: '/signin', // 签到页
      component: Signin
    },
    {
      path: '/confirm', // 确认订单页
      component: ConfirmOrder
    },
    {
      path: '/newsite', // 新增地址
      component: Newsite
    },
    {
      path: '/orderslist', // 订单列表
      component: OrdersList,
      redirect: '/orderslist/staypayment',
      children: [
        {
          path: '/orderslist/staypayment', // 待付款
          component: Staypayment
        },
        {
          path: '/orderslist/staysend', // 待发货
          component: Staysend
        },
        {
          path: '/orderslist/staygoods', // 待收货
          component: Staygoods
        },
        {
          path: '/orderslist/stayevaluate', // 待评价
          component: Stayevaluate
        },
        {
          path: '/orderslist/hascompleted', // 已完成
          component: Hascompleted
        }
      ]
    },
    {
      path: '/classifyDetail/:id?', // 分类详情
      component: ClassifyDetail
    },
    {
      path: '/bargain', // 砍价列表
      component: Bargain
    },
    {
      path: '/balance', // 余额
      component: Biobalance
    },
    {
      path: '/site', // 地址
      component: BioSite
    }
  ]
})