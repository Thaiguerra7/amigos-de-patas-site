import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white mt-8 py-4">
            <div className="max-w-7xl mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} ONG Amigos de Patas. Todos os direitos reservados.</p>
                <div className="mt-2">
                    <a href="/sobre" className="text-gray-400 hover:text-white mx-2">Sobre</a>
                    <a href="/contato" className="text-gray-400 hover:text-white mx-2">Contato</a>
                    <a href="/politica-de-privacidade" className="text-gray-400 hover:text-white mx-2">Política de Privacidade</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;