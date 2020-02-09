<template>
    <div id="app">
        <div class="topbar">
            <div class="container">
                <div class="topbar-nav">
                    <a href="">小米商城</a>
                    <span>|</span>
                    <a href="">MIUI</a>
                    <span>|</span>
                    <a href="">IoT</a>
                    <span>|</span>
                    <a href="">云服务</a>
                    <span>|</span>
                    <a href="">金融</a>
                    <span>|</span>
                    <a href="">有品</a>
                    <span>|</span>
                    <a href="">小爱开放平台</a>
                    <span>|</span>
                    <a href="">政企服务</a>
                    <span>|</span>
                    <a href="">Select Region</a>
                </div>
                <div class="topbar-cart"><a href=""><i class="iconfont">&#xe63b;</i>购物车（0）</a></div>
                <div class="topbar-info clear-fixed">
                    <a href=""> 登录</a>
                    <span>|</span>
                    <a href=""> 注册</a>
                    <span>|</span>
                    <a href="" class="sep"> 消息通知</a>
                </div>
            </div>
        </div>
    
        <div class="header">
            <div class="container">
                <div class="header-log">
                    <a href="" class="lr">小米商城</a>
                </div>
                <div class="header-nav">
                    <ul class="nav-list clear-fixed">
                        <li class="nav-category"><a href="">全部商品分类</a></li>
                        <li class="nav-item"><a href="">小米手机</a></li>
                        <li class="nav-item"><a href="">红米</a></li>
                        <li class="nav-item"><a href="">电视</a></li>
                        <li class="nav-item"><a href="">笔记本</a></li>
                        <li class="nav-item"><a href="">空调</a></li>
                        <li class="nav-item"><a href="">新品</a></li>
                        <li class="nav-item"><a href="">路由器</a></li>
                        <li class="nav-item"><a href="">智能硬件</a></li>
                        <li class="nav-item"><a href="">服务</a></li>
                        <li class="nav-item"><a href="">社区</a></li>
                    </ul>
                </div>
                <div class="header-search">
                    <form action="" class="search-form">
                        <input type="search" name="keyword" class="search-text" placeholder="&#xe63b;">
                        <!-- <input type="submit" value="&#xe63c;" class="search-btn iconfont"> -->
                        <a class="search-btn iconfont">&#xe63c;</a>
                    </form>
                </div>
            </div>
        </div>
        <div class="seckill">
            <div class="seckill-head"></div>
            <div class="container">
                <div class="seckill-nav " id="scro">
                    <ul id="tabs">
                        <li :class="{active:selectTime==item}"
                            v-for="item in timesList"
                            v-bind:key="item"
                            @click="timeSelect(item)">
                            <em>{{item}}</em>
                            <span>
                                <em class="specail">{{tagTitle}}<br>
                                    <a v-if="nextTime==item">{{tagSubtitle}} {{timeLeft}}</a>
                                </em>
                            </span>
                        </li>

                        <!-- <li class=""><em>20:00</em><span>即将开始</span></li>
                        <li class=""><em>22:00</em><span>即将开始</span></li> -->

                        <!-- <li class=""><em>00:00</em><span>即将开始</span></li>
                        <li class=""><em>08:00</em><span>即将开始</span></li> -->
                    </ul>
                </div>
                <div class="seckill-goods" id="uls">
                    <ul class="clear-fixed active">
                        <li v-for="item in shownList" v-bind:key="item.id">
                            <Item :itemInfo="item"/>
                        </li>
                    </ul>
                    <p class="seckill-notice">*小米闪购活动规则：小米闪购商品不享受该商品在小米商城的其他优惠政策（包括但不限于优惠券、赠品、满减、满赠等）<br> 温馨提示：因可能存在系统缓存、页面更新导致价格变动异常等不确定性情况出现，如您发现活动商品标价或促销信息有异常，请您立即联系小米客服，以便我们及时补正。
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Item from './components/Item.vue'
import axios from 'axios'
import Vue from 'vue'

Vue.prototype.$http = axios;

