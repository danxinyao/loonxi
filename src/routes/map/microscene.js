const MicroScene = resolve => require(['views/microScene/index.vue'], resolve) // demo


export default [
    {
        path: '/microscene',
        name: 'microScene',
        component: MicroScene,
        meta: {
            nav: 2,
            title: '应用场景' // 网页标题
        }
    }
]