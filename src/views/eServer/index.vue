<template>
    <pg-layout class="eserver">
        <pg-layout class="banner">
            <img src="~assets/images/eserver_banner.png" alt="">
            <pg-wrapper class="content">
                <div class="contents">
                    <div class="title">龙席.新零售服务生态联盟</div>
                    <div class="text">全渠道营销网络服务搭建</div>
                </div>
            </pg-wrapper>
        </pg-layout>
        <pg-layout class="server">
            <pg-wrapper>
                <home-Title>云服务</home-Title>
                <div class="server_content">
                    <a href="javascript:void(0)" class="item">
                        <span class="icon_box" style="background: #06c9ec;">
                            <img src="~assets/images/eserver_icon_01.png" alt="">
                        </span>
                        <span>视频直播</span>
                        <span class="hub_box hub_box1">
                            <span class="icon_hub">
                                <img src="~assets/images/eserver_icon_01.png" alt="">
                            </span>
                            <span class="title">视频直播</span>
                            <span class="text">支持多地直播互动，支持PC、外置设备、手机直播，与公众号连结客户，增强粉丝活跃与转化；低延迟，保证稳定和流畅性</span>
                        </span>
                    </a>
                    <a href="javascript:void(0)" class="item">
                        <span class="icon_box" style="background: #ff7070;">
                            <img src="~assets/images/eserver_icon_02.png" alt="">
                        </span>
                        <span>远程培训</span>
                        <span class="hub_box hub_box2">
                            <span class="icon_hub">
                                <img src="~assets/images/eserver_icon_02.png" alt="">
                            </span>
                            <span class="title">远程培训</span>
                            <span class="text">简单实用的教育培训直播系统，满足各行业培训场景，随时随地发起培训直播</span>
                        </span>
                    </a> 
                    <a href="javascript:void(0)" class="item">
                        <span class="icon_box" style="background: #ffad08;">
                            <img src="~assets/images/eserver_icon_03.png" alt="">
                        </span>
                        <span>印刷服务</span>
                        <span class="hub_box hub_box3">
                            <span class="icon_hub">
                                <img src="~assets/images/eserver_icon_03.png" alt="">
                            </span>
                            <span class="title">印刷服务</span>
                            <span class="text">结合防伪溯源的印刷服务</span>
                        </span>
                    </a>
                    <a href="javascript:void(0)" class="item">
                        <span class="icon_box" style="background: #5dd745;">
                            <img src="~assets/images/eserver_icon_04.png" alt="">
                        </span>
                        <span>微信二次开发</span>
                        <span class="hub_box hub_box4">
                            <span class="icon_hub">
                                <img src="~assets/images/eserver_icon_04.png" alt="">
                            </span>
                            <span class="title">微信二次开发</span>
                            <span class="text">微信二次开发，如扫码送红包等</span>
                        </span>
                    </a>  
                    <a href="javascript:void(0)" class="item">
                        <span class="icon_box" style="background: #ff8a50;">
                            <img src="~assets/images/eserver_icon_05.png" alt="">
                        </span>
                        <span>消息推送</span>
                        <span class="hub_box hub_box5">
                            <span class="icon_hub">
                                <img src="~assets/images/eserver_icon_05.png" alt="">
                            </span>
                            <span class="title">消息推送</span>
                            <span class="text">可以将重要消息传达到指定人群</span>
                        </span>
                    </a>
                    <a href="javascript:void(0)" class="item">
                        <span class="icon_box" style="background: #5ea4ff;">
                            <img src="~assets/images/eserver_icon_06.png" alt="">
                        </span>
                        <span>防伪溯源</span>
                        <span class="hub_box hub_box6">
                            <span class="icon_hub">
                                <img src="~assets/images/eserver_icon_06.png" alt="">
                            </span>
                            <span class="title">防伪溯源</span>
                            <span class="text">通过一物一码，为品牌产品打造唯一身份标识，消费者通过手机扫码后，引流及防伪查询。有效的防止窜货、假货、乱价行为</span>
                        </span>
                    </a>   
                    <a href="javascript:void(0)" class="item">
                        <span class="icon_box" style="background: #8e85ff;">
                            <img src="~assets/images/eserver_icon_07.png" alt="">
                        </span>
                        <span>素材中心</span>
                        <span class="hub_box hub_box7">
                            <span class="icon_hub">
                                <img src="~assets/images/eserver_icon_07.png" alt="">
                            </span>
                            <span class="title">素材中心</span>
                            <span class="text">代理商共享云端素材、节省手机空间，还能合理预览分类素材</span>
                        </span>
                    </a>
                    <a href="javascript:void(0)" class="item">
                        <span class="icon_box" style="background: #00d4aa;">
                            <img src="~assets/images/eserver_icon_08.png" alt="">
                        </span>
                        <span>云控中心</span>
                        <span class="hub_box hub_box8">
                            <span class="icon_hub">
                                <img src="~assets/images/eserver_icon_08.png" alt="">
                            </span>
                            <span class="title">云控中心</span>
                            <span class="text">微连云控拥有强大的朋友圈功能。包括朋友圈图文发布、小视频发布、分享链接、并且丰富的素材库让你的朋友圈更加真实，更容易培养信任感，朋友圈培养的好，效果倍增。</span>
                        </span>
                    </a>                                                                               
                </div>
            </pg-wrapper>
        </pg-layout>                                                                    
    </pg-layout>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .eserver {
        .banner {
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
                    margin-top: -50px;
                    width: 550px;
                    font-size: 20px;
                    color: #fff;
                    line-height: 1.5;
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
        .server {
            img {
                transition: all .6s;
                &:hover {
                    -ms-transform: scale(1.5);
                    -o-transform: scale(1.5);
                    -webkit-transform: scale(1.5);
                    -moz-transform: scale(1.5);
                    transform:scale(1.5);
                }
            }   
            padding-bottom: 335px;         
            .server_content {
                border-top: 1px solid #e6e6e6;
                border-left: 1px solid #e6e6e6;
                font-size: 0;
                .item {
                    display: inline-block;
                    width: 296px;
                    height: 308px;
                    border-right: 1px solid #e6e6e6;
                    border-bottom: 1px solid #e6e6e6;
                    text-align: center;
                    position: relative;
                    &:hover {
                        .hub_box {
                            display: block;
                        }
                    }
                    .hub_box {
                        display: none;
                        position: absolute;
                        //background-color: #43b5cd;
                        //background:  red url(~assets/images/eserver_icon_bg_01.png);
                        width: 296px;
                        height: 308px;
                        z-index:2;
                        top:0;
                        left: 0;
                        text-align: center;
                        padding: 50px 30px 0 30px;
                        box-sizing: border-box;
                        .title {
                            display: block;
                            font-size: 20px;
                            color:#fff;
                            margin: 6px 0 20px 0;
                        }
                        .text {
                            font-size: 14px;
                            color:#fff;
                        }
                    }
                    .hub_box1 {
                        background-image: url(~assets/images/eserver_icon_bg_01.png);
                    }
                    .hub_box2 {
                        background-image: url(~assets/images/eserver_icon_bg_02.png);
                    }
                    .hub_box3 {
                        background-image: url(~assets/images/eserver_icon_bg_03.png);
                    }
                    .hub_box4 {
                        background-image: url(~assets/images/eserver_icon_bg_04.png);
                    }  
                    .hub_box5 {
                        background-image: url(~assets/images/eserver_icon_bg_05.png);
                    }
                    .hub_box6 {
                        background-image: url(~assets/images/eserver_icon_bg_06.png);
                    }
                    .hub_box7 {
                        background-image: url(~assets/images/eserver_icon_bg_07.png);
                    }
                    .hub_box8 {
                        background-image: url(~assets/images/eserver_icon_bg_08.png);
                    }                                                                              
                    span {
                        color: @title-color;
                        font-size: 20px;
                    }
                    .icon_box {
                        display: block;
                        width: 100px;
                        height: 100px;
                        background-color: #06c9ec;
                        margin: 80px auto;
                        margin-bottom: 30px;
                        border-radius: 10px;
                        text-align: center;
                        img {
                            display: inline-block;
                            margin-top: 20px;
                        }
                    }
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