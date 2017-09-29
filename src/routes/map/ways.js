/*
* @Author: xujingwei
* @Date:   2017-09-27 09:48:18
* @Last Modified by:   xujingwei
* @Last Modified time: 2017-09-26 17:23:12
*/
const derivativeWays = resolve => require(['views/derivativeWays/index.vue'], resolve) // 微商解决方案
const eCommerce = resolve => require(['views/eCommerce/index.vue'], resolve) // 电商解决方案
const retail = resolve => require(['views/retail/index.vue'], resolve) // 零售行业解决方案

export default [
    {
        path: '/derivative',
        name: 'derivative',
        component: derivativeWays,
        meta: {
            nav: 1,
            title: '微商行业解决方案' // 微商解决方案
        }
    },
    {
        path: '/eCommerce',
        name: 'eCommerce',
        component: eCommerce,
        meta: {
            nav: 1,
            title: '电商行业解决方案' // 微商解决方案
        }
    },
    {
        path: '/retail',
        name: 'retail',
        component: retail,
        meta: {
            nav: 1,
            title: '零售行业解决方案' // 零售行业解决方案
        }
    },
]