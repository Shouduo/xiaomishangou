<template>
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
                <a class="nav-tag">企业团购</a>
                <span>|</span>
                <a class="nav-tag">资质证照</a>
                <span>|</span>
                <a class="nav-tag">协议规则</a>
                <span>|</span>
                <a class="nav-tag">下载app</a>
            </div>
            <div class="topbar-cart">
                <a class="nav-tag" :class="{empty:sumCount==0}">
                    <i class="iconfont" v-if="sumCount==0">&#xe60c;</i>
                    <i class="iconfont" v-if="sumCount>0">&#xe60d;</i>
                    购物车 ({{sumCount}})</a>
                <div class="dropdown-cart">
                    <p class="empty-info" v-if="sumCount==0">购物车中还没有商品，赶紧选购吧！</p>
                    <div class="list-container" v-if="sumCount>0">
                        <ul>
                            <li v-for="item in cartList" v-bind:key="item.id">
                                <img :src="requireImg(item)" alt="">
                                <a class="good-name"><em>【秒杀】</em>{{item.name}}</a>
                                <a class="delete" @click.prevent="deleteItem(item)">&times;</a>
                                <p class="good-price">{{item.nowPrice}}元 &times; {{item.amount}}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="cart-summary clear-fixed" v-if="sumCount!=0">
                        <div class="summary-left">
                            <p class="summary-count">共 {{sumCount}} 件商品</p>
                            <p class="summary-money">{{sumMoney.toFixed(2)}}<em>元</em></p>
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
</template>

<script>
import VueEvent from './VueEvent.js'

export default {
    name: 'Topbar',
    data() {
        return {
            cartList: []
        }
    },
    computed: {
        sumCount() {
            return this.cartList.reduce((total, item) => {
                return total + item.amount;
            }, 0);
        },
        sumMoney() {
            return this.cartList.reduce((total, item) => {
                return total + item.amount * item.nowPrice;
            }, 0);
        }
    },
    methods: {
        requireImg(good) {
            return require('../assets/img/' + good.imgName);
        },
         deleteItem(good) {
            this.cartList.forEach((item, index) => {
                let allOut = false;
                if(item.name == good.name) {
                    if(item.amount > 1){
                        item.amount--;
                    } else {
                        allOut = true;
                        this.cartList.splice(index, 1);
                    }
                    VueEvent.$emit(item.id.toString(), allOut);
                } 
            })
        }
    },
    mounted() {
        VueEvent.$on("addItem", (data) => {
            let alreadyHas = false;
            this.cartList.forEach((item) => {
                if (item.id == data.id) {
                    item.amount ++;
                    alreadyHas = true;
                }
            });
            if (alreadyHas == false) {
                this.cartList.push(data);
            }

        })
    }
}
</script>

<style lang="scss" scoped>
.topbar {
    background: #333333;
    height: 40px;
    position: relative;
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
            cursor: default; 
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
        .nav-tag {
            display: block;
            height: 40px;
            line-height: 40px;
            text-align: center;
            width: 120px;
            background-color: #ff6700;
            color: #fff;
            cursor: pointer;
            transition: all linear .1s .65s;
            .iconfont {
                font-size: 20px;
                font-weight: 500;
                line-height: 20px;
                margin-left: -8px;
                vertical-align: -4px;
            }
        }
        .empty {
            background-color: #424242;
            color: #b0b0b0;
        }
        &:hover .nav-tag {
            transition: all linear .1s 0s;
            background-color: #ffffff;
            color: #ff6700;
        }
        &:hover .dropdown-cart {
            transform:translate(0px, 0px);
            max-height: 625px;
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
            transition: max-height linear .6s, transform linear .3s .3s;
            .empty-info {
                display: block;
                text-align: center;
                font-size: 12px;
                margin: 40px auto;
                color: #424242;
            }
            .list-container {
                max-height: 628px;
                overflow-Y: auto;
                overflow-X: hidden;
                ul {
                    padding: 15px 17px 0;
                    width: 320px;
                    box-sizing: border-box;
                    li {
                        display: block;
                        height: 80px;
                        border-bottom: 1px solid #e0e0e0;
                        transition: all linear .5s;
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
</style>