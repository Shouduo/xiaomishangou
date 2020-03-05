<template>
    <div class="card">
        <div class="bg">
            <img :src="requireImg(itemInfo)" alt="" title="">
        </div>
        <div class="info">
            <p class="name" :title="itemInfo.name">{{itemInfo.name}}</p>
            <p class="tips">{{itemInfo.tip}}</p>

            <div v-show="itemInfo.status!='hanging'">
                <progress max="100" :value="percentage" />
                <p class="percentage">{{percentage}}%</p>
                <p class="price">{{itemInfo.nowPrice.toFixed(2)}}元
                    <del>{{itemInfo.fomerPrice}}元</del>
                </p>
                <a class="btn ongoingBtn" :class="{hasPurchased:itemInfo.purchased}" v-show="itemInfo.status=='ongoing'" @click.prevent="purchaseBtnClick($event.target)">{{purchaseBtn}}</a>
                <a class="btn overdueBtn" v-show="itemInfo.status=='overdue'" @click.prevent>抢购结束</a>
            </div>

            <div v-show="itemInfo.status=='hanging'">
                <p class="price">{{itemInfo.nowPrice.toFixed(2)}}元
                    <del>{{itemInfo.fomerPrice}}元</del>
                </p>
                <a href="" class="btn" :class="{hasAlertSet:itemInfo.alertSet}" v-show="itemInfo.status=='hanging'" @click.prevent="alertBtnClick()">{{alertBtn}}</a>
                <p class="person">已有{{itemInfo.alertCount}}人设置提醒</p>
            </div>
        </div>
    </div>
</template>

<script>
import VueEvent from './VueEvent.js'

export default {
    name: 'Item',
    props: {
        itemInfo: Object
    },
    data() {
        return {
            purchaseBtn: "立即购买",
            alertBtn: "提醒我"
        }
    },
    computed: {
        percentage() {
            return Math.floor(this.itemInfo.sold/this.itemInfo.amount*100); 
        },
        soldNum() {
            return this.itemInfo.sold;
        }
    },
    methods: {
        purchaseBtnClick(btn) {
            let addOne = document.createElement("p");
            addOne.className = "add-one";
            let addOneText = document.createTextNode("+1");
            addOne.appendChild(addOneText);
            btn.append(addOne);
            this.itemInfo.purchased = true;
            this.itemInfo.sold ++;
            this.purchaseBtn = "再来一份";

            VueEvent.$emit("addItem", {
                "id": this.itemInfo.id,
                "imgName": this.itemInfo.imgName,
                "name": this.itemInfo.name,
                "nowPrice": this.itemInfo.nowPrice,
                "amount": 1
            });      
        },
        alertBtnClick() {
            this.itemInfo.alertSet = !this.itemInfo.alertSet;
            this.alertBtn = this.alertBtn == "提醒我"? "已设置提醒":"提醒我";
        },
        requireImg(item) {
            return require('../assets/img/' + item.imgName);
        }
    },
    watch: {
        soldNum() {
            if (this.itemInfo.sold >= this.itemInfo.amount) {
                this.itemInfo.sold = this.itemInfo.amount;
                this.itemInfo.status = "overdue";
            }
        }
    },
    mounted() {
        VueEvent.$on(this.itemInfo.id, (allOut) => {
            this.itemInfo.sold --;
            if(allOut) {
                this.itemInfo.purchased = false;
                this.purchaseBtn = "立即购买";
            }
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
    cursor: pointer;
    .bg {
        float: left;
        width: 190px;
        height: 190px;
        img {
            height: 190px;
        }
    }
    .info {
        width: 180px;
        height: 179px;
        margin-left: 210px;
        margin-right: 10px;
        padding-top: 30px;
        .name {
            font-size: 16px;
            color: #333;
            height: 16px;
            line-height: 1;
            text-decoration: none;
            display: block;
            margin: 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .tips {
            font-size: 12px;
            line-height: 16px;
            height: 32px;
            color: #797979;
            margin-top: 7px;
            margin-bottom: 0;
            display: -webkit-block;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
        progress {
            appearance: none;
            height: 5px;
            width: 146px;
            display: inline-block;
            margin: 10px 0 0 0;
        }
        progress::-webkit-progress-bar {
            background-color: #f5f5f5;
        }
        progress::-webkit-progress-value {
            background-color: #f13939;
        }
        .percentage {
            display: inline-block;
            position: absolute;
            font-size: 12px;
            line-height: 1;
            color: #666;
            transform: translate(4px, 4px);
            margin:6px 0 0 2px;
        }
        .price {
            font-size: 16px;
            line-height: 1;
            color: #f1393a;
            margin-top: 12px;
            margin-bottom: 0;
        }
        .price del {
            color: #999;
            font-size: 12px;
            line-height: 1;
            margin-left: 10px;
        }
        .btn {
            display: inline-block;
            width: 118px;
            height: 30px;
            line-height: 30px;
            color: #fff;
            font-size: 14px;
            text-align: center;
            text-decoration: none;
            background: #83c44e;
            margin-top: 16px;
        }
        .ongoingBtn {
            position: relative;
            background-color: #f13939;
        }
        .overdueBtn {
            background-color: #f2f2f2;
            color: #b0b0b0;
            cursor: default;
        }
        .hasAlertSet {
            background-color: #f2f2f2;
            color: #b0b0b0;
        }
        .hasPurchased {
            background-color: #414141;
        }
        .person {
            font-size: 12px;
            line-height: 12px;
            color: #999;
            margin-top: 10px;
        }
    }
}
</style>

<style lang="scss">
.add-one {
    display: block;
    position: absolute;
    line-height: 30px;
    margin: 0;
    top: 0;
    right: -25px;
    margin-left: 10px;
    color: black;
    animation: floatUp linear .4s both;
}
@keyframes floatUp {
    from {
        top: 0;
        opacity: 1;
    }
    to {
        top: -20px;
        opacity: 0;
    }
}
</style>