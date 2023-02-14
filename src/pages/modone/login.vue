<template>
  <view>
    <button class="mini-btn" type="default" size="mini" @click="loginTomi">点击登录，自动获取微信登录</button>
   
  </view>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {}
    }
  },
  methods: {
    loginTomi() {

      uni.getUserProfile({
        lang: 'Weixin',
        desc: '获取用户信息',
        success: (res) => {
          console.log(res.userInfo, this.$store, 'getUserProfile');
          this.userInfo = { ...res.userInfo }
          this.$store.commit('setuserInfo', this.userInfo)
          uni.switchTab({
            url: 'index',
            animationType: 'slide-in-left',
            animationDuration: 200
          })
        },
        fail: err => {
          console.log(err, 'err')
        }
      });
    }
  }
}
</script>