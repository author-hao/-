<template>
  <div class="bio_site">
        <!-- 地址 -->
        <header class='site_title'>
               <span @click="Return"><</span>
           地址详情
        </header>
      <section class="site_list">
          <div class="site_con">

          </div>
      </section>
      <footer class="set_site">
          <div>
              + 新增地址
          </div>
      </footer>
  </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: {
        Return () {
            this.$router.back()
        }
    }
}
</script>

<style>

</style>