export default {
    name: 'app',
    components: {
        Item
    },
    data() {
        return {
            goodsList: Array,
            timesList: Array,
            selectTime: "",
            nextTime: "",
            timeLeft: "",
            tagTitle: "即将开始",
            tagSubtitle: "距开始"
        }
    },
    methods: {
        timeSelect: function(time) {
            this.selectTime = time;
        }
    },
    computed: {
        shownList() {
            return [].filter.call(this.goodsList, ((item) => {
                return item.startTime == this.selectTime;
            }))
        }
    },
    mounted() {
        this.$http.get('./goods.json').then((response) => {
            // console.log(response.data);
            this.timesList = response.data.goods.map((item) => {
              return item.startTime;
            });
            this.timesList = [...new Set(this.timesList)];
            this.timesList.sort();
            let date = new Date();
            let i;
            for(i=0; i<this.timesList.length; i++) {
                let tagTime = parseInt(this.timesList[i].split(":").join(""));
                let nowTime = parseInt(date.getHours().toString() + date.getMinutes().toString().padStart(2, "0"));
                // console.log(tagTime +"-" +nowTime)
                if(tagTime - nowTime > 0) break;
            }
            // console.log(i)
            this.timesList = [].concat(this.timesList.splice(i),this.timesList.splice(0,i));
            this.selectTime = this.nextTime = this.timesList[0];
            
            
            // this.goodsList = response.data.goods.filter((item) => {
            //     return item.selectTime == this.selectTime;
            // });
            this.goodsList = response.data.goods;

        });

        let currentDate, nextDate;
        let nextTimeHour, nextTimeMinute;
        let diffSeconds, leftHours, leftMinutes, leftSeconds;
        setInterval(() => {
            this.currentDate = new Date();
            this.nextDate = new Date();
            this.nextTimeHour = parseInt(this.nextTime.split(":")[0]);
            this.nextTimeMinute = parseInt(this.nextTime.split(":")[1]);
            this.nextDate.setHours(this.nextTimeHour);
            this.nextDate.setMinutes(this.nextTimeMinute);
            this.nextDate.setSeconds(0);
            if (this.nextTimeHour == 0) this.nextDate.setTime(this.nextDate.getTime()+24*60*60*1000);
            // console.log(this.nextDate)
            // console.log(this.currentDate)
            this.diffSeconds = Math.abs((this.nextDate.getTime() - this.currentDate.getTime()) / 1000);
            // console.log(this.diffSeconds)
            if (this.diffSeconds < 0 && this.diffSeconds > -(90*60)) {
                this.diffSeconds = -this.diffSeconds;
                this.tagTitle = "抢购中";
                this.tagSubtitle = "距结束";
            } else if (this.diffSeconds < -(90*60)) {
                this.tagTitle = "抢购结束";
                if (this.timesList.indexOf(this.nextTime) < this.timesList.length - 1) {
                    this.nextTime = this.timesList[this.timesList.indexOf(this.nextTime)+1]
                }
            } else {
                this.tagTitle = "即将开始";
                this.tagSubtitle = "距开始";
                // console.log("else")
            }
            this.leftHours = (Math.floor(this.diffSeconds / (60*60))).toString().padStart(2, "0");
            this.leftMinutes = (Math.floor(this.diffSeconds % (60*60) / 60)).toString().padStart(2, "0");
            this.leftSeconds = (Math.floor(this.diffSeconds % (60*60) % 60)).toString().padStart(2, "0");
            this.timeLeft = `${this.leftHours}:${this.leftMinutes}:${this.leftSeconds}`;
            // console.log(this.leftHours)

        }, 1000)


        // let currentDate, leftHours, leftMinutes, leftSeconds;
        // let nextTimeHour, nextTimeMinute;
        // window.setInterval(() => {
        //     this.nextTimeHour = parseInt(this.nextTime.split(":")[0]);
        //     this.nextTimeMinute = parseInt(this.nextTime.split(":")[1]);
        //     if(this.nextTimeHour == 0) this.nextTimeHour = 24;
        //     this.currentDate = new Date();
        //     this.leftHours = this.nextTimeHour - this.currentDate.getHours();
        //     this.leftMinutes = this.nextTimeMinute - this.currentDate.getMinutes();
        //     this.leftSeconds = 59 - this.currentDate.getSeconds();
        //     // console.log(this.leftHours)
        //     if(this.leftHours == this.leftMinutes == this.leftSeconds == 0) {

        //     }
        //     if(this.leftMinutes < 0) {
        //         this.leftHours -- ;
        //         this.leftMinutes += 60;
        //     }
        //     this.leftHours = this.leftHours.toString().padStart(2, "0");
        //     this.leftMinutes = this.leftMinutes.toString().padStart(2, "0");
        //     this.leftSeconds = this.leftSeconds.toString().padStart(2, "0");
        //     this.timeLeft = `${this.leftHours}:${this.leftMinutes}:${this.leftSeconds}`;
        // }, 1000);
        // console.log(this.timeLeft);

    }
}
</script>

<style lang="scss">
#app {
    // font-family: 'Avenir', Helvetica, Arial, sans-serif;
    // -webkit-font-smoothing: antialiased;
    // -moz-osx-font-smoothing: grayscale; // text-align: center;
    // color: #2c3e50;
    // border: 1px solid red;
}
// @import './iconfont.css';

// @font-face {
//   font-family: 'iconfont';
//   src: url('iconfont.eot');
//   src: url('iconfont.eot?#iefix') format('embedded-opentype'),
//       url('iconfont.woff2') format('woff2'),
//       url('iconfont.woff') format('woff'),
//       url('iconfont.ttf') format('truetype'),
//       url('iconfont.svg#iconfont') format('svg');
// }

// .iconfont {
//   font-family: "iconfont" !important;
//   font-size: 16px;
//   font-style: normal;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
// }

