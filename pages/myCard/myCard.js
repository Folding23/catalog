// pages/myCard/myCard.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cards:[{
            img_src:"/img/cat.jpg",
            name:"推荐",
            location:"不在福州大学",
            intro:"已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num:143223
        }],
        delete:true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    // 卡片单独的删除
    clickDel(e){
        wx.showModal({
          title: '确认删除',
          content: '',
          complete: (res) => {
            if (res.confirm) {
              let index = e.currentTarget.dataset.index;
              let arr = this.data.cards;
              arr.splice(index,1);
              this.setData({
                  cards:arr
              })
            }
          }
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})