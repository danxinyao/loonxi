<template>
    <pg-layout class="footer">
        <pg-wrapper>
            <p>百图之上位，业内之首席， 成就客户在互联网领域的新发展、新成功</p>
            <p>©2013-2016 LOONXI.COM 版权所有 杭州龙席网络科技股份有限公司 浙ICP备13021125号-5</p>
            <p class="link">
                <router-link :to="{ path : '/aboutour'}" style="margin-right:25px;">关于龙席</router-link>
                <router-link :to="{ path : '/home'}">龙席官网</router-link>
            </p>
        </pg-wrapper>
    </pg-layout>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .footer {
        padding: 60px 0 55px 0;
        font-size: 0px;
        background: @text-color;
        text-align: center;
        a,p {
            margin: 0;
            line-height: 1.5;
            font-size: 12px;
            color: rgba(255,255,255,0.6);
            background: @text-color;            
        }
        .link {
            padding-top: 20px;
            margin: 0;
            a:hover {
                color: rgba(36,196,225,0.6);
            }

        }
    }
</style>

<script type="text/babel">
    export default {
        name: 'PgFooter'
    }
</script>