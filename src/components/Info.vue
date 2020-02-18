<template>
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
                <a><img src="../assets/truste.png" alt=""></a>
                <a><img src="../assets/v-logo-1.png" alt=""></a>
                <a><img src="../assets/v-logo-2.png" alt=""></a>
                <a><img src="../assets/v-logo-3.png" alt=""></a>
                <a><img src="../assets/v-logo-4.png" alt=""></a>
            </div>
        </div>
        <div class="slogan ir">探索黑科技，小米为发烧而生！</div>
    </div>
</template>

<script>
export default {
    name: 'Info',
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.site-info {
    position: relative;
    z-index: -4;
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
            background: #ff6700 url("../assets/mi-logo.png") no-repeat 50% 50%;
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
        background: url("../assets/slogan2016.png") no-repeat center 0;
    }
}    
</style>