<template>
    <div id="app">
        <Topbar />

        <Header />

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

        <Footer />

        <Info />
    </div>
</template>

<script>
import Topbar from './components/Topbar.vue'
import Header from './components/Header.vue'
import Item from './components/Item.vue'
import Footer from './components/Footer.vue'
import Info from './components/Info.vue'
import axios from 'axios'
import Vue from 'vue'
import Mock from 'mockjs'

export default {
    name: 'app',
    components: {
        Topbar,
        Header,
        Item,
        Footer,
        Info
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
        },
        getOffsetTop(elem) {
            let offsetTop = 0;
            do {
                if (!isNaN(elem.offsetTop)) offsetTop += elem.offsetTop;
            } while(elem = elem.offsetParent);
            return offsetTop;
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
        // this.$http.get('./goods.json').then((response) => {
        axios({
            method: "get",
            url: "data"
        }).then((response) => {
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
            this.timesList = this.timesList.splice(0, 6);
            this.selectTime = this.nextTime = this.timesList[0].startTime;
            this.goodsList = response.data.goods.map((item) => {
                return Object.assign(item, { "alertSet": false, "purchased": false });
            });
        })
        .catch((error) => {
            console.log(error);
        });

        let i = 0; //test
        let statusFlag;
        let countdonw = setInterval(() => {
            if (this.tagIndex == this.timesList.length-1) clearInterval(countdonw);
            let currentDate = new Date();

            currentDate.setTime(currentDate.getTime() + 60 * 1000 * i++); //test
            let diffSeconds = Math.floor((currentDate.getTime() - this.timesList[this.tagIndex].startMilliseconds) / 1000);
            if (diffSeconds < 0) {
                if (statusFlag != "hanging") {
                    this.timesList[this.tagIndex].tagTitle = "即将开始";
                    this.timesList[this.tagIndex].subTitle = "距开始";
                    statusFlag = "hanging";
                }
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
                        if (item.startTime == this.timesList[this.tagIndex].startTime) {
                            item.status = "ongoing";
                        }
                    }
                    statusFlag = "ongoing";
                }
            } else {
                if (statusFlag != "overdue") {
                    this.timesList[this.tagIndex].tagTitle = "抢购结束";
                    this.timesList[this.tagIndex].subTitle = "";
                    for (let item of this.goodsList) {
                        if (item.startTime == this.timesList[this.tagIndex].startTime) {
                            item.status = "overdue";
                        }
                    }
                    this.tagIndex++;
                    this.nextTime = this.timesList[this.tagIndex].startTime;
                    statusFlag = "overdue";
                }
            }
            let leftHours = (Math.floor(Math.abs(diffSeconds) / (60 * 60))).toString().padStart(2, "0");
            let leftMinutes = (Math.floor(Math.abs(diffSeconds) % (60 * 60) / 60)).toString().padStart(2, "0");
            let leftSeconds = (Math.floor(Math.abs(diffSeconds) % (60 * 60) % 60)).toString().padStart(2, "0");
            this.timeLeft = `${leftHours}:${leftMinutes}:${leftSeconds}`;
        }, 1000);

        window.addEventListener("scroll", this.initHeight);
        this.offsetTop = this.getOffsetTop(document.querySelector(".seckill-nav"));
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
    min-width: 1226px;
    font: 14px/1.5 "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
}
#app {
    position: relative;
    z-index: 0;
    zoom: 1;
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
.ir {
    text-align: left;
    text-indent: -9999em;
    overflow: hidden;
}
.seckill {
    background-color: #f5f5f5;
    position: relative;
    z-index: -3;
    .seckill-head {
        background: url("./assets/seckill-head.jpg") no-repeat 50% 0;
        height: 170px;
        margin-top: 19px;
    }
    .seckill-nav {
        position: absolute;
        z-index: 3;
        margin: -68px 0 22px;
        ul {
            height: 68px;
            background-color: #414141;
            width: 1226px;
            overflow: hidden;
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
        margin-top: 22px;
        ul {
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
