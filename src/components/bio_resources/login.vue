<template>
    <!-- 登录 -->
    <div class="login">
        <h2><span @click="Return" ><</span> 登录</h2>
        <div>
              <label for="">用户名：</label>
              <input type="text" v-model='user' placeholder="用户名"><br>
              <label for="">密码：</label>
              <input type="password" v-model='pass' placeholder="请输入密码">
              <button @click='login_in'>登录</button>
        </div>

    </div>
</template>

<script>
export default {
  data () {
    return {
      user: '',
      pass: ''
    }
  },
  methods: {
    login_in () {
      this.$http.post('/api/user/m/login', {
        mobile: '1111',
        user: this.user,
        pwd: this.pass
      }).then(res => {
        let { data } = res
        console.log(data)
      })
    },
    Return () {
        this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
@function rem($px) {
  @return $px / 67.5 + rem;
}

  .login {
      width: 100%;
      height: 100%;
      padding: rem(40);
      h2 {
          width: 100%;
          text-align: center;
          line-height: rem(120);
          font-size: rem(50);
          position: relative;
          span {
              position: absolute;
              left: rem(20);
              top: rem(17);
              display: block;
              width: rem(80);
              height: rem(80);
              border-radius: 50%;
              border: 1px solid #ccc;
              line-height: rem(80);
              font-size: rem(60);
          }
      }
      div {
          margin-top: rem(50);
          font-size: rem(40);
          label {
              display: inline-block;
              margin-top: rem(50);
              width:rem(200);
          }
          input {
              width: 70%;
              height: rem(100);
              border: 1px solid #333;
              outline: none;
              padding-left: rem(30);
              border-radius: rem(10);
          }
          button {
              display: block;
              width: 50%;
              height: rem(90);
              margin: rem(50) auto;
              background: blue;
              color: #fff;
              border:0;
              outline: none;
              border-radius: rem(10);
          }
      }
  }
</style>
