<template>
    <pg-layout class="estore">
        <pg-layout class="banner">
            <img src="~assets/images/estore_banner.png" alt="">
            <pg-wrapper class="content">
                <div class="contents">
                    <div class="title">龙席.智能云店+云POS</div>
                    <div class="text">全渠道线上线下一体营销解决方案</div>
                </div>
            </pg-wrapper>
        </pg-layout>
        <pg-wrapper class="shop">
            <div class="title">云店铺</div>
            <div class="small_title">对接微信公众号，在朋友圈开店</div>
            <div class="shop_content clearfix">
                <div class="left left_content">
                    <a href="javascript:void(0)"><span>√</span>无缝对接ERP、会员统一维护</a>
                    <a href="javascript:void(0)"><span>√</span>完整的线上购买流程和售后</a>
                    <a href="javascript:void(0)"><span>√</span>微信粘住粉丝、发展粉丝</a>
                    <a href="javascript:void(0)"><span>√</span>随时掌握销售数据</a>
                    <a href="javascript:void(0)"><span>√</span>丰富的会员营销方案</a>
                </div>
                <div class="right right_content">
                    <img src="~assets/images/estore_store_phone.png" alt="">
                </div>
            </div>
        </pg-wrapper> 
        <pg-layout class="hxgn">
            <pg-wrapper>
                <home-Title>核心功能</home-Title>
                <div class="hxgn_content">
                    <a href="javascript:void(0)">
                        <img src="~assets/images/eCommerce_two_core1.png" alt="">
                        <span>商品管理</span>
                    </a> 
                    <a href="javascript:void(0)">
                        <img src="~assets/images/eCommerce_two_core2.png" alt="">
                        <span>订单管理</span>
                    </a> 
                    <a href="javascript:void(0)">
                        <img src="~assets/images/eCommerce_two_core3.png" alt="">
                        <span>支付</span>
                    </a> 
                    <a href="javascript:void(0)">
                        <img src="~assets/images/estore_icon_04.png" alt="">
                        <span>扫码发货</span>
                    </a> 
                    <a href="javascript:void(0)">
                        <img src="~assets/images/estore_icon_05.png" alt="">
                        <span>会员管理</span>
                    </a> 
                    <a href="javascript:void(0)">
                        <img src="~assets/images/eCommerce_two_core5.png" alt="">
                        <span>售后处理</span>
                    </a>
                    <a href="javascript:void(0)">
                        <img src="~assets/images/estore_icon_07.png" alt="">
                        <span>会员优惠</span>
                    </a> 
                    <a href="javascript:void(0)">
                        <img src="~assets/images/eCommerce_two_core8.png" alt="">
                        <span>财务中心</span>
                    </a> 
                    <a href="javascript:void(0)">
                        <img src="~assets/images/estore_icon_09.png" alt="">
                        <span>数据统计</span>
                    </a>
                    <a href="javascript:void(0)">
                        <img src="~assets/images/estore_icon_10.png" alt="">
                        <span>消息推送</span>
                    </a>                                                                                                                                                                                                                                          
                </div>
            </pg-wrapper>
        </pg-layout>          
        <pg-wrapper class="gnld">
            <home-Title>功能亮点</home-Title>
            <div class="gnld_content">
                <div class="item1 clearfix">
                    <div class="left left_content">
                        <img src="~assets/images/estore_yd_phone.png" alt="">
                    </div>
                    <div class="left right_content">
                        <div class="right_title">云店</div>
                        <div class="text">云店是商品列表，商家用户可以在这个页面查看自己的所有商品。其次直播的入口，可以通过它直接进入直播页面与客户进行互动营销</div>
                    </div>
                </div>
                <div class="item2 clearfix">
                    <div class="right left_content">
                        <img src="~assets/images/estore_ll_phone.png" alt="">
                    </div>                    
                    <div class="right right_content">
                        <div class="right_title">聊聊</div>
                        <div class="text">云店设置是为商家用户设置个性化设置的页面。用户可以在这里设置云店的口号及LOGO等，还能装修，从而也能宣传自己店铺的品牌文化。</div>
                    </div>
                </div> 
                <div class="item3">
                    <img src="~assets/images/estore_phone_03.png" alt="">
                </div>               
            </div>
        </pg-wrapper>                                                            
    </pg-layout>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .estore {
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
                    width: 500px;
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
        .shop {
            padding: 90px 0;
            color:@title-color;
            .title {
                font-size: 30px;
                text-align: center;
                margin-bottom: 30px;
            }
            .small_title {
                font-size: 20px;
                text-align: center;
            }
            .shop_content {
                img {
                    transition: all .6s;
                    &:hover {
                        transform:scale(1.2);
                    }
                }                
                .left_content {
                    padding: 120px 0 0 180px;
                    a {
                        display: block;
                        color:@title-color;
                        font-size: 18px;
                        margin: 20px 0;
                        &:hover {
                            background-image: -webkit-gradient(linear, 0 0, right 0, from(red), to(#f28100));
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                        }
                        span {
                            color:#9ccc64;
                            margin-right: 20px;
                        }
                    }
                }
            }
        }
        .hxgn {
            background-color: #f7f7f7;
            padding-bottom: 40px;
            img {
                transition: all .6s;
                &:hover {
                    transform:scale(1.2);
                }
            }            
            .hxgn_content {
                padding: 0 80px;
                font-size: 0;
                a {
                    display: inline-block;
                    margin-bottom: 60px;
                    margin-right: 165px;
                    &:nth-of-type(5n) {
                        margin-right: 0;
                    }
                    &:hover {
                        span {
                            color:@primary-color;
                        }
                    }
                    span {
                        text-align: center;
                        margin-top: 20px;
                        display: block;
                        color:@title-color;
                        font-size: 18px
                    }
                }
            }
        }
        .gnld {
            .gnld_content {
                .left_content {
                    padding: 35px 5px 0 125px;
                }
                .right_content {
                    width: 375px;
                    .right_title {
                        font-size: 24px;
                        color: #24c4e0;
                        padding: 205px 0 32px 0;
                    }
                    .text {
                        font-size: 16px;
                        color:#8a8c99;
                        line-height: 2;
                    }
                }
                .item2 {
                    .left_content {
                        padding: 35px 125px 0 5px;
                    }
                }
                .item3 {
                    padding:85px 0;                  
                }
            }
        }
    }
    // img {
    //     transition: all .6s;
    //     &:hover {
    //         -ms-transform: scale(1.5);
    //         -o-transform: scale(1.5);
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