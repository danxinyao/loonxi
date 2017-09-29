<template>
    <pg-layout>
       <div class="main">
           <div class="registerForm">
               <h2 class="title">{{$route.query.title ? $route.query.title : '加盟申请'}}</h2>
               <ul>
                   <li class="name"><input placeholder="请输入您的名字"/></li>
                   <li class="phone">
                       <input  class="mobel" placeholder="请输入你的手机号码"/><input class="judgeN" placeholder="请输入验证码"/><a>发送验证码</a>
                    </li>
                   <li class="name"><input placeholder="请输入您的公司名称"/></li>
                   <li class="place"><input placeholder="省"/><input placeholder="市"/><input placeholder="区"/></li>
                   <li class="submit"><a>提交</a></li>
               </ul>
           </div>
       </div>
    </pg-layout>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .main{
        width: 100%;
        height: 670px;
        background: url('~assets/images/leagueApply_bg.jpg') 100% no-repeat;
        padding-top: 100px;
        .registerForm{
            height: 420px;
            width: 545px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            padding: 45px 50px;
            color: #999;
            font-size: 16px;
            input{
                border:1px solid #cccccc;
                height: 16px;
                padding: 17px 13px;
            }
            .title{
                font-size: 31px;
                color: #45c7e2;
                text-align: center;
                margin-top: 0;
            }
            ul{
                li{
                    margin-bottom: 20px;
                }
                .name{
                    input{
                        width: 514px;
                    }

                    select{
                        color: #999;
                        padding: 17px 13px;
                        font-size: 16px;
                        width: 542px;
                        height: 53px;
                        border: solid 1px #cccccc;
                        /*很关键：将默认的select选择框样式清除*/
                        appearance:none;
                        -moz-appearance:none;
                        -webkit-appearance:none;
                        /*在选择框的最右侧中间显示小箭头图片*/
                        background: url("~assets/images/select.png") no-repeat center;
                        background-position: 506px;
                        padding-right: 14px;
                    }
                }
                .phone{
                    .mobel{
                        width: 212px;
                        margin-right: 15px;
                    }
                    .judgeN{
                        margin-right: 15px;
                        width: 122px;
                    }
                    a{
                        display: block;
                        float: right;
                        width: 120px;
                        background: #45c7e2;
                        height: 52px;
                        color: white;
                        line-height: 50px;
                        text-align: center;
                    }
                }
                .place{
                    input{
                        width: 142px;
                        margin-right: 15px;
                    }
                    input:last-child{
                         margin-right:0px;
                    }
                }
                .submit{
                    margin-top: 40px;
                    a{
                        display: inline-block;
                        width: 100%;
                        background: #45c7e2;
                        height: 50px;
                        color: white;
                        line-height: 50px;
                        text-align: center;
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