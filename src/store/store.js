import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    scrollY: 0,
    cart_count: 0,
    listData: []
  },
  mutations: {
    changeScrollY (state, num) {
      state.scrollY = num
    },
    setListData (state, item) {
      state.listData.push(item)
      state.cart_count = state.listData.length
      console.log(state.listData)
    }
  }
})

export default Store
