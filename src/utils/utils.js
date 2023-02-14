export default {
  navigateBack(idx) {
    // 1. 获取当前页面栈实例（此时最后一个元素为当前页）
    let pages = getCurrentPages()
    // 2. 上一页面实例
    // 注意是length长度，所以要想得到上一页面的实例需要 -2
    // 若要返回上上页面的实例就 -3，以此类推
    let prevPage = pages[pages.length - idx]
    // 3. 给上一页面实例绑定getValue()方法和参数（注意是$vm）
    // prevPage.$vm.getValue(this.list)
    // prevPage.$vm.gender = 1;   //修改上一页data里面的searchVal参数值为1211
    // prevPage.setData({
    //   gender: 1
    // })
    // 4. 返回上一页面
    uni.navigateBack({
      delta: 1 // 返回的页面数,可以不写，默认是1 
    })
  },

}