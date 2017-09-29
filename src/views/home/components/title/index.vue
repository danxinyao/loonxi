<template>
	<pg-wrapper class="title">
        <slot></slot>
        <div class="line"></div>
	</pg-wrapper>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .title {
        padding: 95px 0 80px 0;
        text-align: center;
        font-size: 30px;
        color:@title-color;
        .line {
            margin: 0  auto;
            width: 35px;
            padding-top:40px;
            border-bottom: 1px solid #bebebe;
        }
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
