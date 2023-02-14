<template>
  <view class="content">
    <!-- 个人号无法认证，企业账户认证缴费300元 -->
    <button class="mini-btn" type="default" size="mini" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">点击获取手机号码</button>
  </view>
</template>

<script>
import secwx from '@/utils/WXBizDataCrypt'
export default {
  data() {
    return {
      login_code: '',
    }
  },
  onShow(e) {
  },
  onLoad() {
    uni.login({
      success: (res) => {
        // 获取code    
        console.log(JSON.stringify(res));
        this.login_code = res.code;
      }
    });
  },
  methods: {
    getPhoneNumber(e) {
      console.log(e);
      if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
        console.log('用户拒绝提供手机号');
      } else {
        console.log('用户同意提供手机号');

        var encryptedData = e.detail.encryptedData;
        var iv = e.detail.iv;
        const a = ''
        var JSCODE = this.login_code;
        var APPID = "wxa0cddb47" + a + "e0224151"
        var SECRET = "14afcb4796" + a + "ebd52096365b" + a + "2346f469f3"
        var wx_author_url = 'https://api.weixin.qq.com/sns/jscode2session' + '?appid=' + APPID + '&secret=' + SECRET + '&js_code=' + JSCODE + '&grant_type=authorization_code';
        uni.request({
          url: wx_author_url,
          success: (re) => {
            console.log('session_key:' + re.data.session_key);
            var appId = APPID;
            var sessionKey = re.data.session_key;
            var pc = new secwx(appId, sessionKey);
            console.log(pc, encryptedData, 'pcpcpcpcpc');
            var data = pc.decryptData(encryptedData, iv);
            console.log('解密后 data: ', data);
            // 拿到的手机号相关信息都在data中
            // 数据对象：{  countryCode: "86"
            // phoneNumber: "158xxxx5818"
            // purePhoneNumber: "158xxxx5818"
            // watermark:{
            // appid: "wxc294xxxxx6fbc318"
            // timestamp: 1649318087
            //    }
            //  }
            // console.log('解密后 data: ', JSON.stringify(data));  
            console.log('------------------->');

          }
        })
      }
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
