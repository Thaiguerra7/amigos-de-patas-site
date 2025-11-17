const API_URL = 'https://api.example.com'; // Substitua pela URL da sua API

// Função para fazer uma requisição GET
export const fetchData = async (endpoint) => {
    try {
        const response = await fetch(`${API_URL}/${endpoint}`);
        if (!response.ok) {
            throw new Error(`Erro ao buscar dados: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Erro na requisição GET:', error);
        throw error;
    }
};

// Função para fazer uma requisição POST
export const postData = async (endpoint, data) => {
    try {
        const response = await fetch(`${API_URL}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`Erro ao enviar dados: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Erro na requisição POST:', error);
        throw error;
    }
};

// Função para fazer uma requisição PUT
export const updateData = async (endpoint, data) => {
    try {
        const response = await fetch(`${API_URL}/${endpoint}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`Erro ao atualizar dados: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Erro na requisição PUT:', error);
        throw error;
    }
};

// Função para fazer uma requisição DELETE
export const deleteData = async (endpoint) => {
    try {
        const response = await fetch(`${API_URL}/${endpoint}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`Erro ao deletar dados: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Erro na requisição DELETE:', error);
        throw error;
    }
};