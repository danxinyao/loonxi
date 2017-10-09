<template>
    <pg-layout>
        <pg-wrapper>
            <div class="title">
                列表渲染
            </div>
            <pg-demo :title="title" :list="demoList"></pg-demo>
            <div class="title">
                Icon
            </div>
            <div>
                <pg-icon name="zhengquetishi"></pg-icon>
            </div>
            <div class="title">
                提示信息dan
            </div>
            <div>
                <a href="javascript:void(0)" @click="hud('loading')">加载中</a>
                <a href="javascript:void(0)" @click="hud('success')">成功</a>
                <a href="javascript:void(0)" @click="hud('error')">错误</a>
            </div>
        </pg-wrapper>
    </pg-layout>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .title {
        font-size: 30px;
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
