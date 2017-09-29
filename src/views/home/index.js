//import { demo as ajax } from 'services'
import HomeTitle from './components/title/index.vue' // 标题


export default {
	components: {
        HomeTitle,
	},	
    data() {
        return {
            navShow: 1,
        }
    },
    mounted() {
    },
    methods: {
        enter(val) {
            console.log(val)
        },
        //优势特色切换内容
        navClick(index) {
            this.navShow = index
        }
    }
}