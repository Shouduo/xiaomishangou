<template>
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
</template>

<script>
export default {
    name:'Header',
    data() {
        return {

        }
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
</style>