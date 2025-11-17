const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

const validateCPF = (cpf) => {
    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfPattern.test(cpf);
};

const validatePhone = (phone) => {
    const phonePattern = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    return phonePattern.test(phone);
};

const validateDate = (date) => {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    return datePattern.test(date);
};

const validateRequiredFields = (fields) => {
    return Object.values(fields).every(field => field.trim() !== '');
};

const validateForm = (formData) => {
    const { nome, email, cpf, telefone, dataNascimento } = formData;
    const errors = {};

    if (!validateRequiredFields(formData)) {
        errors.required = 'Todos os campos são obrigatórios.';
    }
    if (!validateEmail(email)) {
        errors.email = 'E-mail inválido.';
    }
    if (!validateCPF(cpf)) {
        errors.cpf = 'CPF deve estar no formato 999.999.999-99.';
    }
    if (!validatePhone(telefone)) {
        errors.telefone = 'Telefone deve estar no formato (99) 99999-9999.';
    }
    if (!validateDate(dataNascimento)) {
        errors.dataNascimento = 'Data de nascimento deve estar no formato AAAA-MM-DD.';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

export { validateForm };