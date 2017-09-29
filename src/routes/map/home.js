/*
* @Author: danxinwu
* @Date:   2017-09-26 17:22:18
* @Last Modified by:   danxinwu
* @Last Modified time: 2017-09-29 10:00:03
*/
const Home = resolve => require(['views/home/index.vue'], resolve) // home
const Wxb = resolve => require(['views/wxb/index.vue'], resolve) // 微销宝
const Introduction = resolve => require(['views/introduction/index.vue'], resolve) // 新零售系统
const Estore = resolve => require(['views/eStore/index.vue'], resolve) // 云店铺
const Eserver = resolve => require(['views/eServer/index.vue'], resolve) // 云服务
const Aboutour = resolve => require(['views/aboutOur/index.vue'], resolve) // 关于我们


export default [
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            nav: 0,
            title: '首页' // 网页标题
        }
    },
    {
        path: '/wxb',
        name: 'wxb',
        component: Wxb,
        meta: {
            nav: 1,
            title: '微销宝'
        }
    },
    {
        path: '/introduction',
        name: 'introduction',
        component: Introduction,
        meta: {
            nav: 1,
            title: '新零售系统'
        }
    }, 
    {
        path: '/estore',
        name: 'estore',
        component: Estore,
        meta: {
            nav: 1,
            title: '云店铺'
        }
    },
    {
        path: '/eserver',
        name: 'eserver',
        component: Eserver,
        meta: {
            nav: 1,
            title: '云服务'
        }
    },   
    {
        path: '/aboutour',
        name: 'aboutour',
        component: Aboutour,
        meta: {
            title: '关于我们'
        }
    },               
]