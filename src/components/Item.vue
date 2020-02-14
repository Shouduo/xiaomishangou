<template>
    <div class="card">
        <div class="bg">
            <img :src="requireImg" alt="" title="">
        </div>
        <div class="info">
            <p href="" class="name">{{itemInfo.name}}</p>
            <p class="tips">{{itemInfo.tip}}</p>
            <div v-show="itemInfo.status!='hanging'">
                <progress max="100" :value="percentage" />
                <p class="percentage">{{percentage}}%</p>
                <p class="price">{{itemInfo.nowPrice}}元
                    <del>{{itemInfo.fomerPrice}}元</del>
                </p>
                <a class="btn ongoingBtn" :class="{hasClicked:itemInfo.purchased}" v-show="itemInfo.status=='ongoing'" @click.prevent="purchaseBtnClick()">{{purchaseBtn}}</a>
                <a class="btn overdueBtn" v-show="itemInfo.status=='overdue'" @click.prevent>抢购结束</a>
            </div>
            <div v-show="itemInfo.status=='hanging'">
                <p class="price">{{itemInfo.nowPrice}}元
                    <del>{{itemInfo.fomerPrice}}元</del>
                </p>
                <a href="" class="btn" :class="{hasClicked:itemInfo.alertSet}" v-show="itemInfo.status=='hanging'" @click.prevent="alertBtnClick()">{{alertBtn}}</a>
                <p class="person">已有{{itemInfo.alertCount}}人设置提醒</p>
            </div>
            <!-- <p class="price">{{itemInfo.nowPrice}}元
                    <del>{{itemInfo.fomerPrice}}元</del>
                </p>
                <a href="" class="btn">{{itemInfo.btnText}}</a>
                <p class="person" v-show="itemInfo.btnText == '提醒我'">已有{{itemInfo.alertCount}}人设置提醒</p> -->
        </div>
    </div>
</template>

<script>
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
        requireImg() {
            // console.log(this.itemInfo.imgUrl)
            // let url = this.itemInfo.imgUrl;
            return require('../assets/img/' + this.itemInfo.imgName);
        },
        percentage() {

            // console.log(this.itemInfo.sold)
            // console.log(this.itemInfo.amount)
            // console.log(Math.floor(this.itemInfo.sold/this.itemInfo.amount*100))
            return Math.floor(this.itemInfo.sold/this.itemInfo.amount*100); 
        },
        soldNum() {
            return this.itemInfo.sold;
        }
    },
    methods: {
        purchaseBtnClick() {
            // if (this.itemInfo.sold < this.itemInfo.amount) {
                this.itemInfo.purchased = !this.itemInfo.purchased;
                this.itemInfo.sold = this.purchaseBtn == "立即购买"? this.itemInfo.sold + 1:this.itemInfo.sold - 1;
                this.purchaseBtn = this.purchaseBtn == "立即购买"? "已加入购物车":"立即购买";
                // if (this.itemInfo.sold == this.itemInfo.amount) this.itemInfo.status = "overdue";
            // }
        },
        alertBtnClick() {
            this.itemInfo.alertSet = !this.itemInfo.alertSet;
            this.alertBtn = this.alertBtn == "提醒我"? "已设置提醒":"提醒我";
        }
    },
    watch: {
        soldNum() {
            if (this.itemInfo.sold >= this.itemInfo.amount) {
                this.itemInfo.sold = this.itemInfo.amount;
                this.itemInfo.status = "overdue";
                console.log("overflow")
            }
        }
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
        width: 190px;
        height: 190px;
        margin-left: 210px;
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
            line-height: 1;
            color: #b0b0b0;
            margin-top: 10px;
            margin-bottom: 0;
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        progress {
            // -webkit-appearance: none;
            // -moz-appearance: none;
            appearance: none;
            height: 6px;
            width: 150px;
            display: inline-block;
            margin: 20px 0 0 0; // border: none;
        }
        progress::-webkit-progress-bar {
            background-color: #f5f5f5;
        }
        progress::-webkit-progress-value {
            background-color: #f13939;
        }
        .percentage {
            display: inline-block;
            font-size: 12px;
            line-height: 1;
            color: #666;
            transform: translate(4px, 4px);
            margin: 0;
        }
        .price {
            font-size: 16px;
            line-height: 1;
            color: #f1393a;
            margin-top: 14px;
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
            margin-top: 20px; // border: 1px solid #83c44e;
        }
        .ongoingBtn {
            background-color: #f13939;
        }
        .overdueBtn {
            background-color: #f2f2f2;
            color: #b0b0b0;
            cursor: default;
        }
        .hasClicked {
            background-color: #f2f2f2;
            color: #b0b0b0;
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
