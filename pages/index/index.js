import { authGate } from '../../utils/utils.js'

Page({
    "data": {
        style1: "selected",
        style2: "",
        style3: "",
        rank_show: "",
        card1_statu: "",
        card2_statu: "unshow",
        card3_statu: "unshow",
        card4_statu: "unshow",
        new_msg: true,
        cards: [{
            img_src: "/img/cat.jpg",
            name: "橘猫",
            location: "不在福州大学",
            intro: "已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num: 143223
        }, {
            img_src: "/img/cat.jpg",
            name: "暹罗猫",
            location: "不在福州大学",
            intro: "已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num: 143223
        }],
        totolrank: [
            {
                img_src: "/img/cat.jpg",
                name: "橘猫",
                location: "不在福州大学",
                intro: "已绝育，未领养，性格温和，白天喜欢睡觉",
                like_num: 143223
            }, {
                img_src: "/img/cat.jpg",
                name: "暹罗猫",
                location: "不在福州大学",
                intro: "已绝育，未领养，性格温和，白天喜欢睡觉",
                like_num: 143223
            }
        ],
        dailyrank: [{
            img_src: "/img/cat.jpg",
            name: "橘猫",
            location: "不在福州大学",
            intro: "已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num: 143223
        }, {
            img_src: "/img/cat.jpg",
            name: "暹罗猫",
            location: "不在福州大学",
            intro: "已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num: 143223
        }],
        follower: [{
            img_src: "/img/cat.jpg",
            name: "橘猫",
            location: "不在福州大学",
            intro: "已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num: 143223
        }, {
            img_src: "/img/cat.jpg",
            name: "暹罗猫",
            location: "不在福州大学",
            intro: "已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num: 143223
        }],
        offset: 0,
        loading: false
    },

    selected1() {
        this.setData({
            style1: "selected",
            style2: "",
            style3: "",
            card1_statu: "",
            card2_statu: "unshow",
            card3_statu: "unshow",
            card4_statu: "unshow",
        })
    },
    selected2() {
        this.setData({
            style1: "",
            style2: "selected",
            style3: "",
            card1_statu: "unshow",
            card2_statu: "",
            card3_statu: "unshow",
            card4_statu: "unshow",
            rank_show: ""
        })
    },
    selected3() {
        this.setData({
            style1: "",
            style2: "",
            style3: "selected",
            card1_statu: "unshow",
            card2_statu: "unshow",
            card3_statu: "",
            card4_statu: "unshow",
            rank_show: "unshow"
        })
    },
    Login() {
        wx.login({
            success: (res) => {
                console.log(res)
                wx.request({
                    url: authGate.data.ip + "/user/login",
                    method: "POST",
                    header: {
                        "Content-Type": "application/json",
                    },
                    data: {
                        "code": res.code
                    },
                    success: (res) => {
                        console.log("登入成功:")
                        console.log(res)
                        authGate.SetToken(res.data)
                    },
                    fail: (res) => {
                        console.log("request 失败:")
                        console.log(res)
                    }
                })
            },
            fail: (res) => {
                console.log("登入失败:")
                console.log(res)
            }
        })
    },
    GetCard() {
        wx.showLoading({
            title: '加载中',
        })
        this.setData({
            loading: true
        })
        this.onLocation().then((res) => {
            const value = res; // 在这里获取到位置信息

            const num = 10;
            wx.request({
                url: authGate.data.ip + "/user/home",
                method: "GET",
                header: {
                    "Authorization": authGate.GetToken()
                },
                data: {
                    "num": num,
                    "offset": this.data.offset,
                    "longitude": value.first, // 使用获取到的值
                    "latitude": value.second   // 使用获取到的值
                },
                success: (res) => {
                    console.log(res);
                    this.setData({
                        cards: this.data.cards + res.data,
                        offset: this.data.offset + num
                    });
                },
                fail: (res) => {
                    console.log("request 失败:");
                    console.log(res);
                },
                complete: () => {
                    wx.hideLoading();
                    this.setData({
                        loading: false
                    });
                }
            });
        }).catch((error) => {
            console.log(error);
        });
    },
    onLoad() {
        // this.Login()
        // this.GetCard()
    },
    onsearch() {

        wx.request({
            url: authGate.data.ip + "/card",
            method: "POST",
            data: {
                token: authGate.GetToken()
            },
            success: (res) => {
                console.log(res)
                this.setData({
                    cards: res.data
                })
            },
            fail: (res) => {
                console.log("request 失败:")
                console.log(res)
            }
        })
    },
    onLocation() {
        return new Promise((resolve, reject) => {
            wx.getLocation({
                type: "wgs84",
                success: (res) => {
                    resolve({
                        first: res.latitude,
                        second: res.longitude
                    })
                },
                fail: (error) => {
                    reject(error)
                }

            })
        })
    },
    onReachBottom: function () {
        if (this.data.loading) {
            return
        }
        this.GetCard()
    },
    onGetTotalRank() {
        wx.request({
            url: authGate.data.ip + "/user/total_ranklist",
            method: "GET",
            header: {
                "Authorization": authGate.GetToken()
            },
            success: (res) => {
                this.setData({
                    totolrank: this.data.totolrank + res.data
                })
            },
            fail: (res) => {
                console.log("request 失败:")
                console.log(res)
            }
        })
    },
    onGetDailyRank() {
        wx.request({
            url: authGate.data.ip + "/user/daily_ranklist",
            method: "GET",
            header: {
                "Authorization": authGate.GetToken()
            },
            success: (res) => {
                this.setData({
                    dailyrank: this.data.dailyrank + res.data
                })
            },
            fail: (res) => {
                console.log("request 失败:")
                console.log(res)
            }
        })
    },
    onGetRank() {
        wx.loading({
            title: '加载中',
        })
        this.onGetTotalRank()
        this.onGetDailyRank()
        wx.hideLoading()
    }
})
