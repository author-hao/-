<template>
    <!-- 首页 精选主题 -->
    <div class="theme">
         <h3><span @click='Return'><i><</i></span> 严选专栏</h3>
      <section class="theme_con">
           <div class="theme_list">
              <div class="theme_list_con">
                  <ul class="list_con">
                  <li>
                      <router-link to=''><img src="../../../static/images/img_04.png" alt=""><span>严选推荐</span></router-link>
                  </li>
                   <li>
                      <router-link to=''><img src="../../../static/images/img_04.png" alt=""><span>严选推荐</span></router-link>
                  </li>
                   <li>
                      <router-link to=''><img src="../../../static/images/img_04.png" alt=""><span>严选推荐</span></router-link>
                  </li>
                   <li>
                      <router-link to=''><img src="../../../static/images/img_04.png" alt=""><span>严选推荐</span></router-link>
                  </li>
                  <li>
                      <router-link to=''><img src="../../../static/images/img_04.png" alt=""><span>严选推荐</span></router-link>
                  </li>
              </ul>
              </div>
            <div class="list_tese">
                <ol>
                    <li>
                        <img src="../../../static/images/img_04.png" alt="">
                        <router-link to=''>
                            <h4>看不够</h4>
                            <p>舌尖上的</p>
                            <span>查看详情</span>
                        </router-link>
                    </li>
                     <li>
                        <img src="../../../static/images/img_04.png" alt="">
                        <router-link to=''>
                            <h4>看不够</h4>
                            <p>舌尖上的</p>
                            <span>查看详情</span>
                        </router-link>
                    </li>
                     <li>
                        <img src="../../../static/images/img_04.png" alt="">
                        <router-link to=''>
                            <h4>看不够</h4>
                            <p>舌尖上的</p>
                            <span>查看详情</span>
                        </router-link>
                    </li>
                </ol>
            </div>
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
