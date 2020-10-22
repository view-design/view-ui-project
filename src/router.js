const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/button',
        component: (resolve) => require(['./views/i-button.vue'], resolve)
    }
];
export default routers;