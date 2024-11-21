// pages/home/home.js
Page({
  data: {
    avatarUrl: '../../images/my/user-info/avatar.png'
  },
  changeRange() {
    this.popup.changeRange();
  },
  onAttention() {
    wx.switchTab({
      url: "pages/my/attention/attention"
    })
  },
  onFeekback() {
    wx.switchTab({
      url: "pages/my/feekback/feedback"
    })
  },
  onLoad(options) {
  },
  onReady: function() {
    this.popup = this.selectComponent("#popup");
  },
  onShow() {
  },
  onHide() {
  },
  onUnload() {
  },
  onPullDownRefresh() {
  },
  onReachBottom() {
  },
  onShareAppMessage() {
    console.log("hh")
    return {
      title: "我是你爹"
    }
  }
})