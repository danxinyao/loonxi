import { demo as ajax } from 'services'
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            title: 'Demo',
            msg:{
                sucees:'恭喜你注册成功！',
                message:'我们将很快为您服务'
            }
        }
    },
    computed: {
        ...mapGetters([
            'demoList'
        ]),
    },
    mounted() {
        //this.flag = this.$route.query.flag
        let flag = '1'
        if(flag =='1'){
            this.msg = {
                sucees:'恭喜你，注册成功',
                message:'我们将很快为您服务！'
            }
        } else {
            this.msg = {
                sucees:'恭喜你，加盟申请成功！',
                message:'我们将很快与您聊合作事宜！'
            }
        }
        this.requestDemo()
    },
    methods: {
        ...mapActions([
            'setDemo'
        ]),
        requestDemo() {
            //网络请求
            ajax.getDemoData((result) => {
                this.setDemo(result)
            })

            const result = [
                {
                    Name: 'aaa',
                    Age: '20'
                },
                {
                    Name: 'bbb',
                    Age: '21'
                },
                {
                    Name: 'ccc',
                    Age: '22'
                },
                {
                    Name: 'ddd',
                    Age: '23'
                }
            ]

            this.setDemo(result)
        },
        hud(status) {
            if (status == 'loading') {
                this.util.msg.loading()
                setTimeout(() => {
                    this.util.msg.close()
                }, 2000)
            }
            else if (status == 'success') {
                this.util.msg.success('正确')
            }
            else if (status == 'error') {
                this.util.msg.error('错误')
            }
            else {
                this.util.msg.close()
            }
        }
    }
}