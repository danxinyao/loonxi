<template>
    <pg-layout class="footer">
        <pg-wrapper></pg-wrapper>
    </pg-layout>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .footer {
        height: 120px;
        background: #000;
    }
</style>

<script type="text/babel">
    export default {
        name: 'PgFooter'
    }
</script>