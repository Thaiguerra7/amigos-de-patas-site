import { reactive } from 'vue';

const store = reactive({
    user: null,
    isAuthenticated: false,
    setUser(userData) {
        this.user = userData;
        this.isAuthenticated = true;
        localStorage.setItem('user', JSON.stringify(userData));
    },
    clearUser() {
        this.user = null;
        this.isAuthenticated = false;
        localStorage.removeItem('user');
    },
    loadUser() {
        const userData = localStorage.getItem('user');
        if (userData) {
            this.user = JSON.parse(userData);
            this.isAuthenticated = true;
        }
    }
});

export default store;