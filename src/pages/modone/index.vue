<template>
  <view class="content">
    <!-- <image mode="aspectFit" src="https://s1.ax1x.com/2023/02/03/pSsn6jx.jpg"></image> -->
    <button class="mini-btn" type="default" size="mini" @click="loginTomi">点击跳转签名页面</button>
    <button type="default" @click="$ut.navigateBack(2)" class="mini-btn" size="mini">返回</button>
    <br>
    <button class="mini-btn" type="default" size="mini" open-type="share">转发分享小程序</button>
    <br>
    <button class="mini-btn" type="default" size="mini" open-type="contact">打开客服会话</button>
    <br>
    <button class="mini-btn" type="default" size="mini" @click="clickToShare">点击分享</button>
    <br>
  </view>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  onShow(e) {
    let pages = getCurrentPages();
    let currPage = pages[pages.length - 1];
    console.log(currPage.data.gender, currPage, 'currPage');
    if (currPage.data.gender == undefined) {
      console.log(currPage.data.select_data);//接收的数据
    }

  },
  onLoad() {
  },
  methods: {
    loginTomi(e) {
      var formdata = e.detail.value
      const url_ = []
      for (let key in formdata) {
        url_.push(`${key}=${formdata[key]}`)
      }
      // 跳转到navfir页面
      uni.navigateTo({
        url: `navfir?${url_.join('&')}`,
        animationType: 'slide-in-left',
        animationDuration: 200
      })
    },
    getValue(list) {
      console.log(list, 'navfir页面传递的数据')
    },
    clickToShare() {
      uni.share({
        provider: "weixin",
        scene: "WXSceneSession",
        type: 1,
        summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
        success: function (res) {
          console.log("success:" + JSON.stringify(res));
        },
        fail: function (err) {
          console.log("fail:" + JSON.stringify(err));
        }
      });
    }
  }
}
</script>

<style  lang="scss">
.content {
  padding: 20rpx;

  .uni-form-item .title {
    padding: 20rpx 0;
  }

  .uni-column {
    font-size: 32rpx;
  }
}
</style>
