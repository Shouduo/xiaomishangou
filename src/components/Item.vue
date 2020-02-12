<template>
    <div>
        <div class="bg">
            <img :src="requireImg" alt="" title="">
        </div>
        <div class="info">
            <a href="" class="name">{{itemInfo.name}}</a>
            <p class="tips">{{itemInfo.tip}}</p>
            <div v-show="itemInfo.status!='hanging'">
                <progress max="100" value="50"/>
                <p class="percentage">50%</p>
                <p class="price">{{itemInfo.nowPrice}}元
                    <del>{{itemInfo.fomerPrice}}元</del>
                </p>
                <a href="" class="btn" style="background-color: #f13939;" v-show="itemInfo.status=='ongoing'">立即抢购</a>
                <a href="" class="btn" style="background-color: #f13939;" v-show="itemInfo.status=='overdue'">抢购结束</a>
            </div>
            <div v-show="itemInfo.status=='hanging'">
                <p class="price">{{itemInfo.nowPrice}}元
                    <del>{{itemInfo.fomerPrice}}元</del>
                </p>
                <a href="" class="btn" v-show="itemInfo.status=='hanging'">提醒我</a>
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

        }
    },
    computed: {
        requireImg() {
            // console.log(this.itemInfo.imgUrl)
            // let url = this.itemInfo.imgUrl;
            return require('../assets/img/'+ this.itemInfo.imgName);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
        margin: 20px 0 0 0;
        // border: none;
    }
    progress::-webkit-progress-bar {
         background-color:#f5f5f5;
    }
    progress::-webkit-progress-value  {
         background-color:#f13939;
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
        margin-top: 20px;
        // border: 1px solid #83c44e;
    }
    .person {
      font-size: 12px;
      line-height: 12px;
      color: #999;
      margin-top: 10px;
    }
}
</style>
