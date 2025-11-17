import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">ONG Amigos de Patas</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="hover:underline">Início</Link>
                        </li>
                        <li>
                            <Link to="/cadastro" className="hover:underline">Cadastre-se</Link>
                        </li>
                        <li>
                            <Link to="/projetos" className="hover:underline">Projetos Sociais</Link>
                        </li>
                        <li>
                            <Link to="/contato" className="hover:underline">Contato</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;