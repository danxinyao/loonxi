<template>
    <pg-layout class="introdcution">
        <pg-layout class="banner">
            <img src="~assets/images/intro_banner.png" alt="">
            <pg-wrapper class="content">
                <div class="contents">
                    <div class="title">龙席.新零售管理系统</div>
                    <div class="text">助力企业构建独立自主的销售网络与营销体系，掌握</div>
                    <div class="text">核心大数据，掌控企业命运！</div>
                </div>
            </pg-wrapper>
        </pg-layout>
        <pg-wrapper style="padding-bottom:130px;">
            <home-Title>核心构成</home-Title>
            <img src="~assets/images/intro_hxgc.png" alt="">
        </pg-wrapper> 
        <pg-layout class="jjwt">
            <pg-wrapper>
                <home-Title>解决问题</home-Title>
                <div class="jjwt_content">
                    <a href="javascript:void(0)" class="item1">
                        零售，分销多条战线，人，钱，货，管理纠缠不清！
                        <span class="sanjiao"></span>
                    </a>
                    <a href="javascript:void(0)" class="item2">
                        分销关系复杂，层级结算难！
                        <span class="sanjiao"></span>
                    </a>
                    <a href="javascript:void(0)" class="item3">
                        零售，分销多条战线，人，钱，货，管理纠缠不清！
                        <span class="sanjiao"></span>
                    </a>
                    <a href="javascript:void(0)" class="item4">
                        多平台经营管理混乱！
                        <span class="sanjiao"></span>
                    </a>  
                    <a href="javascript:void(0)" class="item5">
                        多平台经营管理混乱！
                        <span class="sanjiao"></span>
                    </a>
                    <a href="javascript:void(0)" class="item6">
                        分销关系复杂，层级结算难！
                        <span class="sanjiao"></span>
                    </a>                                                                               
                </div>
            </pg-wrapper>
        </pg-layout>  
        <pg-wrapper class="jjfa">
            <home-Title>解决方案</home-Title>
            <div class="jjfa_content clearfix">
                <div class="left left_content">
                    <div class="item clearfix">
                        <div class="left item_left">01</div>
                        <div class="left item_right">
                            <div class="title">《全渠道供销管理系统》打造企业独立自主的销售网络</div>
                            <div class="text"> 供应端，分销端，零售端，跨平台全渠道覆盖</div>
                        </div>
                    </div>
                    <div class="item clearfix">
                        <div class="left item_left">02</div>
                        <div class="left item_right">
                            <div class="title">《新零售冠军营》制定符合企业自身特性的营销体系</div>
                            <div class="text"> 商业模式设计，运营策略制定，执行方案实施，道与术全方位支持</div>
                        </div>
                    </div>
                    <div class="item clearfix">
                        <div class="left item_left">03</div>
                        <div class="left item_right">
                            <div class="title">《企业云控中心》大数据沙盘</div>
                            <div class="text"> 外部数据云，内部数据云，企业大数据实时覆盖，云图大屏让企业运营决策更直观！</div>
                        </div>
                    </div>                                        
                </div>
                <div class="right img">
                    <img src="~assets/images/intro_jjfa.png" alt="">
                </div>
            </div>
        </pg-wrapper> 
        <pg-layout class="server">
            <pg-wrapper>
                <home-Title>产品服务</home-Title>
                <div class="server_content"> 
                    <div class="item clearfix">
                        <div class="left">系统支持</div>
                        <div class="right">
                            <img src="~assets/images/intro_server_01.png" alt="">
                        </div>
                    </div>
                    <div class="item clearfix">
                        <div class="left">运营支持</div>
                        <div class="right">
                            <img src="~assets/images/intro_server_02.png" alt="">
                        </div>
                    </div> 
                    <div class="item  item3 clearfix">
                        <div class="left">大数据</div>
                        <div class="right">
                            <img src="~assets/images/intro_server_03.png" alt="">
                        </div>
                    </div>                                                                                                                     
                </div>
            </pg-wrapper>
        </pg-layout>                                                             
    </pg-layout>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .introdcution {
        .banner {
            position: relative;
            img {
                width: 100%;
            }
            // height: 640px;
            // background-image: url(~assets/images/intro_banner.png);
            // background-size: 100% 100%;
            .content {
                position: absolute;
                top:0;
                left:0;
                bottom: 0;
                right: 0;                
                .contents {
                    position: absolute;
                    top:50%;
                    margin-top: -66px;
                    width: 465px;
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
        .jjwt {
            background-color: #f7f7f7;
            .jjwt_content {
                height: 500px;
                    position: relative;

                a {
                    position: absolute;
                    display: inline-block;
                    padding: 0 35px;
                    line-height: 80px;
                    background-color: @primary-color;
                    text-align: center;
                    font-size: 30px;
                    color:#fff;
                    border-radius: 10px;
                    z-index:0;
                    .sanjiao {
                        position: absolute;
                        border-right: 10px solid @primary-color;
                        border-top: 10px solid transparent;
                        border-bottom: 10px solid transparent;
                        top:30px;
                        left: -10px;
                    }
                }
                .item1 {
                    top:0;
                    left: 20px;
                    opacity: 0.3;
                    font-size: 24px;
                }
                .item2 {
                    top: 0;
                    right: 30px;
                    opacity: 0.3;
                    font-size: 24px;                    
                } 
                .item3 {
                    top:75px;
                    left: 190px;
                }
                .item4 {
                    top:170px;
                    left: 416px;
                    opacity: 0.3;
                    font-size: 24px;                   
                } 
                .item5 {
                    top:205px;
                    left: 85px;
                }
                .item6 {
                    top:180px;
                    right: 70px
                }                                                
            }
        }
        .jjfa {
            img {
               transition: all .6s;
               &:hover {
                   -ms-transform: scale(1.5);
                   -o-transform: scale(1.25);
                   -webkit-transform: scale(1.5);
                   -moz-transform: scale(1.5);
                   transform:scale(1.5);
               }
            }            
           .jjfa_content {
                padding-bottom: 100px;
                .left_content {
                    padding-top: 80px;
                    width: 680px;
                    .item {
                        margin-bottom: 70px;
                        //height: 100px;
                        .item_left {
                            width: 70px;
                            height: 70px;
                            color:@primary-color; 
                            font-size: 50px;
                            border-right: 4px solid @primary-color; 
                        }
                        .item_right {
                            color:@title-color;
                            .title {
                                font-size: 24px;
                                padding-left: 18px;
                                padding-bottom: 27px;
                            }
                            .text {
                                font-size: 14px;
                                padding-left: 28px;
                            }
                        }
                    }
                }
           } 
        }
        .server {
            background-color: #f0f0f2;
            padding-bottom: 130px;
            .server_content {
                .item {
                    margin-bottom: 10px;
                    .left {
                        padding: 90px 40px;
                        height: 305px;
                        box-sizing: border-box;
                        width: 105px;
                        font-size: 30px;
                        color:#fff;
                        background-color: @primary-color;
                    }
                }
                .item3 {
                    .left {
                       height: 545px; 
                       padding-top: 215px;
                    }
                }
            }
        }
    }
    //  img {
    //     transition: all .6s;
    //     &:hover {
    //         -ms-transform: scale(1.5);
    //         -o-transform: scale(1.25);
    //         -webkit-transform: scale(1.5);
    //         -moz-transform: scale(1.5);
    //         transform:scale(1.5);
    //     }
    // }     
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>