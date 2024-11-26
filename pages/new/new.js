// pages/new/new.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        multiArray: [['教学区', '生活区'], ['西三教学楼', '西二教学楼', '西一教学楼', '中楼', '东三教学楼'], ['一楼', '二楼','三楼']],
        multiIndex: [0, 0, 0],
        img_src:"",
    },
    

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        
        this.shot()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    bindMultiPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          multiIndex: e.detail.value
        })
    },

    bindMultiPickerColumnChange: function (e) {
        console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
        var data = {
          multiArray: this.data.multiArray,
          multiIndex: this.data.multiIndex
        };
        data.multiIndex[e.detail.column] = e.detail.value;
        switch (e.detail.column) {
          case 0:
            switch (data.multiIndex[0]) {
              case 0:
                data.multiArray[1] = ['西三教学楼', '西二教学楼', '西一教学楼', '中楼', '东三教学楼'];
                data.multiArray[2] = ['一楼', '二楼','三楼'];
                break;
              case 1:
                data.multiArray[1] = ['一区', '二区', '三区'];
                data.multiArray[2] = ['宿舍楼', '食堂'];
                break;
            }
            data.multiIndex[1] = 0;
            data.multiIndex[2] = 0;
            break;
          case 1:
            switch (data.multiIndex[0]) {
              case 0:
                switch (data.multiIndex[1]) {
                  case 0:
                    data.multiArray[2] = ['一楼', '二楼','三楼'];
                    break;
                  case 1:
                    data.multiArray[2] = ['一楼', '二楼','三楼'];
                    break;
                  case 2:
                    data.multiArray[2] = ['一楼', '二楼','三楼'];
                    break;
                  case 3:
                    data.multiArray[2] = ['一楼', '二楼','三楼'];
                    break;
                  case 4:
                    data.multiArray[2] = ['一楼', '二楼','三楼'];
                    break;
                }
                break;
              case 1:
                switch (data.multiIndex[1]) {
                  case 0:
                    data.multiArray[2] = ['宿舍楼', '食堂'];
                    break;
                  case 1:
                    data.multiArray[2] = ['宿舍楼', '食堂'];
                    break;
                  case 2:
                    data.multiArray[2] = ['宿舍楼', '食堂'];
                    break;
                }
                break;
            }
            data.multiIndex[2] = 0;
            console.log(data.multiIndex);
            break;
        }
        this.setData(data);
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

    },
    shot() {
        
        const ctx = wx.createCameraContext()
        console.log("hhh")
        ctx.takePhoto({
            quality: 'high',
            success:(res) => {
                console.log('sucess !!!!!')
                console.log(res)
            },
            fail: (res)=> {
                console.log("fail!!!")
            }
        })
        console.log("hhh")
    }
})