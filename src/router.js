import menu from "./views/menu.vue"
import layout from "./views/layout.vue"
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
    },
    {
        path: '/layout',
        component: layout
    }
];
export default routers;