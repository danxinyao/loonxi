<template>
    <pg-layout>
        <div class="banner">
            <div>
                <p class="t1">全渠道、新零售、大数据，与我们携手服务万亿市场</p>
                <p class="t2">诚邀合作伙伴一起构建企业大生态</p>
                <router-link  class="a" :to="{path: '/leagueApply'}">申请加盟</router-link>
            </div>
        </div>
        <div class="part_block">
            <div class="part_box">
                <p class="title">新零售系统-开放</p>
                <span class="line"></span>
                <ul class="list1">
                    <li>
                        <span>全方位服务</span>
                        <p>开放龙席新零售系统，合作伙伴，企业都可以接入自己的产品服务一起为企业提供全方位的服务</p>
                    </li>
                    <li>
                        <span>大数据支持</span>
                        <p>企业可通过新零售系统构建自身的销售网络与营销体系，为企业运营提供大数据支持</p>
                    </li>
                    <li>
                        <span>企业生态圈</span>
                        <p>企业之间可互通有无相互开放供应链端口形成异业联盟，荣誉行业生态圈</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="part_block c1">
            <div class="part_box">
                <p class="title">客户资源-共享</p>
                <span class="line"></span>
                <p class="text">龙席销售团队近千人，服务客户数万家！服务品牌商数千家；</br>我们将全面开放系统为其提供整体解决方案，与合作伙伴一道为企业提供更全面，更立体的技术支持与运营服务，提供更智能化的大数据分析与预测服务</p>
                <ul class="list2">
                    <li><img src="../../assets/images/custom_01.png" alt=""></li>
                    <li><img src="../../assets/images/custom_02.png" alt=""></li>
                    <li><img src="../../assets/images/custom_03.png" alt=""></li>
                    <li><img src="../../assets/images/custom_04.png" alt=""></li>
                    <li><img src="../../assets/images/custom_05.png" alt=""></li>
                    <li><img src="../../assets/images/custom_06.png" alt=""></li>
                    <li><img src="../../assets/images/custom_07.png" alt=""></li>
                    <li><img src="../../assets/images/custom_08.png" alt=""></li>
                    <li><img src="../../assets/images/custom_09.png" alt=""></li>
                    <li><img src="../../assets/images/custom_10.png" alt=""></li>
                </ul>
            </div>
        </div>
        <div class="part_block">
            <div class="part_box">
                <p class="title">系统服务-互联</p>
                <span class="line"></span>
                <ul class="list3">
                    <li>
                        <i></i>
                        <p>在统一的架构下我们整体又独立，在确保资源整合做到1+1大于2的前提下，又能保证各自独立的发展。</p>
                    </li>
                    <li>
                        <i></i>
                        <p>客户可根据自身的情况灵活选择，使其价值最大化，符合自身利益。</p>
                    </li>
                    <li>
                        <i></i>
                        <p>再也不用担心多家系统服务不兼容，企业各版块管理混乱的问题。</p>
                    </li>
                </ul>
            </div>
        </div>
    </pg-layout>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';

    .banner{
        background: url("../../assets/images/league/banner_1.jpg") no-repeat center 0;
        height: 600px;
        text-align: center;
        color: #fff;
        div{
            background: url("../../assets/images/league/banner_2.jpg") no-repeat center 0;
            width: 1190px;
            height: 600px;
            padding-top: 195px;
            margin: 0 auto;
        }
        .t1{
            font-size: 20px;
        }
        .t2{
            margin: 25px 0 50px;
            font-size: 36px;
        }
        .a{
            display: block;
            width: 138px;
            height: 48px;
            margin: 0 auto;
            border: 1px solid #fff;
            color: #fff;
            font-size: 20px;
            text-align: center;
            line-height: 48px;
            &:hover{
                background: #9a9090;
            }
        }
    }

    .part_block{
        padding: 100px 0;
        font-size: 16px;
        color: #333;
        &.c1{
            background: #f0f0f2;
        }
    }

    .part_box{
        width: 1190px;
        margin: 0 auto;
        .title{
            font-size: 30px;
            text-align: center;
        }
        .line{
            display: block;
            background: #bebebe;
            width: 32px;
            height: 2px;
            margin: 30px auto;
        }
    }
    .list1{
        margin-top: 80px;
        margin-right: -55px;
        overflow: hidden;
        li{
            float: left;
            width: 358px;
            margin-right: 55px;
            border: 1px solid #bebebe;
            &:nth-child(1){
                border-top: 5px solid #06c9ec;
                span{
                    color: #06c9ec;
                }
            }
            &:nth-child(2){
                border-top: 5px solid #ff8a50;
                span{
                    color: #ff8a50;
                }
            }
            &:nth-child(3){
                border-top: 5px solid #8e85ff;
                span{
                    color: #8e85ff;
                }
            }
            span{
                display: block;
                height: 88px;
                border-bottom: 1px solid #bebebe;
                line-height: 88px;
                font-size: 24px;
                text-align: center;
            }
            p{
                height:140px;
                padding: 35px 60px 0;
                margin: 0;
                line-height: 28px;
            }
        }
    }

    .text{
        margin-bottom: 55px;
        line-height: 30px;
        text-align: center;
    }

    .list2{
        margin: 0 -15px -15px 0;
        overflow: hidden;
        li{
            float: left;
            margin: 0 15px 15px 0;
        }
        img{
            display: block;
        }
    }

    .list3{
        margin-right: -55px;
        overflow: hidden;
        li {
            float: left;
            width: 358px;
            height: 358px;
            margin-right: 55px;
            border: 1px solid #bebebe;
            border-radius: 180px;
            &:nth-child(2){
                i{
                    background-position: 0 -100px;
                }
            }
            &:nth-child(3){
                i{
                    background-position: 0 -200px;
                }
            }
        }
        i{
            display: block;
            background: url("../../assets/images/league/sprites.jpg") no-repeat;
            width: 100px;
            height:100px;
            margin: 78px auto 30px;
        }
        p{
            padding: 0 55px;
            line-height: 24px;
        }
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>