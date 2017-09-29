const register = resolve => require(['views/log/register/index.vue'], resolve) // register
const success = resolve => require(['views/log/success/index.vue'], resolve) // success

export default [
    {
        path: '/register',
        name: 'register',
        component: register,
        meta: {
            title: '注册' // register
        }
    },
    {
        path: '/success',
        name: 'success',
        component: success,
        meta: {
            title: '成功' // register
        }
    },
]