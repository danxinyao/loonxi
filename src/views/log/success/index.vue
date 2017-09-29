<template>
    <pg-layout>
        <pg-wrapper class="content">
            <div class="msgContent">
                <img src="~assets/images/success.png">
                <span class="msg">
                    <p>{{msg.sucees}}</p>
                    <p>{{msg.message}}</p>
                </span>
            </div>
        </pg-wrapper>
    </pg-layout>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .content {
        height: 465px;
        padding-top: 305px;
        .msgContent {
            width: 225px;
            height: 125px;
            margin: auto;
            font-size: 20px;
            img{
                display: block;
                margin: 0 auto;
            }
            text-align: center
        }
    }
    
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>