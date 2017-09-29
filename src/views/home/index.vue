<template>
    <pg-layout class="home">
        <pg-layout class="banner">
        <transition name="fade">
            <img src="~assets/images/home_banner.png" alt="">
        </transition>
            <pg-wrapper class="main">
                <div class="content">
                    <div class="contents">
                        <div class="title">龙席.新零售管理系统</div>
                        <div class="text">助力企业构建独立自主的销售网络与营销体系，掌握核心大数据，掌控企业命运！</div>
                        <router-link :to="{path: '/introduction'}">查看详情</router-link>
                    </div>
                </div>
            </pg-wrapper>
        </pg-layout>
        <pg-wrapper class="sell">
            <home-Title>新零售系统体系</home-Title>
            <div class="sell_content clearfix">
                <a href="javascript:void(0)" class="item item1">
                    <span class="top">
                        <span class="icon_box">
                            <img src="~assets/images/home_sell_icon1.png" alt="">
                        </span>
                        <p class="top_title p1">【供应端】供应管理</p>
                        <p class="p1">管理快速高校，财务一目了然</p>
                    </span>
                    <span class="top middle">
                        <p class="top_title">人，财，货管理</p>
                        <p>进销存，陪发货，管理快捷</p>   
                        <p>高效，财务一目了然</p>                     
                    </span>
                    <span class="top middle bottom">
                        <p class="top_title">供应链管理</p>
                        <p>覆盖主流外贸平台，订单管</p>   
                        <p>理快捷高效</p>
                        <router-link :to="{path: '/introduction'}">了解详情</router-link>                     
                    </span>                    
                </a>
                <a href="javascript:void(0)" class="item item2">
                    <span class="top">
                        <span class="icon_box">
                            <img src="~assets/images/home_sell_icon2.png" alt="">
                        </span>
                        <p class="top_title p1">【分销端】渠道管理</p>
                        <p class="p1">模式满足多行业需求, 主流电商平台全覆盖</p>
                    </span>
                    <span class="top middle">
                        <p class="top_title">全渠道管理</p>
                        <p>多级分销体系满足多种运营模</p>   
                        <p>式需求，可配置化灵活多变</p>                     
                    </span>
                    <span class="top middle bottom">
                        <p class="top_title">统一的体系</p>
                        <p>新零售标配载体与社交网络无</p>   
                        <p>理快捷高效</p>
                        <router-link :to="{path: '/wxb'}">了解详情</router-link>                      
                    </span>                    
                </a>
                <a href="javascript:void(0)" class="item item3">
                    <span class="top">
                        <span class="icon_box">
                            <img src="~assets/images/home_sell_icon3.png" alt="">
                        </span>
                        <p class="top_title p1">【零售端】零售管理</p>
                        <p class="p1">线上线下立体触达, 在店离店全网覆盖</p>
                    </span>
                    <span class="top middle">
                        <p class="top_title">线上拓展</p>
                        <p>把店铺开到云端，李店客户需</p>   
                        <p>求实时满足24小时不打烊</p>                     
                    </span>
                    <span class="top middle bottom">
                        <p class="top_title">线下服务</p>
                        <p>扫码收银不找零，智能盘点更</p>   
                        <p>轻松，营收情况随处可见</p>
                        <router-link :to="{path: '/estore'}">了解详情</router-link>                       
                    </span>                    
                </a>
                <a href="javascript:void(0)" class="item item4">
                    <span class="top">
                        <span class="icon_box">
                            <img src="~assets/images/home_sell_icon4.png" alt="">
                        </span>
                        <p class="top_title p1">【客户端】社群营销</p>
                        <p class="p1">全面构建会员体系，培养粉丝经济</p>
                    </span>
                    <span class="top middle">
                        <p class="top_title">社群服务口碑传播</p>
                        <p>营销工具运营服务全方位支持,</p>   
                        <p>使用简单快捷</p>                     
                    </span>
                    <span class="top middle bottom">
                        <p class="top_title">微场景</p>
                        <p>适应各种营销需求，场景化展</p>   
                        <p>示满足受众客群的感官需求</p>
                        <router-link :to="{path: '/eserver'}">了解详情</router-link>                      
                    </span>                    
                </a>                                 
            </div>
        </pg-wrapper> 
        <pg-layout class="character ">
            <pg-wrapper class="character_content ">
                <div class="title">优势&特色</div>
                <div class="nav">
                    <a href="javascript:void(0)" @click="navClick(1)">智能化</a>
                    <a href="javascript:void(0)" @click="navClick(2)">网络化</a>
                    <a href="javascript:void(0)" @click="navClick(3)">数据化</a>
                    <a href="javascript:void(0)" @click="navClick(4)">云服务</a>
                </div>
                <div class="nac_content clearfix">
                    <div class="left left_content">
                        <img src="~assets/images/home_character_01.png" v-if="navShow == 1" alt="">
                        <img src="~assets/images/home_character_02.png" v-if="navShow == 2" alt="">
                        <img src="~assets/images/home_character_03.png" v-if="navShow == 3" alt="">
                        <img src="~assets/images/home_character_04.png" v-if="navShow == 4" alt="">
                    </div>
                    <div class="left right_content">
                        <div class="text" v-if="navShow == 1" >
                            <p>【自动识别】</p>
                            自动识别客户基本属性，标记客户成熟度及消费路径，系统自主进行客户分层
                            <p>【自动提醒】</p>
                            当客户，事件状态触发或者进入到既定环节系统自动针对特定客户进行提醒通知
                            <p>【自动执行】</p>
                            当客户状态发生变更，触发特定事件，系统会自动执行营销内容及客户跟踪服务事件
                            <p>【自动分析】</p>
                            系统自动分析客户成熟度情况和营销结果，为运营提供最直接及时的营收报表参
                            <span></span>
                        </div>
                        <div class="text" v-if="navShow == 2" >实现跨平台互联，横向可使当前分散在各个平台的销售渠道连为一体，纵向可使线上线下整合、新物流消灭库存，减少囤货量<span></span></div>
                        <div class="text" v-if="navShow == 3" >通过数据的支撑来识别客户进行精准营销根据设定的营销方案，通过对内容的包装，对象的选择，渠道的细分实现自动化营销通过数据分析为运营决策提供可视化的参考基础<span></span></div>
                        <div class="text" v-if="navShow == 4" >围绕全渠道销售网络提供企业与客户相连所有需要用到的服务和工具，以最短路径和最有效方法迅速触达客户，服务客户；帮助企业做好品牌建设和获取用户等营销方案。<span></span></div>
                        <router-link :to="{path: '/register'}">申请试用</router-link>
                    </div>
                </div>
            </pg-wrapper>
        </pg-layout>      
        <pg-wrapper class="server">
            <home-Title>新零售服务</home-Title>
            <ul>
                <li>
                    <img src="~assets/images/server_01.png" alt="">
                    <div class="title">全渠道系统支持</div>
                    <div class="text">
                        <p>从供应端、商品进销存到分销渠道，</p>
                        <p>零售线下+线下渠道，实现进销存统一、</p>
                        <p>会员统一、数据精确并完整的沉淀</p>
                    </div>
                    <!-- <a href="javascript:void(0)">申请体验</a> -->
                    <router-link :to="{ path : '/register'}">申请体验</router-link>
                </li>
                <li>
                    <img src="~assets/images/server_02.png" alt="">
                    <div class="title">学院体系化培训</div>
                    <div class="text">
                        <p>构建完整的管理、设计模式和动销知识体系，</p>
                        <p>导师全程服务跟踪，为您解决操作中、</p>
                        <p>实际遇到的各类问题，全年可反复学习</p>
                    </div>
                    <!-- <a href="javascript:void(0)">预约报名</a> -->
                    <router-link :to="{ path : '/leagueApply?title=' + '报名申请'}">预约报名</router-link>
                </li>
                <li>
                    <img src="~assets/images/server_03.png" alt="">
                    <div class="title">企业生态联盟</div>
                    <div class="text">
                        <p>联合服务商、开发者、经营专家，</p>
                        <p>共建服务生态，服务好每个商家</p>
                    </div>
                    <router-link :to="{path: '/leagueApply'}">申请加盟</router-link>

                </li>                                
            </ul>
        </pg-wrapper>
        <pg-layout class="scheme">
            <pg-wrapper class="scheme_content">
                <div class=" content clearfix">
                    <a href="javascript:void(0)">
                        <div class="imgBox top">
                            <img src="~assets/images/home_fangan_01.png" alt="">
                            <div class="show"></div>
                        </div>
                        <div class="text_content">
                            <div class="title">电商行业应用场景</div>
                            <div class="text">提供商品、库存、多平台订单统一管理，客户统一等一体化的解决方案</div>
                        </div>
                    </a>
                    <a href="javascript:void(0)">
                        <div class="text_content top">
                            <div class="title">微商行业应用场景</div>
                            <div class="text">支持自有代理和返利模式、提供品牌、运营、团队管理、财务一体化的解决方案</div>
                        </div>
                        <div class="imgBox">
                            <img src="~assets/images/home_fangan_02.png" alt="">
                            <div class="show"></div>
                        </div>                        
                    </a>
                    <a href="javascript:void(0)">
                        <div class="imgBox top">
                            <img src="~assets/images/home_fangan_03.png"  alt="">
                            <div class="show"></div>
                        </div>
                        <div class="text_content">
                            <div class="title">零售行业应用场景</div>
                            <div class="text">提供线下线下渠道统一管理、统一库存、统一客户维护并精准服务的解决方案</div>
                        </div>
                    </a>
                </div>
            </pg-wrapper>
        </pg-layout>
        <pg-layout class="example">
            <pg-wrapper class="example_content">
                <home-Title>客户案例</home-Title>
                <div class="content">
                    <a href="javascript:void(0)">
                        <img src="~assets/images/custom_01.png" alt="">
                    </a>
                    <a href="javascript:void(0)">
                        <img src="~assets/images/custom_02.png" alt="">
                    </a>
                    <a href="javascript:void(0)">
                        <img src="~assets/images/custom_03.png" alt="">
                    </a> 
                    <a href="javascript:void(0)">
                        <img src="~assets/images/custom_04.png" alt="">
                    </a>
                    <a href="javascript:void(0)">
                        <img src="~assets/images/custom_05.png" alt="">
                    </a>
                    <a href="javascript:void(0)">
                        <img src="~assets/images/custom_06.png" alt="">
                    </a> 
                    <a href="javascript:void(0)">
                        <img src="~assets/images/custom_07.png" alt="">
                    </a>
                    <a href="javascript:void(0)">
                        <img src="~assets/images/custom_08.png" alt="">
                    </a>
                    <a href="javascript:void(0)">
                        <img src="~assets/images/custom_09.png" alt="">
                    </a> 
                    <a href="javascript:void(0)">
                        <img src="~assets/images/custom_10.png" alt="">
                    </a>                                                                                                   
                </div>
            </pg-wrapper>
        </pg-layout> 
        <pg-layout class="apply">
            <pg-wrapper class="apply_wrapper">
                <p>龙席网络 股票代码837912  总部设立于杭州</p>
                <p>在天津、广州、深圳、厦门等十地设立近千人运营及服务团队</p>
                <p>服务客户<span>3000+</span></p>
                <router-link :to="{path: '/register'}">申请试用</router-link>
            </pg-wrapper>
        </pg-layout>           
    </pg-layout>
    <!-- @mouseenter="navShow=true" @mouseleave="navShow=false" -->
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .home {
        .banner {
            position: relative;
            img {
                width: 100%;
            }
            .main {
                position: absolute;
                top:0;
                left: 0;
                right: 0;
                bottom: 0;
            }
            .content {
                position: absolute;
                top:50%;
                left:0;
                margin-top:-134px;
                //padding-top: 180px;
                .contents {
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
                    a {
                        margin-top: 40px;
                        display: inline-block;
                        color:#fff;
                        height: 50px;
                        line-height: 50px;
                        padding: 0 20px;
                        border: 1px solid #fff;
                        &:hover {
                            background-image: -webkit-gradient(linear, 0 0, right 0, from(red), to(#f28100));
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                        }
                    }
                }
            }
        }
        .sell {
            img {
                transition: all .6s;
                &:hover {
                    -ms-transform: scale(1.2);
                    -o-transform: scale(1.2);
                    -webkit-transform: scale(1.2);
                    -moz-transform: scale(1.2);
                    transform:scale(1.2);
                }
            }            
            padding-bottom: 100px;
            .sell_content {
                font-size: 0;
                position: relative;
                height: 465px;
                .item {
                    position: absolute;
                    top:30px;
                    display: inline-block;
                    width: 292px;  
                    border: 2px solid #f5f6f6;
                    margin-right: 2px;
                    &:hover {
                      border: 2px solid @primary-color; 
                      top:0;
                      .top {
                            background-color: @primary-color;
                            .p1 {
                                color:#fff;
                            }
                      } 
                      .middle {
                            background-color: #fff;
                      } 
                      .bottom {
                            background-color: #fff;
                            a {
                                display: inline-block;
                            }
                      }                                             
                    }
                    &:nth-of-type(4) {
                        margin-right: 0;
                    }
                    .top {
                        width: 272px; 
                        text-align: center;
                        background-color: #f5f6f6;
                        padding: 25px 10px;
                        display: inline-block;
                        line-height: 2;
                        .icon_box {
                            display: inline-block;
                            width: 60px;
                            height: 60px;
                            border-radius: 10px;
                            // background-image: url(~assets/images/home_sell_icon1.png);
                            img {
                                display: inline-block;
                                weidth: 60px;
                                height: 60px;
                                border-radius: 10px;
                            }
                        }
                        p {
                            font-size: 14px;
                            color: @explain-color;
                            line-height: 1.5;
                            margin:0;
                        }
                        .top_title {
                            font-size: 20px;
                            color:@title-color;
                        }
                    }
                    .middle {
                       text-align: left; 
                       text-indent: 50px;
                       background-color: #fff;
                    }
                    .bottom {
                        border-top: 1px solid #f5f6f6;
                        a {
                            display: none;
                            height: 50px;
                            line-height: 50px;
                            text-align: center;
                            text-indent: 0;
                            padding: 0 40px;
                            color:@primary-color;
                            border: 1px solid @primary-color;
                            font-size: 14px;
                            margin-left: 70px;
                            margin-top: 25px;
                        }
                    }

                }
                .item2 {
                    left: 297px;
                }
                .item3 {
                    right: 297px;
                }
                .item4 {
                    right: 0;
                }                                
            }
        }
        .character {
            img {
                transition: all .6s;
                &:hover {
                    transform:scale(1.2);
                }
            }            
            height: 740px;
            background-image: url(~assets/images/character.png);
            background-size: 100% 100%;
            .character_content {
                .title {
                    font-size: 30px;
                    color:#fff;
                    text-align: center;
                    padding: 100px 0 30px 0;
                }
                .nav {
                    text-align: center;
                    font-size: 0;
                    margin-bottom: 45px;
                    a {
                        font-size: 18px;
                        display: inline-block;
                        color: rgba(255,255,255,0.6);
                        border-right: 1px solid rgba(255,255,255,0.6);
                        padding: 0 30px;
                        &:hover {
                            color:@primary-color;
                        }
                        &:nth-of-type(4) {
                            border-right: none;
                        }
                    }
                }
                .nac_content {
                    .left_content {
                        width: 665px;
                        img {
                            display: inline-block;
                            width: 533px;
                            height: 478px;
                        }
                    }
                    .right_content {
                        width: 480px;
                        .text {
                            //margin-top: 100px;
                            margin-top: 30px;
                            background-color: #ffad08;
                            font-size: 16px;
                            color:#fff;
                            padding:35px 30px;
                            line-height: 1.5;
                            position: relative;
                            p {
                                margin: 0;
                                margin-bottom: 5px;
                            }
                            span {
                                position: absolute;
                                top:0;
                                left: -40px;
                                border-top:25px solid transparent;
                                border-left: 15px solid transparent;
                                border-right: 25px solid #ffad08;
                            }
                        }
                        a {
                            height: 50px;
                            line-height: 50px;
                            display: inline-block;
                            font-size: 16px;
                            color:#fff;
                            text-align: center;
                            padding: 0 40px;
                            border: 1px solid #fff;
                            margin-top: 20px;
                            &:hover {
                                color:@primary-color;
                            }
                        }

                    }
                }
            }
        }
        .server {
            img {
                transition: all .6s;
                &:hover {
                    -ms-transform: scale(1.2);
                    -o-transform: scale(1.2);
                    -webkit-transform: scale(1.2);
                    -moz-transform: scale(1.2);
                    transform:scale(1.2);
                }
            }            
            ul {
                font-size: 0;
                li {
                    display: inline-block;
                    width: 358px;
                    border: 1px solid #fff;
                    text-align: center;
                    overflow: hidden;
                    line-height: 1.5;
                    margin-right: 50px;
                    &:nth-of-type(3) {
                        margin-right: 0;
                    }
                    &:hover {
                        border: 1px solid @primary-color;
                    }
                    box-shadow: 0 0 30px #f3f3f3 ;                    
                    img {
                        display: inline-block;
                        width: 358px;
                    }
                    .title {
                        margin: 30px 0 5px 0;
                        font-size: 24px;
                        color: #333;
                    }
                    .text {
                        height: 63px;
                    }
                    p {
                        color:@explain-color;
                        font-size: 14px;
                        margin: 0;
                    }
                    a {
                        margin: 30px 0;
                        display: inline-block;
                        padding:0 40px;
                        line-height: 50px;
                        height: 50px;
                        border: 1px solid @primary-color;
                        color: @primary-color;
                        font-size: 20px;
                        &:hover {
                            color:#fff;
                            background-color: @primary-color;
                        }
                    }
                }
            }
        }
        .scheme {
            img {
                transition: all .6s;
                &:hover {
                    transform:scale(1.2);
                }
            }            
            height: 645px;
            background-color: #23252e;
            .content {
                overflow: hidden;
                a {
                    float: left;
                    margin-right: 4px;
                    &:nth-of-type(3) {
                        margin-right: 0;
                    }
                    &:hover {
                        .imgBox .show {
                            z-index: 10;
                        }
                        .text_content {
                             background-color: #808080;
                        }
                    }
                    .top {
                        margin-bottom: 4px;
                    }
                    .imgBox {
                        width: 394px;
                        height: 320px;
                        position: relative;
                        .show {
                            position: absolute;
                            z-index: -10;
                            top:0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background-color: #808080;
                            opacity: 0.9;
                        }
                        img {
                            display: inline-block;
                            width: 394px;
                            height: 320px;
                        }
                    }
                    .text_content {
                        //position: relative;
                        box-sizing: border-box;
                        width: 394px;
                        height: 320px;
                        padding: 90px 50px 20px 50px;
                        color:#fff;
                        background-color: @primary-color;
                        line-height: 1.5;
                        .title {
                            font-size: 24px;
                            margin-bottom: 35px;
                        }
                        .text {
                            font-size: 14px;
                        }
                    }
                }
            }
        }
        .example {
            img {
                transition: all .6s;
                &:hover {
                    transform:scale(1.2);
                }
            }            
            background-color: #f0f0f2;
            .example_content {
                .content {
                    padding-bottom: 80px;
                    font-size: 0;
                    a {
                        display: inline-block;
                        margin-bottom: 20px;
                        margin-right: 10px;
                        &:nth-of-type(5n) {
                            margin-right: 0;
                        }
                    }
                }
            }
        }
        .apply {
            height: 320px;
            background-image: url(~assets/images/home_regist_bg.png);
            background-size: 100% 100%;
            .apply_wrapper {
                color:#fff;
                text-align: center;
                font-size: 16px;
                padding-top: 90px;
                p {
                    margin: 0;
                    line-height: 1.5;
                    span {
                        color:#ffc600;
                    }
                }
                a {
                    display: inline-block;
                    margin-top: 25px;
                    color:#fff;
                    line-height: 50px;
                    height: 50px;
                    font-size: 20px;
                    border: 1px solid #f5f6f6;
                    padding: 0 40px;
                    &:hover {
                        color:@primary-color;
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