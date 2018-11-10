<template>
    <!-- 首页 精选主题 -->
    <div class="theme">
         <h3><span @click='Return'><i><</i></span> 严选专栏</h3>
      <section class="theme_con">
           <div class="theme_list">
              <ul class="list_con">
                  <li>
                      <router-link to=''><img src="../../../static/images/img_04.png" alt=""><span>严选推荐</span></router-link>
                  </li>
              </ul>
          </div>
      </section>

    </div>
</template>

<script>
export default {
  methods: {
    Return () {
      this.$router.back()
    }
  }
}
</script>

<style>

</style>
