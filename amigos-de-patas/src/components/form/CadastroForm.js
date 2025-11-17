import React, { useState } from 'react';
import { validateForm } from './validation';
import { saveToLocalStorage } from '../../utils/storage';

const CadastroForm = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        dataNascimento: '',
        cpf: '',
        telefone: '',
        endereco: '',
        cep: '',
        cidade: '',
        estado: '',
        mensagem: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            saveToLocalStorage('cadastro', formData);
            alert('Cadastro realizado com sucesso!');
            setFormData({
                nome: '',
                email: '',
                dataNascimento: '',
                cpf: '',
                telefone: '',
                endereco: '',
                cep: '',
                cidade: '',
                estado: '',
                mensagem: ''
            });
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-2xl space-y-6">
            <fieldset className="border border-blue-400 p-6 rounded-lg space-y-4">
                <legend className="text-xl font-bold text-blue-700 px-2">Dados Pessoais</legend>
                <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                    <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required
                           className={`w-full border ${errors.nome ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                    {errors.nome && <p className="text-red-500 text-sm">{errors.nome}</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                               className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="dataNascimento" className="block text-sm font-medium text-gray-700 mb-1">Data de Nascimento</label>
                        <input type="date" id="dataNascimento" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} required
                               className={`w-full border ${errors.dataNascimento ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                        {errors.dataNascimento && <p className="text-red-500 text-sm">{errors.dataNascimento}</p>}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">CPF</label>
                        <input type="text" id="cpf" name="cpf" value={formData.cpf} onChange={handleChange} required
                               className={`w-full border ${errors.cpf ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                        {errors.cpf && <p className="text-red-500 text-sm">{errors.cpf}</p>}
                    </div>
                    <div>
                        <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                        <input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} required
                               className={`w-full border ${errors.telefone ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                        {errors.telefone && <p className="text-red-500 text-sm">{errors.telefone}</p>}
                    </div>
                </div>
            </fieldset>
            <fieldset className="border border-blue-400 p-6 rounded-lg space-y-4">
                <legend className="text-xl font-bold text-blue-700 px-2">Endereço</legend>
                <div>
                    <label htmlFor="endereco" className="block text-sm font-medium text-gray-700 mb-1">Endereço (Rua, Número, Bairro)</label>
                    <input type="text" id="endereco" name="endereco" value={formData.endereco} onChange={handleChange} required
                           className={`w-full border ${errors.endereco ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                    {errors.endereco && <p className="text-red-500 text-sm">{errors.endereco}</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="cep" className="block text-sm font-medium text-gray-700 mb-1">CEP</label>
                        <input type="text" id="cep" name="cep" value={formData.cep} onChange={handleChange} required
                               className={`w-full border ${errors.cep ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                        {errors.cep && <p className="text-red-500 text-sm">{errors.cep}</p>}
                    </div>
                    <div>
                        <label htmlFor="cidade" className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
                        <input type="text" id="cidade" name="cidade" value={formData.cidade} onChange={handleChange} required
                               className={`w-full border ${errors.cidade ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                        {errors.cidade && <p className="text-red-500 text-sm">{errors.cidade}</p>}
                    </div>
                    <div>
                        <label htmlFor="estado" className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                        <select id="estado" name="estado" value={formData.estado} onChange={handleChange} required
                                className={`w-full border ${errors.estado ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500`}>
                            <option value="" disabled>Selecione</option>
                            <option value="SP">São Paulo</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PR">Paraná</option>
                            <option value="BA">Bahia</option>
                        </select>
                        {errors.estado && <p className="text-red-500 text-sm">{errors.estado}</p>}
                    </div>
                </div>
            </fieldset>
            <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">Como você gostaria de ajudar? (Opcional)</label>
                <textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleChange} rows="4"
                          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition duration-200 shadow-md">
                Enviar Cadastro Completo
            </button>
        </form>
    );
};

export default CadastroForm;