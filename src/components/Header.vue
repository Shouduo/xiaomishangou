<template>
    <div class="header">
        <div class="container">
            <div class="header-logo">
                <a href="" class="lr">小米商城</a>
            </div>
            <div class="header-nav">
                <ul class="nav-list clear-fixed">
                    <li class="nav-category"><a>全部商品分类</a></li>
                    <li class="nav-item"><a>小米手机</a></li>
                    <li class="nav-item"><a>Redmi 红米</a></li>
                    <li class="nav-item"><a>电视</a></li>
                    <li class="nav-item"><a>笔记本</a></li>
                    <li class="nav-item"><a>家电</a></li>
                    <li class="nav-item"><a>路由器</a></li>
                    <li class="nav-item"><a>智能硬件</a></li>
                    <li class="nav-item"><a>服务</a></li>
                    <li class="nav-item"><a>社区</a></li>
                </ul>
            </div>
            <div class="header-search">
                <form action="" class="search-form">
                    <input type="search" name="keyword" class="search-text" autocomplete="off" @input="getKeyword($event.target.value)">
                    <a class="search-btn iconfont">&#xe616;</a>
                    <div v-show="searchBoxEmpty" class="search-hot-words">
                        <a>小米9 Pro 5G</a>
                        <a>Redmi Note 8</a>
                    </div>

                    <div class="keyword-list">
                        <ul class="result-list">
                            <li v-for="item in keywordList" v-bind:key="item.index">
                                <a>
                                    <span class="keyword">{{item.matchWord}}</span> {{item.followWord}}
                                </a>
                            </li>
                        </ul>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Header',
    data() {
        return {
            keywordList: Array,
            defaultList: [
                {"matchWord":"", "followWord":"小米 9"},
                {"matchWord":"", "followWord":"Redmi K20 Pro"},
                {"matchWord":"", "followWord":"Redmi K20"},
                {"matchWord":"", "followWord":"Redmi Note 7 Pro"},
                {"matchWord":"", "followWord":"Redmi Note 7"},
                {"matchWord":"", "followWord":"小米电视4c"},
                {"matchWord":"", "followWord":"电视32英寸"},
                {"matchWord":"", "followWord":"笔记本pro"},
                {"matchWord":"", "followWord":"小爱音箱"},
                {"matchWord":"", "followWord":"净水器"}],
            searchBoxEmpty: true
        }
    },
    methods: {
        getKeyword(keyword) {
            if(!keyword) {
                this.keywordList = this.defaultList;
                this.searchBoxEmpty = true;
                return 0;
            };
            //http://api.search.mi.com/query?jsonpcallback=xmsearch&query=%E5%B9%B3&page_index=1
            this.$jsonp("http://api.search.mi.com/query", {
                // callbackQuery: "jsonpcallback",
                // callbackName: "xmsearch",
                query: keyword,
                page_index: 1
            }, 3000).then((data) => {
                console.log(data)
                this.keywordList = data.data.list.map((item) => {
                    let matchWord, followWord= "";
                    if(item.title.indexOf(keyword) == 0) {
                        matchWord = keyword;
                        followWord = item.title.slice(keyword.length);
                    } else {
                        followWord = item.title;
                    }
                    return {
                        "matchWord":matchWord,
                        "followWord":followWord
                    };
                });
            }).catch((error) => {
                console.log(error);
            });
            this.searchBoxEmpty = false;
        }
    },
    created() {
        this.getKeyword();
    }
}
</script>

<style lang="scss" scoped>
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
                background: url("../assets/mi-logo.png") no-repeat 50% 50%;
            }
            &::after {
                content: "";
                display: block;
                position: absolute;
                left: -55px;
                top: 0;
                height: 55px;
                width: 55px;
                background: url("../assets/mi-home.png") no-repeat 50% 50%;
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
            padding: 12px 0 0 47px;
            .nav-category {
                float: left;
                width: 127px;
                padding: 0 5px 0 0;
                cursor: pointer;
                a {
                    display: block;
                    padding: 26px 10px 38px;
                    text-align: right;
                    color: #333;
                }
            }
            .nav-item {
                float: left;
                cursor: pointer;
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
                font-size: 14px;
                line-height: 50px;
                border: 1px solid #e0e0e0;
                outline: 0;
                padding: 12px;
                &:focus, &:focus+.search-btn {
                    border-color: #ff6700;
                }
                &:focus~.search-hot-words {
                    transition: all linear .2s;
                    opacity: 0;
                    z-index: -1;
                }
                &:focus~.keyword-list {
                    display: block;
                }
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
            .iconfont {
                font-size: 24px;
                font-weight: 500;
            }
            .search-hot-words {
                display: block;
                z-index: 0;
                opacity: 1;
                position: absolute;
                top: 14px;
                right: 62px;
                text-align: right;
                transition: all linear .2s;
                a {
                    display: inline-block;
                    font-size: 12px;
                    line-height: 16px;
                    background-color: #eee;
                    color: #757575;
                    margin-left: 5px;
                    padding: 1px 5px;
                    cursor: pointer;
                    transition: all linear .2s;
                    &:hover {
                        background-color: #ff6700;
                        color: #fff;
                    }
                }
            }
            .keyword-list {
                display: none;
                position: absolute;
                left: 0;
                top: 50px;
                width: 243px;
                border: 1px solid #ff6700;
                border-top: 0;
                background: #fff;
                .result-list {
                    margin: 0;
                    padding: 0;
                    list-style-type: none;
                    li {
                        cursor: pointer;
                        &:hover {
                            background-color: #fafafa;
                        }
                        a {
                            position: relative;
                            display: block;
                            padding: 6px 15px;
                            font-size: 12px;
                            color: #424242;
                            .keyword {
                                color: #ff6700;
                            }
                        }
                    }
                }
            }
        }
    }
}    
</style>