<template>
    <pg-layout class="header">
        <pg-wrapper></pg-wrapper>
    </pg-layout>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .header {
        height: 60px;
        background: #000;
    }
</style>

<script type="text/babel">
    export default {
        name: 'PgHeader'
    }
</script>