<template>
    <pg-layout class="home">
        <pg-layout class="banner">
            <img src="~assets/images/wxb_banner.png" alt="">
            <pg-wrapper class="content">
                <div class="contents">
                    <div class="title">龙席.微销宝</div>
                    <div class="text">全渠道分销网络管理解决方案</div>
                </div>
            </pg-wrapper>
        </pg-layout>
        <pg-wrapper class="ywkj">
            <home-Title>业务框架</home-Title>
            <img src="~assets/images/wxb_ywkj.png" alt="">
        </pg-wrapper> 
        <pg-layout class="cpmd">
            <pg-wrapper class="cpmd_content ">
                <home-Title>产品卖点</home-Title>
                <div class="content clearfix">
                    <div class="left left_content">
                        <ul class="clearfix">
                            <li>
                                <div class="title">01.精准代理管理</div>
                                <a><span>·</span> 视频直播培训</a>
                                <a><span>·</span> 防伪防窜更省心</a>
                                <a><span>·</span> 消息推送机制</a>
                            </li>
                            <li>
                                <div class="title">02.优质分销体验</div>
                                <a><span>·</span> 订货更便捷</a>
                                <a><span>·</span> 支持扫码发货</a>
                                <a><span>·</span> 自动结算返点</a>
                            </li>
                            <li>
                                <div class="title">03.高效分销运营</div>
                                <a><span>·</span> 多级管理更清晰</a>
                                <a><span>·</span> 代理奖励配置</a>
                                <a><span>·</span> 素材中心共享</a>
                            </li>
                            <li>
                                <div class="title">04.长期稳定运行</div>
                                <a><span>·</span> 先进系统架构</a>
                                <a><span>·</span> 经实战检验</a>
                                <a><span>·</span> 智能报表中心</a>
                            </li>                                                        
                        </ul>
                    </div>
                    <div class="left right_content">
                        <img src="~assets/images/wxb_cpmd.png" alt="">
                    </div>
                </div>
            </pg-wrapper>
        </pg-layout> 
        <pg-wrapper class="ywkj gnld">
            <home-Title>功能亮点</home-Title>
            <img src="~assets/images/wxb_gnld.png" alt="">
        </pg-wrapper>  
        <pg-layout class="fxms">
            <pg-wrapper class="fxms_content ">
                <div class="title">
                        <p>创新分销模式</p>
                        <p>所有分销管理问题有它足够了</p>
                </div>
                <div class="line"></div>
                <img src="~assets/images/wxb_fxms_01.png" alt="">
            </pg-wrapper>
        </pg-layout> 
        <pg-wrapper class="ywkj">
            <img src="~assets/images/wxb_fxms_02.png" alt="">
        </pg-wrapper>                                               
    </pg-layout>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .home {
        .banner {
            position: relative;
            img {
                width: 100%;
            }
            .content {
                position: absolute;
                top:0;
                left:0;
                bottom: 0;
                right: 0;
                .contents {
                    position: absolute;
                    top:50%;
                    margin-top: -68px;
                    width: 465px;
                    font-size: 20px;
                    color: #fff;
                    line-height: 2;
                    .title {
                        font-size: 48px;
                    }
                    .text {
                        font-size: 20px;
                        color: #e0e0e0;
                    }
                }
            }
        }
        .sell {
        }
        .cpmd {
            height: 720px;
            background-color: #f7f7f7;
            .cpmd_content {
                .content {
                    .left_content {
                        width: 595px;
                        height: 100px;
                        ul {
                            padding: 0px 100px;
                            li {
                                float: left;
                                margin-right: 80px;
                                margin-bottom: 90px;
                                &:nth-of-type(2n) {
                                    margin-right: 0;
                                }
                                .title {
                                    font-size: 20px;
                                    color:@title-color;
                                    line-height: 2;
                                }
                                a {
                                    display: block;
                                    font-size: 14px;
                                    color:@explain-color;
                                    line-height: 1.5;
                                    text-indent: 2em;
                                    &:hover {
                                        color:@primary-color;
                                    }
                                }
                            }
                        }
                    }
                }                

            }
        }
        .gnld {
            padding-bottom: 100px;
        }
        .fxms {
            background-color: #f7f7f7;
            height: 855px;
            .fxms_content {
                .title {
                    font-size: 30px;
                    text-align: center;
                    padding: 90px 0 35px 0px;
                    p {
                        margin: 0;
                        color:@title-color;
                        margin-bottom: 5px;
                    }
                }
                .line {
                    margin: 0  auto;
                    width: 35px;
                    border-bottom: 1px solid #bebebe; 
                }
                img {
                    margin: 70px 0 110px 0;
                }
            }
        }
    }   
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>