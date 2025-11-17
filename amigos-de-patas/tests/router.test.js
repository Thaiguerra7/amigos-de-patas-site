import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.js';
import CadastroView from '../views/CadastroView.js';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/cadastro',
        name: 'cadastro',
        component: CadastroView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

// Testes para o roteador
import { createRouter, createWebHistory } from 'vue-router';
import { mount } from '@vue/test-utils';
import HomeView from '../views/HomeView.js';
import CadastroView from '../views/CadastroView.js';
import router from '../router.js';

describe('Router', () => {
    it('navigates to home view', async () => {
        const wrapper = mount(HomeView, {
            global: {
                plugins: [router],
            },
        });
        await router.push('/');
        expect(wrapper.html()).toContain('Texto ou elemento específico da HomeView');
    });

    it('navigates to cadastro view', async () => {
        const wrapper = mount(CadastroView, {
            global: {
                plugins: [router],
            },
        });
        await router.push('/cadastro');
        expect(wrapper.html()).toContain('Texto ou elemento específico da CadastroView');
    });
});