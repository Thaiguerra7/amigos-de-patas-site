// src/app.js

import { createStore } from './store/index.js';
import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderHomeView } from './views/HomeView.js';
import { renderCadastroView } from './views/CadastroView.js';
import { setupRouter } from './router.js';
import { loadFromStorage } from './utils/storage.js';

const store = createStore();

function init() {
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = '';

    renderHeader(appContainer);
    setupRouter(appContainer, store);
    renderHomeView(appContainer, store);

    renderFooter(appContainer);
}

window.addEventListener('DOMContentLoaded', () => {
    const initialData = loadFromStorage('appData');
    if (initialData) {
        store.setState(initialData);
    }
    init();
});

export { store };