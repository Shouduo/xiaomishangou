<template>
    <div id="app">

        <div class="topbar">
            <div class="container">
                <div class="topbar-nav">
                    <a class="nav-tag">小米商城</a>
                    <span>|</span>
                    <a class="nav-tag">MIUI</a>
                    <span>|</span>
                    <a class="nav-tag">IoT</a>
                    <span>|</span>
                    <a class="nav-tag">云服务</a>
                    <span>|</span>
                    <a class="nav-tag">金融</a>
                    <span>|</span>
                    <a class="nav-tag">有品</a>
                    <span>|</span>
                    <a class="nav-tag">小爱开放平台</a>
                    <span>|</span>
                    <a class="nav-tag">政企服务</a>
                    <span>|</span>
                    <a class="nav-tag">Select Region</a>
                </div>
                <div class="topbar-cart">
                    <a class="nav-tag"><i class="iconfont">&#xe63b;</i>购物车（0）</a>
                    <div class="dropdown-cart">
                        <ul>
                            <li>
                                <img src="./assets/img/1.jpg" alt="">
                                <a class="good-name"><em>【秒杀】</em>小米双肩包</a>
                                <a class="delete" href="">&times;</a>
                                <p class="good-price">19.9元 &times; 1</p>
                            </li>
                            <li>
                                <img src="./assets/img/1.jpg" alt="">
                                <a class="good-name"><em>【秒杀】</em>小米双肩包123123312</a>
                                <a class="delete" href="">&times;</a>
                                <p class="good-price">19.9元 &times; 1</p>
                            </li>
                        </ul>
                        <div class="cart-summary clear-fixed">
                            <div class="summary-left">
                                <p class="summary-count">共 2 件商品</p>
                                <p class="summary-money">238<em>元</em></p>
                            </div>
                            <a class="summary-pay">去购物车结算</a>
                        </div>
                    </div>
                </div>
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
                <div class="header-logo">
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

        <div class="site-footer">
            <div class="container">
                <div class="footer-service">
                    <ul class="list-service clear-fixed">
                        <li><a><i class="iconfont"></i>预约维修服务</a></li>
                        <li><a><i class="iconfont"></i>7天无理由退货</a></li>
                        <li><a><i class="iconfont"></i>15天免费换货</a></li>
                        <li><a><i class="iconfont"></i>满99元包邮</a></li>
                        <li><a><i class="iconfont"></i>520余家售后网点</a></li>
                    </ul>
                </div>
                <div class="footer-links clear-fixed">
                    <dl class="col-links col-links-first">
                        <dt>帮助中心</dt>
                        <dd><a>账户管理</a></dd>
                        <dd><a>购物指南</a></dd>
                        <dd><a>订单操作</a></dd>
                    </dl>
                    <dl class="col-links">
                        <dt>服务支持</dt>
                        <dd><a>售后政策</a></dd>
                        <dd><a>自助服务</a></dd>
                        <dd><a>相关下载</a></dd>
                    </dl>
                    <dl class="col-links">
                        <dt>线下门店</dt>
                        <dd><a>小米之家</a></dd>
                        <dd><a>服务网点</a></dd>
                        <dd><a>授权体验店</a></dd>
                    </dl>
                    <dl class="col-links">
                        <dt>关于小米</dt>
                        <dd><a>了解小米</a></dd>
                        <dd><a>加入小米</a></dd>
                        <dd><a>投资者关系</a></dd>
                    </dl>
                    <dl class="col-links">
                        <dt>关于我们</dt>
                        <dd><a>新浪微博</a></dd>
                        <dd><a>官方微信</a></dd>
                        <dd><a>联系我们</a></dd>
                    </dl>
                    <dl class="col-links">
                        <dt>特色服务</dt>
                        <dd><a>F 码通道</a></dd>
                        <dd><a>礼物码</a></dd>
                        <dd><a>防伪 查询</a></dd>
                    </dl>
                    <div class="col-contact">
                        <p class="phone">400-100-5678</p>
                        <p>周一至周日 8:00-18:00<br/>（仅收市话费）</p>
                        <a class="btn"><i class="iconfont"></i>人工客服</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="site-info">
            <div class="container">
                <div class="logo ir">小米官网</div>
                <div class="info-text">
                    <p class="sites">
                        <a>小米商城</a>
                        <span class="sep">|</span>
                        <a>MIUI</a>
                        <span class="sep">|</span>
                        <a>米家</a>
                        <span class="sep">|</span>
                        <a>米聊</a>
                        <span class="sep">|</span>
                        <a>多看</a>
                        <span class="sep">|</span>
                        <a>游戏</a>
                        <span class="sep">|</span>
                        <a>路由器</a>
                        <span class="sep">|</span>
                        <a>米粉卡</a>
                        <span class="sep">|</span>
                        <a>政企服务</a>
                        <span class="sep">|</span>
                        <a>小米天猫店</a>
                        <span class="sep">|</span>
                        <a>小米集团隐私政策</a>
                        <span class="sep">|</span>
                        <a>小米商城隐私政策</a>
                        <span class="sep">|</span>
                        <a>小米商城用户协议</a>
                        <span class="sep">|</span>
                        <a>问题反馈</a>
                        <span class="sep">|</span>
                        <a>廉正举报</a>
                        <span class="sep">|</span>
                        <a>诚信合规</a>
                    </p>
                    <p>
                        © <a>mi.com</a> <a>京ICP证110507号</a> <a>京ICP备10046444号</a> <a>京公网安备11010802020134号</a> <a>京网文[2020]0276-042号</a><br/>
                        <a>（京）网械平台备字（2018）第00005号</a> <a>互联网药品信息服务资格证 (京) -非经营性-2014-0090</a> <a>营业执照</a> <a>医疗器械公告</a><br/>
                        <a>增值电信业务许可证</a>  网络食品经营备案（京）【2018】WLSPJYBAHF-12   <a>食品经营许可证</a><br/>
                        违法和不良信息举报电话：171-5104-4404 <a>知识产权侵权投诉</a> 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
                    </p>
                </div>
                <div class="info-links">
                    <a><img src="./assets/truste.png" alt=""></a>
                    <a><img src="./assets/v-logo-1.png" alt=""></a>
                    <a><img src="./assets/v-logo-2.png" alt=""></a>
                    <a><img src="./assets/v-logo-3.png" alt=""></a>
                    <a><img src="./assets/v-logo-4.png" alt=""></a>
                </div>
            </div>
            <div class="slogan ir">探索黑科技，小米为发烧而生！</div>
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
    // position: relative;
    // z-index: -5;
}
#app {
    position: relative;
    z-index: 0;
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

