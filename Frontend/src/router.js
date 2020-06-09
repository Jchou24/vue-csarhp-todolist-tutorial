import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { GetURL } from '@/route/routeHelper.js'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: GetURL(''),
            name: 'Home',
            component: Home
        },{
            path: GetURL('Edit'),
            name: 'Edit',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Edit.vue')
        },{
            path: GetURL('NoBackendHome'),
            name: 'NoBackendHome',
            component: () => import('./views/NoBackendHome.vue')
        },{
            path: GetURL('NoBackendEdit'),
            name: 'NoBackendEdit',
            component: () => import('./views/NoBackendEdit.vue')
        },{ 
            path: "*", 
            name: 'PageNotFound',
            component: () => import('./views/PageNotFound.vue')
        }
    ]
})
