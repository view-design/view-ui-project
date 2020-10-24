import menu from "./views/menu.vue"
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
    },
    {
        path: '/menu',
        component: menu
    }
];
export default routers;