<template>
    <div class="site-footer">
        <div class="container">
            <div class="footer-service">
                <ul class="list-service clear-fixed">
                    <li><a><i class="iconfont">&#xe634;</i>预约维修服务</a></li>
                    <li><a><i class="iconfont">&#xe635;</i>7天无理由退货</a></li>
                    <li><a><i class="iconfont">&#xe636;</i>15天免费换货</a></li>
                    <li><a><i class="iconfont">&#xe638;</i>满99元包邮</a></li>
                    <li><a><i class="iconfont">&#xe637;</i>520余家售后网点</a></li>
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
                    <dt>关注我们</dt>
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
                    <a class="btn"><i class="iconfont">&#xe600;</i>人工客服</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
.site-footer {
    display: block;
    position: relative;
    z-index: -4;
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
                a {
                    .iconfont {
                        margin-right: 6px;
                        font-size: 24px;
                        line-height: 24px;
                        vertical-align: -4px;
                    }
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
                margin: -3px 0 22px;
                color: #424242;
            }
            dd {
                display: block;
                margin: 7px 0 0;
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
                font-size: 12px;
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
                .iconfont {
                    font-size: 12px;
                    margin-right: 3px;
                }
            }
        }
    }
}    
</style>