body {
    margin: 0;
    padding: 0;
    font: 14px/1.5 "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
    height: 2500px;
}

ul,
li {
    margin: 0;
    padding: 0;
}

ul {
    list-style-type: none;
}

a {
    text-decoration: none;
}

.container {
    margin: 0 auto;
    width: 1226px;
}

.container::before,
.clear-fixed::before {
    content: "";
    display: table;
}

.container::after,
.clear-fixed::after {
    content: "";
    display: table;
    clear: both;
}

.topbar {
    background: #333333;
    height: 40px;
    a {
        color: #b0b0b0;
        font-size: 12px;
    }
    a:hover {
        color: #fff;
    }
    .topbar-nav {
        float: left;
        height: 40px;
        line-height: 40px;
        font-size: 0;
        span {
            font-size: 12px;
            color: #424242;
            font-family: sans-serif;
            margin: 0.5em;
        }
    }
    .topbar-info {
        margin-right: 15px;
        float: right;
        font-size: 0;
        a {
            float: left;
            padding: 0 5px;
            height: 40px;
            line-height: 40px;
        }
        span {
            float: left;
            font-size: 12px;
            font-family: sans-serif;
            height: 40px;
            line-height: 40px;
            color: #424242;
        }
        .sep {
            padding: 0 10px;
        }
    }
    .topbar-cart {
        float: right;
        a {
            display: block;
            height: 40px;
            line-height: 40px;
            text-align: center;
            width: 120px;
            background-color: #424242;
        }
        a:hover {
            background-color: #ffffff;
            color: #ff6700;
        }
        i {
            line-height: 20px;
            font-size: 20px;
            padding-top: 2px;
        }
    }
}

.header {
    height: 100px;
    .header-log {
        float: left;
        width: 62px;
        height: 55px;
        margin-top: 22px;
        a {
            display: block;
            height: 55px;
            width: 55px;
            background: #ff6700 url("./assets/mi-logo.png") no-repeat 50% 50%;
        }
        .lr {
            text-align: left;
            text-indent: -9999em;
        }
    }
    .header-nav {
        float: left;
        width: 820px;
        height: 100px;
        .nav-list {
            width: 820px;
            height: 88px;
            font-size: 16px;
            padding: 12px 0 0 30px;
            .nav-category {
                float: left;
                width: 127px;
                padding: 0 15px 0 0;
                a {
                    display: block;
                    padding: 26px 10px 38px;
                    text-align: right;
                    color: #333;
                }
            }
            .nav-item {
                float: left;
                a {
                    display: block;
                    padding: 26px 10px 38px;
                    color: #333;
                }
                a:hover {
                    color: #ff6700;
                }
            }
        }
    }
    .header-search {
        float: right;
        width: 296px;
        margin-top: 25px;
        height: 50px;
        .search-form {
            position: relative;
            display: block;
            width: 296px;
            height: 50px;
            .search-text {
                position: absolute;
                top: 0;
                right: 51px;
                display: block;
                width: 245px;
                height: 50px;
                line-height: 50px;
                border: 1px solid #e0e0e0;
                outline: 0;
                padding: 12px;
            }
            .search-btn {
                display: block;
                width: 50px;
                height: 48px;
                border: 1px solid #e0e0e0;
                font-size: 20px;
                font-weight: bold;
                line-height: 48px;
                text-align: center;
                background: #fff;
                color: #616161;
                outline: 0;
                position: absolute;
                top: 0;
                right: 0;
                cursor: pointer;
            }
            .search-btn:hover {
                background: #ff6700;
                color: #fff;
            }
        }
    }
}

.seckill {
    background-color: #f5f5f5;
    .seckill-head {
        background: url("./assets/seckill-head.jpg") no-repeat 50% 0;
        height: 170px;
        margin-top: 19px;
    }
    .seckill-nav {
        margin: -68px 0 22px;
        ul {
            height: 68px;
            background-color: #414141;
            width: 1226px;
            li {
                display: block;
                float: left;
                color: #fff;
                width: 20%;
                height: 68px;
                line-height: 68px;
                text-align: center;
                cursor: pointer;
                em {
                    display: inline-block;
                    font-style: normal;
                    font-size: 18px;
                    line-height: 1;
                    vertical-align: middle;
                    margin-left: 30px;
                }
                span {
                    display: inline-block;
                    text-align: left;
                    margin-left: 15px;
                    line-height: 14px;
                    font-size: 14px;
                    vertical-align: middle;
                }
                .specail {
                    display: inline-block;
                    font-size: 14px;
                    margin-left: 0;
                    font-style: normal;
                    text-align: left;
                    line-height: 20px;
                }
            }
            .active {
                background-color: #f1393a;
            }
        }
    }
    .seckill-goods {
        display: block;
        ul {
            // display: none;
            margin-right: -13px;
            li {
                float: left;
                width: 400px;
                height: 190px;
                background-color: #fff;
                margin: 0 13px 13px 0;
            }
        }
    }
}
</style>
