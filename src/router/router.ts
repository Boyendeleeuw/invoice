import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    }, {
        path: '/clients',
        name: 'ClientsOverview',
        component: () => import('@/views/clients/ClientsOverview.vue')
    }, {
        path: '/clients/add',
        name: 'ClientsAdd',
        component: () => import('@/views/clients/ClientsAdd.vue'),
    }, {
        path: '/invoices',
        name: 'InvoicesOverview',
        component: () => import('@/views/invoices/InvoicesOverview.vue'),
    }, {
        path: '/invoices/add',
        name: 'InvoicesAdd',
        component: () => import('@/views/invoices/InvoicesAdd.vue'),
    }, {
        path: '/settings',
        name: 'SettingsView',
        component: () => import('@/views/settings/SettingsView.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
