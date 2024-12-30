import {createWebHistory, createRouter} from 'vue-router'

import HomeView from '@/views/HomeView/index.vue'
import AboutView from '@/views/AboutView/index.vue'
import ManageView from '@/views/ManageView/index.vue'
import BasicLayout from "@/layouts/BasicLayout.vue";


const root = {
    path: '/',
    component: BasicLayout,
    redirect: '/home',

    children: [
        {
            path: '/home',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/user',
            name: 'user',
            component: () => import('@/views/UserInfoView/index.vue'),
        },
        {
            path: '/manage',
            name: 'manage',
            component: ManageView,
        }
    ]
};

const loginRoute  = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginView/index.vue'),
    }
]
const registerRoute  = [
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/RegisterView/index.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: [
        root,
        ...loginRoute,
        ...registerRoute,
    ]
});
export default router;
