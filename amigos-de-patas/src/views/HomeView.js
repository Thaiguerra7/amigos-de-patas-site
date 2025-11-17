import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomeView = () => {
    return (
        <div>
            <Header />
            <main className="home-content">
                <h1>Bem-vindo à ONG Amigos de Patas!</h1>
                <p>Junte-se a nós na nossa missão de ajudar os animais.</p>
                <p>Explore nossos projetos e saiba como você pode contribuir.</p>
            </main>
            <Footer />
        </div>
    );
};

export default HomeView;