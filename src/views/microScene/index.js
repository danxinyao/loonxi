import { demo as ajax } from 'services'

export default {
    data() {
        return {
            title: 'microScene',
            showLive: true,
            showTrain: false,
            showRedpackage: false,
            showAntifake: false,
            showArrive: false,
            showLeave: false,
        }
    },
    mounted() {
        this.load()
    },
    watch: {
        '$route.query'() {
            this.load()
        }
    },
    methods: {
        tabAction(key){
            if(this[key]) return;
            this.showLive = false;
            this.showTrain = false;
            this.showRedpackage = false;
            this.showAntifake = false;
            this.showArrive = false;
            this.showLeave = false;
            this[key] = true;
            console.log(key)
            let search = key.slice(4).toLocaleLowerCase();
            history.replaceState({},"","?key="+search);
        },
        load(){
            let key = this.$route.query.key
            if(!key) return
            key = "show" + key.slice(0,1).toUpperCase() + key.slice(1)
            this.showLive = false
            this.showTrain = false
            this.showRedpackage = false
            this.showAntifake = false
            this.showArrive = false
            this.showLeave = false
            this[key] = true
        }
    }
}