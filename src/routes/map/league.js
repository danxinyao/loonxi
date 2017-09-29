const League = resolve => require(['views/league/index.vue'], resolve) // demo
const LeagueApply = resolve => require(['views/log/leagueApply/index.vue'], resolve) // 加盟申请

export default [
    {
        path: '/league',
        name: 'league',
        component: League,
        meta: {
            nav: 3,
            title: '加盟' // 网页标题
        }
    },
    {
        path: '/leagueApply',
        name: 'leagueApply',
        component: LeagueApply,
        meta: {
            title: '加盟申请' // 加盟申请
        }
    },
]