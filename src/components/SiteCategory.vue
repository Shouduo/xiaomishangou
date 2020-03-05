<template>
    <div class="site-category">
        <ul class="site-category-list clear-fixed">
            <li class="category-item" v-for="item in goodsList" :key="item.id">
                <a class="title">
                    {{item.itemName}}
                    <i class="iconfont">&#xe623;</i>
                </a>
                <div class="children">
                    <ul class="children-list">
                        <li v-for="good in item.itemsList" :key="good.id">
                            <a class="link">
                                <img :src="requireImg(good)" alt="" class="thumb">
                                <span class="text">{{good.name}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import Mock from 'mockjs'

export default {
    name: "SiteCategory",
    data() {
        return {
            goodsList: Object,
            itemName: ""
        }
    },
    methods: {
        requireImg(item) {
            return require('../assets/img/' + item.imgName);
        }
    },
    mounted() {
        axios({
            method: "get",
            url: "siteCategoryGoods"
        }).then((response) => {
            this.goodsList = response.data.goods;
        })
        .catch((error) => {
            console.log(error);
        });
    }
}
</script>

<style lang="scss" scoped>
.children-col-4 {
    width: 992px;
}
.site-category {
    position: relative;
    z-index: 1;
    top: 0px;
    left: -102px;
    width: 234px;
    height: 460px;
    font-size: 14px;
    .site-category-list {
        height: 418px;
        margin: 0;
        padding: 20px 0;
        list-style-type: none;
        border: 1px solid #ff6700;
        color: #424242;
        background-color: #fff;
        .category-item {
            display: list-item;
            color: #424242;
            cursor: pointer;
            &:hover {
                background-color: #ff6700;
                color: #fff; 
            }
            &:hover .children {
                display: flex;
            }
            .title {
                position: relative;
                display: block;
                padding-left: 30px;
                height: 42px;
                line-height: 42px;
                
                i {
                    position: absolute;
                    top: 12px;
                    right: 20px;
                    font-size: 16px;
                    line-height: 16px;
                    color: #e0e0e0;
                }
            }
            .children {
                display: none;
                position: absolute;
                left: 234px;
                top: 0;
                z-index: 4;
                height: 458px;
                border: 1px solid #e0e0e0;
                border-left: 0;
                background-color: #fff;
                box-shadow: 0 8px 16px rgba($color: #000000, $alpha: .18);
                .children-list {
                    writing-mode: vertical-lr;
                    height: 458px;
                    li {
                        display: inline-block;
                        writing-mode: horizontal-tb;
                        height: 76px;
                        width: 248px;
                        .link {
                            display: block;
                            margin-left: 20px;
                            line-height: 76px;
                            color: #333;
                            transition: color linear .2s;
                            
                            &:hover {
                                color: #ff6700;
                            }
                            .thumb {
                                margin-right: 12px;
                                vertical-align: middle;
                                height: 40px;
                                width: 40px;
                            }
                            .text {
                                line-height: 40px;
                            }
                        }
                    }
                }
            }
        }
    }
}

</style>