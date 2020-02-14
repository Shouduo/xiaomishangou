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
                <div class="seckill-nav" id="seckill-nav">
                    <ul id="tabs" :class="{is_fixed:isFixed}">
                        <li :class="{active:selectTime==item.startTime}" v-for="item in timesList" v-bind:key="item.startTime" @click="timeSelect(item.startTime)">
                            <em>{{item.startTime}}</em>
                            <span>
                                        <em class="specail">{{item.tagTitle}}<br>
                                            <a v-show="nextTime==item.startTime">{{item.subTitle}} {{timeLeft}}</a>
                                        </em>
                                    </span>
                        </li>
                    </ul>
                </div>
                <div class="seckill-goods" id="uls">
                    <ul class="clear-fixed active">
                        <li v-for="item in shownList" v-bind:key="item.id">
                            <Item :itemInfo="item" class="seckill-good" />
                        </li>
                    </ul>
                    <p class="seckill-notice">*小米秒杀活动规则： <br/>1.秒杀商品是否参加活动、最终秒杀成功的商品，以订单结算页显示为准，活动包括但不限于优惠券、赠品、满减、满赠等；<br/>2.秒杀商品数量有限，活动以下单支付成功为准，请加入购物车后尽快下单支付; <br/>3.秒杀价不含运费，最终以订单结算页价格为准； <br/>4.订单中商品的数量、颜色、型号等，以订单结算页为准。 <br/>温馨提示：因可能存在系统缓存、页面更新导致价格变动异常等不确定性情况出现，如您发现活动商品标价或促销信息有异常，请您立即联系小米客服，以便我们及时补正。
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
            durationMinutes: 90,
            tagIndex: 0,
            isFixed: false,
            offsetTop: 0
        }
    },
    methods: {
        timeSelect(time) {
            this.selectTime = time;
        },
        initHeight() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.isFixed = scrollTop > this.offsetTop? true:false;
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
            this.timesList = response.data.goods.map((item) => {
                return item.startTime;
            });
            this.timesList = [...new Set(this.timesList)];
            this.timesList = this.timesList.map((item) => {
                let nowDate = new Date();
                let startDate = new Date();
                startDate.setHours(item.split(":")[0]);
                startDate.setMinutes(item.split(":")[1]);
                startDate.setSeconds(0);
                startDate.setMilliseconds(0);
                if (startDate.getTime() + this.durationMinutes * 60 * 1000 < nowDate.getTime()) {
                    startDate.setTime(startDate.getTime() + 24 * 60 * 60 * 1000);
                }
                return {
                    "startTime": item,
                    "startMilliseconds": startDate.getTime(),
                    "tagTitle": "即将开始",
                    "subTitle": "距开始"
                };
            })
            this.timesList.sort((a, b) => {
                return a.startMilliseconds - b.startMilliseconds;
            });
            this.timesList = this.timesList.splice(0, 5);
            this.selectTime = this.nextTime = this.timesList[0].startTime;
            this.goodsList = response.data.goods.map((item) => {
                return Object.assign(item, { "alertSet": false, "purchased": false });
            });
        });

        let i = 0; //test
        let statusFlag;
        let countdonw = setInterval(() => {
            if (this.tagIndex == this.timesList.length) clearInterval(countdonw);
            let currentDate = new Date();

            currentDate.setTime(currentDate.getTime() + 60 * 1000 * i++); //test
            let diffSeconds = Math.floor((currentDate.getTime() - this.timesList[this.tagIndex].startMilliseconds) / 1000);
            // console.log(diffSeconds)
            if (diffSeconds < 0) {
                if (statusFlag != "hanging") {
                    this.timesList[this.tagIndex].tagTitle = "即将开始";
                    this.timesList[this.tagIndex].subTitle = "距开始";
                    statusFlag = "hanging";
                }
                // console.log("upcoming")
            } else if (diffSeconds > 0 && diffSeconds < this.durationMinutes * 60) {
                diffSeconds = this.durationMinutes * 60 - diffSeconds;
                for (let item of this.goodsList) {
                    if (item.startTime == this.timesList[this.tagIndex].startTime) {
                        item.sold += Math.floor(Math.random() * 3); //test
                    }
                }
                if (statusFlag != "ongoing") {
                    this.timesList[this.tagIndex].tagTitle = "抢购中";
                    this.timesList[this.tagIndex].subTitle = "距结束";
                    for (let item of this.goodsList) {
                        // console.log(item.startTime)
                        if (item.startTime == this.timesList[this.tagIndex].startTime) {
                            item.status = "ongoing";
                        }
                    }
                    statusFlag = "ongoing";
                }
                // console.log("ongoing")
            } else {
                if (statusFlag != "overdue") {
                    this.timesList[this.tagIndex].tagTitle = "抢购结束";
                    this.timesList[this.tagIndex].subTitle = "";
                    for (let item of this.goodsList) {
                        // console.log(item.startTime)
                        if (item.startTime == this.timesList[this.tagIndex].startTime) {
                            item.status = "overdue";
                        }
                    }
                    this.tagIndex++;
                    this.nextTime = this.timesList[this.tagIndex].startTime;
                    statusFlag = "overdue";
                }
                // console.log("overdue")
            }
            let leftHours = (Math.floor(Math.abs(diffSeconds) / (60 * 60))).toString().padStart(2, "0");
            let leftMinutes = (Math.floor(Math.abs(diffSeconds) % (60 * 60) / 60)).toString().padStart(2, "0");
            let leftSeconds = (Math.floor(Math.abs(diffSeconds) % (60 * 60) % 60)).toString().padStart(2, "0");
            this.timeLeft = `${leftHours}:${leftMinutes}:${leftSeconds}`;
        }, 1000);

        window.addEventListener("scroll", this.initHeight);
        this.$nextTick(() => {
            this.offsetTop = document.querySelector("#seckill-nav").offsetTop;
        });
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    }
}
</script>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
    font: 14px/1.5 "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
    // height: 2500px;
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
        // position: sticky;
        // top: 0;
        position: relative;
        z-index: 3;
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
    .is_fixed{
        position: fixed;
        top: 0px;
        box-shadow: 0 10px 20px rgba($color: #000000, $alpha: 0.2);
    }
    .seckill-goods {
        display: block;
        ul {
            // display: none;
            margin-right: -13px;
            li {
                position: relative;
                z-index: 2;
                float: left;
                width: 400px;
                height: 190px;
                background-color: #fff;
                margin: 0 13px 13px 0;
                transition: all linear .2s;
                &:hover {
                    transform: translate(0, -2px);
                    // box-shadow: 0px 5px 32px #cccccc;
                    box-shadow: 0 10px 20px rgba($color: #000000, $alpha: 0.2);
                    z-index: 1;
                }
            }
        }
        .seckill-notice {
            color: #bbbbbb;
            font-size: 12px;
            margin: 100px 0px 35px;
        }
    }
}
</style>
