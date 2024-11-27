// pages/live/live.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        urls:[
            'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
            'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
            'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        ],
        videos:[],
        info:[{
            name:"直播间1",
            intro:"1区1号楼"
        },{
            name:"直播间2",
            intro:"2区2号楼"
        },{
            name:"直播间3",
            intro:"3区3号楼"
        }],
        index:1,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let videos = this.data.urls.map((url, index) => ({ id: index + 1, url, objectFit:"contain" }));
        this.setData({
            videos,
        })
    },

    // 切换直播间时，同时切换简介
    onChange(e){
        console.log(e.detail.activeId);
        let index = e.detail.activeId-1;
        this.setData({
            index,
        })
    },
    // 点击按钮切换直播间
    switch(){

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