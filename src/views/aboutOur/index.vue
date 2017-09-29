<template>
    <pg-layout class="aboutour">
        <pg-layout class="banner">
            <img src="~assets/images/our_banner.png" alt="">
        </pg-layout>
        <pg-wrapper class="content">
            <home-Title>关于龙席</home-Title>
            <div class="top">
                <p>杭州龙席网络科技股份有限公司（证券代码：837912）成立于2013年4月，总部位于杭州未来科技城，在全国十二个城市设有分支机构和研发团队、市场及服务运营团队。依托龙席实力团队的行业理解力、互联网创新能力和对B端、C端客户需求的深刻理解，主打业务涵盖供应链相关软件研发与服务、跨境社群电商整体解决方案、企业互联网战略规划及咨询服务和JU53分销平台等领域，累计服务企业上万家。龙席网络一直坚持“成就客户在互联网领域的新发展、新成功”为己任，致力于成为“让全世界的生意人和消费者都爱上未来龙席的产品和服务”的新一代互联网公司。</p>
                <p>龙席网络一直坚持“成就客户在互联网领域的新发展、新成功”为己任，致力于成为“让全世界的生意人和消费者都爱上未来龙席的产品和服务”的新一代互联网公司。</p>
            </div>
            <div class="middle">
                <div class="item item1">
                    <div class="title">龙席愿景</div>
                    <div class="text">让全世界的生意人和消费者都爱上未来龙席的产品和服务。</div>
                </div>
                <div class="item item2">
                    <div class="title">龙席使命</div>
                    <div class="text">成就客户在互联网领域的新发展、新成功。</div>
                </div>  
                <div class="item item3">
                    <div class="title">龙席价值观</div>
                    <div class="text">成就客户、艰苦奋斗、精益协作、诚信守正、拥抱变化、激情进取。</div>
                </div>                               
            </div>
            <div class="bottom">
                <home-Title>客户服务</home-Title>
                <div class="content">
                    <a href="javascript:void(0)">客服热线：4009615377（周一至周五：9：00-18：00）</a>
                    <a href="javascript:void(0)">客服邮箱：kefu@loonxi.com</a>
                    <a href="javascript:void(0)">杭州总部地址：杭州市余杭区高教路970号梦想 小镇e商村七号楼6-9楼</a>
                    <a href="javascript:void(0)">市场合作与联系、记者采访、约稿、广告、品牌联合、市场合作、互联网广告合作、网络联合活动等</a>
                    <a href="javascript:void(0)">邮箱：xiejuanjuan@loonxi.com</a>
                    <a href="javascript:void(0)">电话：0571-56583860</a>                    
                </div>
            </div>
        </pg-wrapper>                                                                        
    </pg-layout>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .aboutour {
        .banner {
            img {
                width: 100%;
            }
        }
        .content {  
            .top {
                font-size: 14px;
                color: @title-color;
                line-height: 1.5;
                padding: 40px 10px 60px 10px;
                p {
                    margin-top: 0;
                }
            }
            .middle {
                background-image: url(~assets/images/our_content_bg.png);
                height: 1120px;
                position: relative;
                .item {
                    position: absolute;
                    width: 255px;
                    color: @title-color;
                    font-size: 14px;
                    .title {
                        font-size: 24px;
                        line-height: 3;
                        display: inline-block;
                        border-bottom: 1px solid #bebebe;
                        background-image: -webkit-gradient(linear, 0 0, right 0, from(red), to(#f28100));
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;                        
                    }
                    .text {
                        line-height: 1.5;
                        margin-top: 20px;
                    }
                }
                .item1 {
                    top: 130px;
                    left: 700px;
                }
                .item2 {
                    top: 335px;
                    left: 750px;
                }
                .item3 {
                    top: 750px;
                    left: 300px;
                }                                
            }
            .bottom {
                padding-bottom: 100px;
               .content {
                    a {
                        display: block;
                        text-align: center;
                        font-size: 14px;
                        color:@title-color;
                        margin-bottom: 20px;
                        &:hover {
                            background-image: -webkit-gradient(linear, 0 0, right 0, from(red), to(#f28100));
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;                              
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