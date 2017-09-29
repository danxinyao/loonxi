<template>
    <pg-layout>
        <div class="banner">
            <transition name="fade"><div class="live" v-show="showLive"><div></div></div></transition>
            <transition name="fade"><div class="train" v-show="showTrain"><div></div></div></transition>
            <transition name="fade"><div class="redpackage" v-show="showRedpackage"><div></div></div></transition>
            <transition name="fade"><div class="antifake" v-show="showAntifake"><div></div></div></transition>
            <transition name="fade"><div class="arrive" v-show="showArrive"><div></div></div></transition>
            <transition name="fade"><div class="leave" v-show="showLeave"><div></div></div></transition>
        </div>
        <div class="main">
            <div class="left">
                <span class="title">微场景</span>
                <ul>
                    <li :class="{cur:showLive}" @click="tabAction('showLive')">视频直播场景</li>
                    <li :class="{cur:showTrain}"  @click="tabAction('showTrain')">培训应用场景</li>
                    <li :class="{cur:showRedpackage}" @click="tabAction('showRedpackage')">微信红包场景</li>
                    <li :class="{cur:showAntifake}" @click="tabAction('showAntifake')">防伪溯源场景</li>
                    <li :class="{cur:showArrive}" @click="tabAction('showArrive')">会员到店场景</li>
                    <li :class="{cur:showLeave}" @click="tabAction('showLeave')">会员离店场景</li>
                </ul>
            </div>
            <div class="right">
                <div class="live" v-show="showLive">
                    <img src="../../assets/images/microSence/live_pic_1.jpg" alt="">
                    <dl>
                        <dt>直播发起示例</dt>
                        <dd>
                            <p>扫码登录即可创建您的视频直播。创建后即可通过微信发送给好友或朋友圈进行分享传播视频直播；也可将你的直播地址关联至你的微信公众号菜单中或发送二维码邀请观看。</p>
                            <div class="part_block">
                                <ul>
                                    <li>支持手机、PC、专业摄影机直播</li>
                                    <li>支持直播嵌入自已研发的活动页面中</li>
                                    <li>可以设置使用自己的域名进行访问</li>
                                </ul>
                            </div>
                            <div class="part_box pic2">
                                <img src="../../assets/images/microSence/live_pic_2.jpg" alt="">
                            </div>
                        </dd>
                        <dt>直播观看示例</dt>
                        <dd>
                            <p>用户根据二维码或入口进入直播页面，进行观看和聊天互动。支持手机、PC多终端播放</p>
                            <div class="part_box pic3">
                                <img class="t" src="../../assets/images/microSence/live_pic_3.jpg" alt="">
                                <img src="../../assets/images/microSence/live_pic_4.jpg" alt="">
                            </div>
                        </dd>
                        <dt>《龙席》直播产品</dt>
                        <dd>
                            <p class="c1">强烈建议您也使用</p>
                            <ul class="list">
                                <li>
                                    <i class="i1"></i>
                                    <p>行业培训</p>
                                    <span>通过龙席直播论坛，快速落地视频，如分销商内部培训，门店现场产品销售场景，引导粉丝下单，提升公号粉丝活路度。</span>
                                </li>
                                <li>
                                    <i class="i2"></i>
                                    <p>视频直播</p>
                                    <span>视频直播能直观的描述产品品质，建立起与粉丝互动的桥梁，达成购买意向，进而极大提升产品关注度。</span>
                                </li>
                                <li>
                                    <i class="i2"></i>
                                    <p>粉丝互动</p>
                                    <span>粉丝互动是新媒体运营很重要的环节，龙席直播区别于“花椒”、“斗鱼”、“映客”等直播平台，龙席直播能真正沉淀自己的粉丝。</span>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                </div>
                <div class="train" v-show="showTrain">
                    <img src="../../assets/images/microSence/live_pic_1.jpg" alt="">
                    <dl>
                        <dt>培训发起示例</dt>
                        <dd>
                            <p>创建后即可通过二维码或地址微信发送给好友或朋友圈进行分享传播您的培训；也可将你的培训地址关联至你的微信公众号菜单中或发送二维码邀请观看。</p>
                            <div class="part_block">
                                <ul>
                                    <li>支持手机、PC、专业摄影机直播</li>
                                    <li>支持直播嵌入自已研发的活动页面中</li>
                                </ul>
                            </div>
                            <div class="part_box pic1">
                                <img src="../../assets/images/microSence/train_pic_1.jpg" alt="">
                            </div>
                        </dd>
                        <dt>直播观看示例</dt>
                        <dd>
                            <p>用户根据二维码或入口进入直播页面，进行观看和聊天互动。支持手机、PC多终端播放</p>
                            <div class="part_box pic2">
                                <img src="../../assets/images/microSence/live_pic_3.jpg" alt="">
                            </div>
                        </dd>
                    </dl>
                </div>
                <div class="redpackage" v-show="showRedpackage">
                    <p class="part_text">微信公众平台平时一般只会推送消息，要做微信的微网站和发微信红包之类的活动的话还需要定制开发。开发完成后可以直接在后台进行设置发红包。这样做的目的是为了吸引和留住更多的微信粉。</p>
                    <div class="part_box">
                        <img src="../../assets/images/microSence/redpackage_pic_1.jpg" alt="">
                    </div>
                </div>
                <div class="antifake" v-show="showAntifake">
                    <div class="part_box">
                        <img src="../../assets/images/microSence/antifake_pic_1.jpg" alt="">
                    </div>
                    <div class="list">
                        <ul>
                            <li>
                                <span class="t">防假货</span>
                                <span class="split"></span>
                                <p>目前市场上假冒伪劣产品防不胜防，渠道管控系统是防伪标签为载体能够通过防伪标签保护品牌安全，从根本上杜绝假货问题</p>
                            </li>
                            <li class="line"></li>
                            <li>
                                <span class="t">防乱价</span>
                                <span class="split"></span>
                                <p>经销商入库/出库扫描，系统通过强大的防窜货追踪技术、IP地理识别，商家便可完全掌控网络渠，全过程监控经销商的行为，防止乱价等现象</p>
                            </li>
                            <li class="line"></li>
                            <li>
                                <span class="t">防窜货</span>
                                <span class="split"></span>
                                <p>渠道管控系统通过一物一码，全过程追踪、监控产品流向，防止将小商窜货</p>
                            </li>
                            <li class="line"></li>
                            <li>
                                <span class="t">防越级</span>
                                <span class="split"></span>
                                <p>通过渠道管控系统，帮助厂家建立一套可控的渠道分销体系，规范市场秩序，全面防止经销商越级、乱价等现象</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="arrive" v-show="showArrive">
                    <dl>
                        <dt class="d1">客户扫码付款场景</dt>
                        <dd>
                            <div class="part_box">
                                <img src="../../assets/images/microSence/arrive_pic1.jpg" alt="">
                            </div>
                        </dd>
                        <dt class="d2">门店店主收款场景</dt>
                        <dd>
                            <div class="part_box">
                                <img src="../../assets/images/microSence/arrive_pic2.jpg" alt="">
                            </div>
                        </dd>
                    </dl>
                </div>
                <div class="leave" v-show="showLeave">
                    <p class="part_text">客户离店之后可以根据公众号或者联系方式找到云店，进行下单支付，同样可以享受到会员优惠店主可以主动根据会员留下的联系方式推送消息给会员，引导会员二次消费。</p>
                    <div class="part_box">
                        <img src="../../assets/images/microSence/leave_pic_1.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </pg-layout>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';

    .fade-enter-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
        opacity: 0
    }

    dt {
        height: 30px;
        padding-left: 12px;
        border-left: 3px solid #24c4e0;
        margin-top: 64px;
        margin-bottom: 20px;
        line-height: 30px;
        font-size: 30px;
        color: #24c4e0;
    }
    dd{
        line-height: 30px;
        margin-start: 0;
        -webkit-margin-start: 0;
        -ms-margin-start: 0;
        -moz-margin-start: 0;
        -o-margin-start: 0;
    }
    .c1{
        color: #999;
    }

    .part_block{
        background: #e9f7fc;
        height: 60px;
        margin: 25px 0;
        line-height: 60px;
        li{
            float: left;
            list-style: disc;
        }
    }

    .part_box{
        border: 1px solid #24c4e0;
    }

    .part_text{
        margin: -5px 0 25px;
        line-height: 30px;
    }

    .banner{
        position: relative;
        height: 600px;
        .live,.train,.redpackage,.antifake,.arrive,.leave{
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
        }
        .live{
            background: url("../../assets/images/microSence/live_banner_1.jpg") no-repeat center 0;
            height: 600px;
            div{
                background: url("../../assets/images/microSence/live_banner_2.jpg") no-repeat center 0;
                width: 1190px;
                height: 600px;
                margin: 0 auto;
            }
        }
        .train{
            background: url("../../assets/images/microSence/train_banner_1.jpg") no-repeat center 0;
            height: 600px;
            div{
                background: url("../../assets/images/microSence/train_banner_2.jpg") no-repeat center 0;
                width: 1190px;
                height: 600px;
                margin: 0 auto;
            }
        }
        .redpackage{
            background: url("../../assets/images/microSence/redpackage_banner_1.jpg") no-repeat center 0;
            height: 600px;
            div{
                background: url("../../assets/images/microSence/redpackage_banner_2.jpg") no-repeat center 0;
                width: 1190px;
                height: 600px;
                margin: 0 auto;
            }
        }
        .antifake{
            background: url("../../assets/images/microSence/antifake_banner_1.jpg") no-repeat center 0;
            height: 600px;
            div{
                background: url("../../assets/images/microSence/antifake_banner_2.jpg") no-repeat center 0;
                width: 1190px;
                height: 600px;
                margin: 0 auto;
            }
        }
        .arrive{
            background: url("../../assets/images/microSence/arrive_banner_1.jpg") no-repeat center 0;
            height: 600px;
            div{
                background: url("../../assets/images/microSence/arrive_banner_2.jpg") no-repeat center 0;
                width: 1190px;
                height: 600px;
                margin: 0 auto;
            }
        }
        .leave{
            background: url("../../assets/images/microSence/leave_banner_1.jpg") no-repeat center 0;
            height: 600px;
            div{
                background: url("../../assets/images/microSence/leave_banner_2.jpg") no-repeat center 0;
                width: 1190px;
                height: 600px;
                margin: 0 auto;
            }
        }
    }
    .main{
        width: 1190px;
        margin: 58px auto 80px;
        font-size: 16px;
        color: #333;
        overflow: hidden;
    }

    .left{
        float: left;
        width: 169px;
        border: 1px solid #24c4e0;
        text-align: center;
        line-height: 70px;
        .title{
            display: block;
            background: #24c4e0;
            height: 80px;
            color: #fff;
            font-size: 24px;
            line-height: 80px;
        }
        li {
            cursor: pointer;
            font-size: 16px;
            color: #666;
            &.cur{
                color: #24c4e0;
            }
            &:hover{
                color: #24c4e0;
            }
        }
    }
    .right{
        float: right;
        width: 959px;

    }
    .live{
        .part_block{
            margin-bottom: 27px;
            ul{
                padding-left: 45px;
                margin-right: -60px;
            }
            li{
                margin-right: 75px;
            }
        }
        .pic2{
            padding: 38px 0;
            img{
                display: block;
                margin: 0 auto;
            }
        }
        .pic3{
            padding: 64px 0 38px;
            img{
                display: block;
                margin: 0 auto;
                &.t{
                    margin-bottom: 24px;
                }
            }
        }
        .list{
            margin-right: -38px;
            li{
                float: left;
                width: 292px;
                height: 332px;
                padding: 38px 17px;
                margin-right: 38px;
                border: 1px solid #24c4e0;
                box-sizing: border-box;
                -webkit-box-sizing: border-box;
                -ms-box-sizing: border-box;
                -moz-box-sizing: border-box;
                -o-box-sizing: border-box;
            }
            i{
                display: block;
                background: url("../../assets/images/microSence/live_sprite.jpg") no-repeat;
                width: 120px;
                height: 120px;
                margin: 0 auto;
            }
            p{
                margin: 20px 0 15px;
                text-align: center;
            }
            span{
                display: block;
                font-size: 14px;
                color: #999;
                line-height: 26px;
            }
        }
    }
    .train{
        .part_block{
            ul{
                padding-left: 160px;
            }
            li{
                margin-right: 100px;
            }
        }
        .pic1{
            padding: 20px;
        }
        .pic2{
            padding: 65px 0 35px;
            img{
                display: block;
                margin: 0 auto;
            }
        }
    }
    .redpackage{
        .part_box{
            padding: 20px 0;
        }
        img{
            display: block;
            margin: 0 auto;
        }
    }
    .antifake{
        .part_box {
            padding: 20px 0;
            margin-bottom: 40px;
        }
        img{
            display: block;
            margin: 0 auto;
        }
        li{
            float: left;
            width: 180px;
            &.line{
                width: 0;
                height: 106px;
                margin: 27px 32px 0;
                border-left: 1px dashed #cbcbcb;
            }
            .t{
                font-size: 20px;
                color: #24c4e0;
            }
            .split{
                display: block;
                background: #24c4e0;
                width: 39px;
                height: 1px;
                margin: 17px 0 14px;
            }
            p{
                font-size: 14px;
                color: #666;
                line-height: 28px;
            }
        }
    }
    .arrive{
        .part_box{
            padding: 47px 0;
        }
        img{
            display: block;
            margin: 0 auto;
        }
        .d1,dl{
            margin-top: 0;
        }
        .d2{
            margin-top: 105px;
        }
    }
    .leave{
        .part_box{
            padding: 47px 0;
        }
        img{
            display: block;
            margin: 0 auto;
        }
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>