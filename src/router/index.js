import Vue from 'vue';
import VueRouter from 'vue-router';
import Pages from '../Pages/pages.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Pages,
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: 'dashboard' */ '../Pages/Dashboard')
            },
        {
            path: '',
            component: () => import(/* webpackChunkName: 'clients' */ '../Pages/Clients')
        },
        {
            path: '',
            component: () => import(/* webpackChunkName: 'campaigns' */ '../Pages/Campaigns')
        },
        {
            path: '',
            component: () => import(/* webpackChunkName: 'audience' */ '../Pages/Audience')
        },
        {
            path: '',
            component: () => import(/* webpackChunkName: 'games' */ '../Pages/Games')
        },
        {
            path: '',
            component: () => import(/* webpackChunkName: 'redemption' */ '../Pages/Redemption')
        },
        ]
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

export default router