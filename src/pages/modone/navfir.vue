<template>
  <view class="content">
    <button type="default" @click="$ut.navigateBack(2)" class="uni-share-button">返回</button>

    <button type="primary" @tap="doss">点击签名</button>
    <image class="img" :src="imgsrc" mode="widthFix"></image>
    <catSignature canvasId="canvas1" @close="close" @save="save" :visible="isShow" />
  </view>
</template>

<script>
import catSignature from "@/components/cat-signature/cat-signature.vue"

export default {
  components: { catSignature },
  data() {
    return {
      list: {},
      isShow: false,
      imgsrc: null
    }
  },
  onLoad(e) {
    this.list = e
  },
  methods: {

    doss() {
      this.isShow = true
    },
    save(val) {
      this.isShow = false;
      console.log(val, '保存的签名图片');
      this.imgsrc = val
    },
  }
}
</script>

<style  lang="scss">

</style>