.topbar {
    background: #333333;
    height: 40px;
    position: relative;
    // z-index: 5;
    // .container {
    //     background-color: pink;
        // position: relative;
        // z-index: 5;
    // }
    a {
        color: #b0b0b0;
        font-size: 12px;
        cursor: pointer;
        &:hover {
            color: #fff;
        }
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
        position: relative;
        // z-index: 5;
        .nav-tag {
            display: block;
            height: 40px;
            line-height: 40px;
            text-align: center;
            width: 120px;
            background-color: #424242;
            cursor: pointer;
            // transition-delay: .65s;
            transition: all linear .1s .65s;
        }
        &:hover .nav-tag {
            // transition-delay: 0s;
            transition: all linear .1s 0s;
            background-color: #ffffff;
            color: #ff6700;
            }
        i {
            line-height: 20px;
            font-size: 20px;
            padding-top: 2px;
        }
        &:hover .dropdown-cart {
            transform:translate(0px, 0px);
            max-height: 800px;
            // transform: scaleY(1);
            transition: max-height linear .6s, transform linear .3s;
            box-shadow: 0 10px 10px rgba($color: #000000, $alpha: 0.2); 
        }
        .dropdown-cart {
            display: block;
            position: absolute;
            width: 320px;
            max-height: 0px;
            right: 0;
            overflow: hidden;
            z-index: -1;
            box-sizing: border-box;
            background-color: #fff;
            box-shadow: 0 10px 10px rgba($color: #000000, $alpha: 0.2); 
            transform:translate(0px, -10px);
            // transform: scaleY(.8);
            transition: max-height linear .6s, transform linear .3s .3s;
            ul {
                padding: 15px 15px 0;
                max-height: 628px;
                overflow: auto;
                li {
                    display: block;
                    height: 80px;
                    border-bottom: 1px solid #e0e0e0;
                    &:hover .delete {
                        opacity: 1;
                    }
                    img {
                        float: left;
                        width: 56px;
                        margin: 12px 12px;
                        vertical-align: middle;
                    }
                    .good-name {
                        float: left;
                        font-size: 12px;
                        margin: 30px 0;
                        color: #000;
                        width: 120px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        cursor: pointer;
                        em {
                            color: #e05e40;
                        }
                        &:hover {
                            color: #ff6700;
                        }
                    }
                    .good-price {
                        float: right;
                        font-size: 12px;
                        margin-right: 6px;
                        margin-top: 20px;
                    }
                    .delete {
                        opacity: 0;
                        width: 16px;
                        height: 16px;
                        line-height: 80px;
                        font-size: 20px;
                        float: right;
                        color: #b0b0b0;
                        &:hover {
                            color: #424242;
                        }
                    }
                    &:last-child {
                        border-bottom: none;
                    }
                }
            }
            .cart-summary {
                background-color: #fafafa;
                padding: 16px 20px 10px;
                min-height: 72px;
                box-sizing: border-box;
                .summary-left {
                    float: left;
                    .summary-count {
                        line-height: 12px;
                        margin: 0;
                        font-size: 12px;
                        color: #757575;
                    }
                    .summary-money {
                        margin: 0;
                        color: #ff6700;
                        line-height: 30px;
                        font-size: 24px;
                        font-weight: 400;
                        em {
                            font-style: normal;
                            font-size: 12px;
                        }
                    }
                }
                .summary-pay {
                    float: right;
                    height: 40px;
                    width: 140px;
                    font-size: 14px;
                    line-height: 40px;
                    text-align: center;
                    color: #fff;
                    background-color: #ff6700;
                    cursor: pointer;
                }
            }
        }
    }
}

.header {
    height: 100px;
    position: relative;
    z-index: -2;
    .header-logo {
        position: relative;
        float: left;
        width: 55px;
        height: 55px;
        margin-top: 22px;
        overflow: hidden;
        background-color: #ff6700;
        a {
            position: relative;
            display: block;
            height: 55px;
            width: 110px; 
            transition: all ease-in-out .15s;
            &::before {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                width: 55px;
                height: 55px;
                background: url("./assets/mi-logo.png") no-repeat 50% 50%;
            }
            &::after {
                content: "";
                display: block;
                position: absolute;
                left: -55px;
                top: 0;
                height: 55px;
                width: 55px;
                background: url("./assets/mi-home.png") no-repeat 50% 50%;
            }
            &:hover {
                transform:translate(55px, 0);
            }
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
    position: relative;
    z-index: -3;
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
.site-footer {
    display: block;
    .footer-service {
        padding: 27px 0;
        border-bottom: 1px solid #e0e0e0;
        ul {
            list-style-type: none;
            li {
                float: left;
                width: 19.8%;
                height: 25px;
                font-size: 16px;
                line-height: 25px;
                text-align: center;
                color: #333;
                border-left: 1px solid #e0e0e0;
                cursor: pointer;
                transition: all linear .1s;
                &:first-child {
                    border-left: 0;
                }
                &:hover {
                    color: #ff6700;
                }
            }
        }
    }
    .footer-links {
        padding: 40px 0;
        .col-links {
            float: left;
            width: 160px;
            height: 112px;
            margin: 0;
            dt {
                display: block;
                font-size: 14px;
                margin: -1px 0 24px;
                color: #424242;
            }
            dd {
                display: block;
                margin: 10px 0 0;
                // margin-inline-start: 40px;
                a {
                    font-size: 12px;
                    color: #757575;
                    text-decoration: none;
                    cursor: pointer;
                    &:hover {
                        color: #ff6700;
                    }
                }
            }
        }
        .col-contact {
            float: right;
            width: 251px;
            height: 112px;
            border-left: 1px solid #e0e0e0;
            text-align: center;
            color: #616161;
            .phone {
                margin: 0 0 5px;
                font-size: 22px;
                line-height: 1;
                color: #ff6700;
            }
            p {
                margin: 0 0 16px;
            }
            .btn {
                display: inline-block;
                width: 118px;
                height: 28px;
                font-size: 12px;
                line-height: 28px;
                border: 1px solid #b0b0b0;
                border-color: #ff6700;
                background: #fff;
                color: #ff6700;
                cursor: pointer;
                transition: all linear .2s;
                &:hover {
                    background: #ff6700;
                    color: #fff;
                }
            }
        }
    }
}
.site-info {
    position: relative;
    display: block;
    padding: 30px 0;
    font-size: 12px;
    background: #fafafa;
    .container {
        position: relative;
        .logo {
            width: 57px;
            height: 57px;
            margin-right: 10px;
            background: #ff6700 url("./assets/mi-logo.png") no-repeat 50% 50%;
            position: absolute;
            top: 0;
            left: 0;
        }
        .info-text {
            display: block;
            font-size: 12px;
            color: #b0b0b0;
            padding-left: 67px;
            .sites {
                margin: 0;
                line-height: 18px;
                a {
                    color: #757575;
                    cursor: pointer;
                    &:hover {
                        color: #ff6700;
                    }
                }
                .sep {
                    margin: 0.25em;
                    font-family: sans-serif;
                    line-height: 18px;
                    color: #b0b0b0;
                }
            }
            p {
                margin: 0;
                line-height: 18px;
                a {
                    cursor: pointer;
                    &:hover {
                        color: #ff6700;
                    }
                }
            }
        }
        .info-links {
            height: 28px;
            margin: 4px 0 0;
            padding-left: 67px;
            a {
                color: #757575;
                text-decoration: none;
                cursor: pointer;
                font-size: 12px;
                img {
                    width: auto;
                    height: 28px;
                    margin-left: 0px;
                    margin-bottom: 15px;
                }
            }
        }
    }
    .slogan {
        width: 267px;
        height: 19px;
        margin: 30px auto 0;
        clear: both;
        background: url("./assets/slogan2016.png") no-repeat center 0;
    }
}
</style>
