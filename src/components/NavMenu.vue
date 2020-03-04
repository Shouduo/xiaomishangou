<template>
    <div class="header-nav-menu">
        <div class="container">
            <ul class="children-list clear-fixed">
                <li v-for="item in shownList" :key="item.id">
                    <div class="figure">
                        <a>
                            <img :src="requireImg(item)" alt="">
                        </a>
                    </div>
                    <div class="title">
                        <a>{{item.name}}</a>
                    </div>
                    <p class="price" v-if="!item.showMore">{{item.price}}</p>
                    <p class="show-more" v-if="item.showMore">{{item.price}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Mock from 'mockjs'

export default {
    name: 'NavMenu',
    props: {
        itemName: ""
    },
    data() {
        return {
            goodsList: Array
        }
    },
    computed: {
        shownList() {
            return this.goodsList[this.itemName];
        }
    },
    mounted() {
        axios({
            method: "get",
            url: "navbarGoods"
        }).then((response) => {
            this.goodsList = response.data;
            // console.log(this.goodsList)
            // console.log(this.shownList)
            // console.log(this.itemName)
        })
        .catch((error) => {
            console.log(error);
        });
    },
    methods: {
        requireImg(item) {
            return require('../assets/img/' + item.imgName);
        }
    }
}
</script>

<style lang="scss" scoped>
.header-nav-menu {
    display: block;
    // position: absolute;
    // height: 229px;
    max-height: 0px;
    background-color: #fff;
    padding: 0;
    margin: 0;
    border-top: 0px solid #e0e0e0;
    // box-sizing: border-box;
    overflow: hidden;
    // box-shadow: 0 3px 4px rgba($color: #000000, $alpha: .18);
    // transition: max-height linear .2s .2s;
    transition: all linear .2s .2s;
    .children-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        font-size: 12px;
        li {
            position: relative;
            float: left;
            width: 180px;
            padding: 35px 12px 35px;
            text-align: center;
            
            &:not(:first-child):before {
                position: absolute;
                left: 0;
                top: 35p;
                width: 1px;
                height: 100px;
                content: "";
                background-color: #e0e0e0;
            }
            .figure {
                width: 160px;
                height: 110px;
                margin: 0 auto 16px;
                text-align: center;
                img {
                    width: 160px;
                    height: 110px;
                    cursor: pointer;
                }
            }
            .title {
                color: #333;
                margin: 0;
                line-height: 20px;
                cursor: pointer;
            }
            .price {
                margin: 0;
                line-height: 20px;
                color: #ff6700;
            }
            .show-more {
                margin: 0;
                line-height: 20px;
                color: #333;
            }
        }
    }
}
</style>