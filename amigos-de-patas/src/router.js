import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.js';
import CadastroView from './views/CadastroView.js';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/cadastro',
        name: 'cadastro',
        component: CadastroView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;