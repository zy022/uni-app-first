<template>
  <view class="content">
    <view class="coninfo">
      <image :src="userInfo.avatarUrl" class="conimage"></image>
      <text>{{ userInfo.nickName }}</text>
      <br>
      <text>您是{{ userInfo.gender == 1 ? '男生' : '女生' }}</text>
    </view>
    <view class="add-item" @tap="uploadPic()">
      <view class="add-word">添加图片</view>
    </view>
    <view class="display_box" v-for="(item, index) in imgList" :key="index">
      <view class="new-del" @tap.stop="delePic(item, index)">X</view>
      <view class="uploader_photo" @tap.stop="previewImage(item, index)">
        <image class="uploader_img" :src="item.src" mode="aspectFit" />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
      imgList: [],
      userInfo: {}
    }
  },
  onLoad() {
  },
  onShow() {
    this.userInfo = this.$store.state.userInfo
  },
  methods: {
    uploadPic() {
      uni.chooseImage({
        count: 6, //默认9
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], //从相册或者是手机拍照上传选择
        success: (res) => {
          this.imgList.push({ src: res.tempFilePaths[0] })
          uni.showToast({
            title: '上传成功',
            icon: 'none',
            duration: 3000
          })
        }
      });
    },
    delePic(item, index) {
      uni.showModal({
        title: '删除提示',
        content: '确定要删除该图片吗？',
        success: (res) => {
          if (res.confirm) {
            this.imgList.splice(index, 1)
            uni.showToast({
              title: '删除成功',
              icon: 'none',
              duration: 3000,
            })
          } else {
            uni.showToast({
              title: '取消删除',
              icon: 'none',
              duration: 3000,
            })
          }
        }
      })

    },
    // 预览
    previewImage(item, index) {
      console.log(this.imgList[index].src, index);
      uni.previewImage({
        current: index, // 当前显示图片的下标
        urls: [item.src]// 需要预览的图片http链接
      })
    }
  }
}
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  // 上传图片
  .add-item {
    display: inline-block;
    width: 156rpx;
    height: 46rpx;
    text-align: center;
    vertical-align: top;
    border: 2rpx dashed #d2d1da;
    margin-right: 20rpx;
    margin-top: 20rpx;
    background-color: #fff;
    border-radius: 8rpx;
  }

  .display_box {
    display: inline-block;
    position: relative;
    margin-right: 40rpx;
  }

  .new-del {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    width: 40rpx;
    height: 40rpx;
    background-color: #707f8a;
    border-radius: 100%;
    font-size: 28rpx;
    color: #fff;
    text-align: center;
    line-height: 40rpx;
  }

  .uploader_photo {
    width: 160rpx;
    height: 160rpx;
    background-color: #fff;
    border-radius: 8rpx;

    .uploader_img {
      width: 100%;
      height: 100%;
    }
  }

  .coninfo {
    width: 100vw;
    height: 200rpx;
    box-shadow: 3rpx 3rpx 3rpx #707f8a;
    display: flex;

    .conimage {
      width: 150rpx;
      height: 150rpx;
    }
  }
}
</style>
