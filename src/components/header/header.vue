<template>
    <pg-layout class="bg">
        <pg-wrapper class="header">
            <ul class="clearfix">           
                <li class="logo">
                    <img src="~assets/images/logo.png" height="60" width="90" alt="">
                </li>
                <li :class="{'active': currentNav == 0}">
                    <router-link :to="{ path : '/home'}">首页</router-link>
                </li>  
                <li class="server" :class="{'active': currentNav == 1}" @mouseenter="navShowServer=true" @mouseleave="navShowServer=false">
                    <router-link :to="{ path : '/introduction'}">产品服务</router-link>
                    <div class="sanjiao" v-if="navShowServer"></div>
                    <div class="content clearfix" v-if="navShowServer">
                        <div class="item">
                            <div class="title">产品</div>
                            <router-link :to="{ path: '/introduction'}">新零售系统</router-link>
                            <router-link :to="{ path: '/wxb'}">微销宝</router-link>
                            <router-link :to="{ path: '/estore'}">云店铺</router-link>
                        </div>
                        <div class="item">
                            <div class="title">解决方案</div>
                            <router-link :to="{ path: '/eCommerce'}">电商行业解决方案</router-link>
                            <router-link :to="{ path: '/derivative'}">微商行业解决方案</router-link>
                            <router-link :to="{ path: '/retail'}">零售行业解决方案</router-link>                            
                        </div>
                        <div class="item">
                            <div class="title">云服务</div>
                            <router-link class="nav" :to="{ path: '/eserver'}">
                                <img src="~assets/images/home_header1.png" alt="">
                            </router-link>
                        </div>                                                
                    </div>
                </li>
                <li class="changjing" :class="{'active': currentNav == 2}" @mouseenter="navShowChangjing=true" @mouseleave="navShowChangjing=false">
                    <router-link :to="{ path : '/microscene'}">应用场景</router-link>
                    <div class="sanjiao" v-if="navShowChangjing"></div>
                    <div class="content clearfix" v-if="navShowChangjing">
                        <router-link :to="{ path: '/microscene?key=live'}">
                            <img src="~assets/images/home_header2_01.png" alt="">
                            <p>视频直播</p>                            
                        </router-link> 
                        <router-link :to="{ path: '/microscene?key=train'}">
                            <img src="~assets/images/home_header2_02.png" alt="">
                            <p>培训应用</p>                            
                        </router-link>  
                        <router-link :to="{ path: '/microscene?key=redpackage'}">
                            <img src="~assets/images/home_header2_03.png" alt="">
                            <p>微信红包</p>                            
                        </router-link> 
                        <router-link :to="{ path: '/microscene?key=antifake'}">
                            <img src="~assets/images/home_header2_04.png" alt="">
                            <p>防伪溯源</p>                            
                        </router-link> 
                        <router-link :to="{ path: '/microscene?key=arrive'}">
                            <img src="~assets/images/home_header2_05.png" alt="">
                            <p>会员到店</p>                            
                        </router-link>  
                        <router-link :to="{ path: '/microscene?key=leave'}">
                            <img src="~assets/images/home_header2_06.png" alt="">
                            <p>会员离店</p>                            
                        </router-link>                                                                                                                                                                                                  
                    </div>                    
                </li>  
                <li :class="{'active': currentNav == 3}">
                    <router-link :to="{ path : '/league'}">加盟</router-link>
                </li>   
                <li>
                    <router-link :to="{ path : '/home'}">新零售学院</router-link>
                </li> 
                <li class="apply">
                    <router-link :to="{ path : '/register'}">申请试用</router-link>
                </li>                  
                <li class="gupiao">
                    <span>股票代码:837912</span>
                </li>                                                                                                                
            </ul>
        </pg-wrapper>
    </pg-layout>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .bg {
        height: 60px;
        background: @text-color;
        .header {
            ul {
                height: 60px;
                li {
                    display: inline-block;
                    padding: 0 22px;
                    &:hover, &.active {
                        a {
                            color: @primary-color;
                        }
                    }
                    img {
                        display: inline-block;
                        width: 90px;
                        height: 60px;
                        vertical-align: middle;
                    }
                    a {
                        display: inline-block;
                        line-height: 60px;
                        font-size: 16px;
                        color:rgba(255,255,255,0.5);
                    }
                    span {
                        line-height: 60px;
                        font-size: 16px;
                        color:rgba(255,255,255,0.5);
                    }
                }
                .logo {
                    padding: 0 110px 0 0;
                }
                .gupiao {
                    float: right;
                    padding: 0;
                    margin-right: 30px;
                }
                .apply {
                    float: right;
                    padding: 0;
                    a {
                        color: #fff;
                        padding: 0 20px;
                        font-size: 14px;
                        height: 35px;
                        line-height: 35px;
                        background-color: #ffad08;
                        margin-top: 12px;
                        &:hover {
                            color: rgba(255, 255, 255, 0.6)
                        }
                    }
                }  
                .server{
                   position: relative;
                   .sanjiao {
                    position: absolute;
                    z-index: 1;
                    top:50px;
                    left: 45px;
                    border-bottom: 10px solid #fff;
                    border-left: 8px solid transparent;
                    border-right: 8px solid transparent;
                   }
                   .content {
                    position: absolute;
                    top:60px;
                    left: -80px;
                    z-index:1;
                    padding:30px;
                    width: 385px;
                    height: 100px;
                    background-color: #fff;
                    .item {
                        width: 108px;
                        float: left;
                        margin-right: 30px;
                        &:last-of-type {
                            margin-right: 0;
                        }
                        .title {
                            font-size: 16px;  
                            border-bottom: 1px solid #ccc;
                            padding-bottom: 8px;
                            margin-bottom: 10px;
                        }
                        .nav {
                            display: block;
                            width: 108px;
                            height: 65px;
                            img {
                                display: inline-block;
                                width: 108px;
                                height: 65px;
                            }
                        }
                        a {
                            display: block;
                            color: #999;
                            font-size: 12px;
                            line-height: 2;
                            &:hover {
                                color:@primary-color;
                            }
                        }
                    }
                   } 
                }
                .changjing{
                   position: relative;
                   .sanjiao {
                    position: absolute;
                    z-index: 1;
                    top:50px;
                    left: 45px;
                    border-bottom: 10px solid #fff;
                    border-left: 8px solid transparent;
                    border-right: 8px solid transparent;
                   }
                   .content {
                        position: absolute;
                        top:60px;
                        left: -193px;
                        z-index:1;
                        padding:30px 30px 10px 30px;
                        width: 385px;
                        //height: 100px;
                        background-color: #fff;
                        font-size: 0;
                        a  {
                            display: inline-block;
                            width: 107px;
                            margin-right: 27px;
                            padding-bottom: 20px;
                            &:hover {
                                p {
                                    color:@primary-color;
                                }
                            }
                            &:nth-of-type(3n) {
                                margin-right: 0;
                            }
                            img {
                                width: 107px;
                                height: 65px;
                                display: inline-block;
                            }
                            p {
                                color:@title-color;
                                font-size: 14px;
                                text-align: center;
                                margin: 0;
                                margin-top: 10px;
                                line-height: 1;
                            }
                        }
                   } 
                }                                
            }
        }
    }
</style>

<script type="text/babel">
    export default {
        name: 'PgHeader',
        data() {
            return {
                navShowServer: false,
                navShowChangjing: false,
                currentNav: 0
            }
        },
        watch: {
            '$route'(to, from) {
                this.currentNav = to.meta.nav
            }
        },
        methods: {
            sceneEnter(){
                if(/microscene/gi.test(location.href)) return;
                this.navShowChangjing = true;
            }
        }
    }
</script>