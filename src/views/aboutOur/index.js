//import { demo as ajax } from 'services'
import HomeTitle from './components/title/index.vue' // 标题


export default {
    components: {
        HomeTitle,
    },  
    data() {
        return {
            title: 'Demo'
        }
    },
    mounted() {
    },
    methods: {
        enter(val) {
            console.log(val)
        }
    }
}