Page({
    "data":{
        style1:"selected",
        style2:"",
        style3:"",
        rank_show:"",
        showing:"cards",// totalrank,dailyrank,time,recent,search
        new_msg:true,
        rank:["总点赞量","单日点赞量"],
        follow:["关注时间","最近更新"],
        index:0,
        show_H:false,
        search_history:["猫A"],
        // search_history:["猫A","cat_B","cat_c","猫A","cat_B","cat_c","猫A","cat_B","cat_c"],
        cards:[{
            img_src:"/img/cat.jpg",
            name:"推荐",
            location:"不在福州大学",
            intro:"已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num:143223
        }],
        totalrank:[{
            img_src:"/img/cat.jpg",
            name:"totalran",
            location:"不在福州大学",
            intro:"已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num:143223
        }],
        dailyrank:[{
            img_src:"/img/cat.jpg",
            name:"daily",
            location:"不在福州大学",
            intro:"已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num:143223
        }],
        time:[{
            img_src:"/img/cat.jpg",
            name:"time",
            location:"不在福州大学",
            intro:"已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num:143223
        }],
        recent:[{
            img_src:"/img/cat.jpg",
            name:"recent",
            location:"不在福州大学",
            intro:"已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num:143223
        }],
        search_result:[{
            img_src:"/img/cat.jpg",
            name:"search",
            location:"不在福州大学",
            intro:"已绝育，未领养，性格温和，白天喜欢睡觉",
            like_num:143223
        }],
        key_word:"",
        this_card:{},
    },
    
    // 点击显示推荐
    selected1(){
        this.setData({
            style1:"selected",
            style2:"",
            style3:"",
            showing:"cards"
        })
    },
    // 点击显示点赞排名
    selected2(){
        this.setData({
            style1:"",
            style2:"selected",
            style3:"",
        })
    },
    // 点击显示我的关注
    selected3(){
        this.setData({
            style1:"",
            style2:"",
            style3:"selected",
        })
    },
    // 搜索栏获得焦点时，显示搜索历史
    showHistory(){
        this.setData({
            show_H:true,
        })
    },
    // 失焦关闭搜索历史
    hideHistory(){
        this.setData({
            show_H:false,
        })
    },
    // 点击搜索历史，可以直接出现在搜索文本框里
    useHistory(e){
        let history_index = e.currentTarget.dataset.index;
        let key_word = this.data.search_history[history_index];
        this.setData({
            key_word,
        })
    },
    // 选择总点赞量或单日点赞量排行榜
    totalOrDaily(e){
        console.log(e.detail.value);
        let index = e.detail.value;
        if(index == 1){
            this.setData({
                showing:"dailyrank",
            })
        }else{
            this.setData({
                showing:"totalrank",
            })
        }
    },
    // 根据关注时间或最近更新
    timeOrRecent(e){
        console.log(e.detail.value);
        let index = e.detail.value;
        if(index == 1){
            this.setData({
                showing:"recent",
            })
        }else{
            this.setData({
                showing:"time",
            })
        }
    },
    clickCards(e){
        let index = e.currentTarget.dataset.index;
        let this_card = this.data.cards[index];
        this.setData({
            this_card,
        })
        console.log(this.data.this_card);
    },
    clickTotal(e){
        let index = e.currentTarget.dataset.index;
        let this_card = this.data.totalrank[index];
        this.setData({
            this_card,
        })
        console.log(this.data.this_card);
    },
    clickDaily(e){
        let index = e.currentTarget.dataset.index;
        let this_card = this.data.dailyrank[index];
        this.setData({
            this_card,
        })
        console.log(this.data.this_card);
    },
    clickTime(e){
        let index = e.currentTarget.dataset.index;
        let this_card = this.data.time[index];
        this.setData({
            this_card,
        })
        console.log(this.data.this_card);
    },
    clickRecent(e){
        let index = e.currentTarget.dataset.index;
        let this_card = this.data.recent[index];
        this.setData({
            this_card,
        })
        console.log(this.data.this_card);
    },
    clickSearchResult(e){
        let index = e.currentTarget.dataset.index;
        let this_card = this.data.search_result[index];
        this.setData({
            this_card,
        })
        console.log(this.data.this_card);
    }
})

