import React from 'react';
import CadastroForm from '../components/form/CadastroForm';

const CadastroView = () => {
    return (
        <div className="cadastro-view">
            <h1 className="text-4xl font-extrabold text-center mb-4">Cadastre-se</h1>
            <p className="text-center mb-8">Preencha o formulário abaixo para se tornar um voluntário ou apoiador.</p>
            <CadastroForm />
        </div>
    );
};

export default CadastroView;