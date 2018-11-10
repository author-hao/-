<template>
  <div class="newsite">
      <header class="site_title">
          <span @click='Return'><img src="../../../static/images/lefttou.svg" alt=""></span>
          新增地址
      </header>
      <section class="site_con">
          <ul>
              <li>
                  <label for="">联系人</label><input type="text" placeholder="姓名">
              </li>
              <li>
                  <label for="">手机号</label><input type="text" placeholder="11位手机号">
              </li>
              <li>
                  <label for="">选择地区</label>
                  <select name="" id="">
                      <option value="">请选择</option>
                  </select>
                  <select name="" id="">
                      <option value="">请选择</option>
                  </select>
                  <select name="" id="">
                      <option value="">请选择</option>
                  </select>
              </li>
              <li>
                  <label for="">详细地址</label><input type="text" placeholder="街道门牌信息">
              </li>
              <li>
                  <label for="">邮政编码</label><input type="text">
              </li>
          </ul>
          <div class="buttonBtn">
              <button>保存</button>
              <button>取消</button>
          </div>
      </section>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this)
  },
  methods: {
    Return () { // 返回上一页
      this.$router.back()
    }
  }
}
</script>

<style>

</style>
