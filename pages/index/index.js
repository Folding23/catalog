Page({

    "data":{
        style1:"selected",
        style2:"",
        style3:"",
        rank_show:"",
        card1_statu:"",
        card2_statu:"unshow",
        card3_statu:"unshow",
        card4_statu:"unshow",
        new_msg:true,
        rank:["总点赞量","单日点赞量"],
        index:0,
        card1:[{
            img_src:"/img/cat.jpg",
            name:"橘猫",
            location:"不在福州大学",
            intro:"已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num:143223
        },{
            img_src:"/img/cat.jpg",
            name:"暹罗猫",
            location:"不在福州大学",
            intro:"已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num:143223
        },{
            img_src:"/img/cat.jpg",
            name:"橘猫",
            location:"不在福州大学",
            intro:"已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num:143223
        },],
        card2:[{
            img_src:"/img/cat.jpg",
            name:"橘猫",
            location:"不在福州大学",
            intro:"已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num:143223
        },{
            img_src:"/img/cat.jpg",
            name:"暹罗猫",
            location:"不在福州大学",
            intro:"已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num:143223
        },{
            img_src:"/img/cat.jpg",
            name:"橘猫",
            location:"不在福州大学",
            intro:"已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num:143223
        },],
        card3:[{
            img_src:"/img/cat.jpg",
            name:"橘猫",
            location:"不在福州大学",
            intro:"已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num:143223
        },{
            img_src:"/img/cat.jpg",
            name:"暹罗猫",
            location:"不在福州大学",
            intro:"已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num:143223
        },{
            img_src:"/img/cat.jpg",
            name:"橘猫",
            location:"不在福州大学",
            intro:"已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num:143223
        },],
        card4:[{
            img_src:"/img/cat.jpg",
            name:"橘猫",
            location:"不在福州大学",
            intro:"已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num:143223
        },{
            img_src:"/img/cat.jpg",
            name:"暹罗猫",
            location:"不在福州大学",
            intro:"已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num:143223
        },{
            img_src:"/img/cat.jpg",
            name:"橘猫",
            location:"不在福州大学",
            intro:"已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num:143223
        },]
    },
    
    selected1(){
        this.setData({
            style1:"selected",
            style2:"",
            style3:"",
            card1_statu:"",
            card2_statu:"unshow",
            card3_statu:"unshow",
            card4_statu:"unshow",
        })
    },
    selected2(){
        this.setData({
            style1:"",
            style2:"selected",
            style3:"",
            card1_statu:"unshow",
            card2_statu:"",
            card3_statu:"unshow",
            card4_statu:"unshow",
            rank_show:""
        })
    },
    selected3(){
        this.setData({
            style1:"",
            style2:"",
            style3:"selected",
            card1_statu:"unshow",
            card2_statu:"unshow",
            card3_statu:"",
            card4_statu:"unshow",
            rank_show:"unshow"
        })
    }
})

