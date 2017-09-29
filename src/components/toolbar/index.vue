<template>
    <div class="bg">
        <div class="item">
            <a href="javascript:void(0)" class="item1"></a>
        </div>
        <div class="item">
            <router-link :to="{path: '/leagueApply'}" class="item2"></router-link>
        </div>        
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .bg {
        position: fixed;
        top:375px;
        right:0;
        width: 310px;
        height: 200px;
        background-image: url(~assets/images/toolbar_bg.png);
        .item {
            width: 310px;
            height: 100px;
        }
        .item1 {
            height: 100px;
            width: 100px;
            display: block;
            float: right;
        }
        .item2{
            height: 100px;
            width: 100px;
            display: block;
            float: right;
        }        
    }   
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>