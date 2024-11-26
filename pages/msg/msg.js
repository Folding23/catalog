// pages/msg/msg.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        unread_num:2,
        msgs:[{
            content:"您提交的卡片审核结果",
            read:false
        },{
            content:"您提交的卡片审核结果",
            read:false
        },{
            content:"您提交的卡片审核结果",
            read:true
        },{
            content:"您提交的卡片审核结果",
            read:true
        },]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    // 点击删除消息
    clickDel(e){
        wx.showModal({
          title: '确认删除',
          content: '',
          complete: (res) => {
            if (res.confirm) {
                let index = e.currentTarget.dataset.index;
                let arr = this.data.msgs;
                arr.splice(index,1);
                this.setData({
                    msgs:arr
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