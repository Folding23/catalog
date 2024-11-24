// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        img_src:"/img/cat.jpg",
        name:"暹罗猫",
        location:"不在福州大学",
        intro:"一大堆简介一大堆简介一大堆简介一大堆简介一大堆简介一大堆简介一大堆简介一大堆简介一大堆简介一大堆简介一大堆简介",
        photos:[
            {
                month:"12月",
                photo:[
                    "/img/cat2.jpg",
                    "/img/cat3.jpg",
                    "/img/cat4.jpg",
                    "/img/cat5.jpg",
                    "/img/cat.jpg",
                    "/img/cat.jpg",
                    "/img/cat.jpg",
                ]
            },{
                month:"11月",
                photo:[
                    "/img/cat.jpg",
                    "/img/cat.jpg",
                    "/img/cat.jpg",
                    "/img/cat.jpg",
                    "/img/cat.jpg",
                ]
            },{
                month:"10月",
                photo:[
                    "/img/cat.jpg",
                    "/img/cat.jpg",
                ]
            },
        ],
        showing_photo:"/img/cat.jpg",
        display:"none"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    // 点击图片，显示大图
    tapPhoto(e){
        console.log();
        let src = e.currentTarget.dataset.photosrc;
        this.setData({
            showing_photo:src,
            display:"",
        })
    },
    // 点击大图，关闭显示
    clickClose(){
        this.setData({
            display:"none",
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