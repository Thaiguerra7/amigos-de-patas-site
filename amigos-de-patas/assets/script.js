// Função que aplica a máscara em tempo real
function applyMask(input, maskType) {
    let value = input.value.replace(/\D/g, ''); // Remove todos os não-dígitos

    switch (maskType) {
        case 'cpf':
            // CPF: 999.999.999-99
            if (value.length > 11) value = value.substring(0, 11);
            value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
            value = value.replace(/^(\d{3})(\d{3})(\d{3})$/, '$1.$2.$3');
            value = value.replace(/^(\d{3})(\d{3})$/, '$1.$2');
            break;

        case 'phone':
            // Telefone: (99) 99999-9999 ou (99) 9999-9999
            if (value.length > 11) value = value.substring(0, 11);

            if (value.length > 2) {
                value = '(' + value.substring(0, 2) + ') ' + value.substring(2);
            }
            // 9º dígito (Celular)
            if (value.length > 10 && value.length < 16) {
                value = value.replace(/^(\(\d{2}\) )(\d{5})(\d{4})$/, '$1$2-$3');
            } else if (value.length >= 10 && value.length < 15) {
                // Fixo
                value = value.replace(/^(\(\d{2}\) )(\d{4})(\d{4})$/, '$1$2-$3');
            }
            break;

        case 'cep':
            // CEP: 99999-999
            if (value.length > 8) value = value.substring(0, 8);
            if (value.length > 5) value = value.replace(/^(\d{5})(\d{3})$/, '$1-$2');
            break;
    }
    input.value = value;
}

document.addEventListener('DOMContentLoaded', () => {
    // Aplica event listener a todos os campos que possuem o atributo data-mask
    document.querySelectorAll('[data-mask]').forEach(input => {
        const maskType = input.getAttribute('data-mask');
        
        // Aplica a máscara a cada alteração
        input.addEventListener('input', () => {
            applyMask(input, maskType);
        });
        
        // Validação adicional (opcional, para garantir a máscara ao perder o foco)
        input.addEventListener('blur', () => {
            applyMask(input, maskType);
        });
    });

    const form = document.querySelector('.form-cadastro');
    const msgBox = document.getElementById('message-box');

    // Lógica de submissão do formulário
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (form.checkValidity()) {
                // Submissão bem-sucedida
                msgBox.classList.remove('hidden', 'bg-red-100', 'text-red-700');
                msgBox.classList.add('bg-green-100', 'text-green-700');
                msgBox.innerHTML = '✅ Cadastro enviado com sucesso! Entraremos em contato em breve.';
                
                // Limpa o formulário após 3 segundos
                setTimeout(() => {
                    form.reset();
                    msgBox.classList.add('hidden');
                }, 3000);
                
            } else {
                // Submissão falhou (algum campo obrigatório não preenchido ou pattern inválido)
                msgBox.classList.remove('hidden', 'bg-green-100', 'text-green-700');
                msgBox.classList.add('bg-red-100', 'text-red-700');
                msgBox.innerHTML = '❌ Por favor, corrija os campos destacados em vermelho para continuar.';
            }
        });
    }
});