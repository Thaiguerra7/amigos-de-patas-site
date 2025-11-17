# ONG Amigos de Patas SPA

Este projeto é uma aplicação web dinâmica e interativa desenvolvida como uma Single Page Application (SPA) para a ONG Amigos de Patas. A aplicação permite que os usuários se cadastrem como voluntários ou apoiadores, além de fornecer informações sobre os projetos da ONG.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
ong-amigos-de-patas-spa
├── public
│   └── index.html          # Página principal da aplicação
├── src
│   ├── main.js             # Ponto de entrada da aplicação
│   ├── app.js              # Lógica principal da aplicação
│   ├── router.js           # Sistema de roteamento da SPA
│   ├── store
│   │   └── index.js        # Gerenciamento do estado da aplicação
│   ├── services
│   │   └── api.js          # Interação com APIs externas
│   ├── components
│   │   ├── Header.js       # Componente de cabeçalho
│   │   ├── Footer.js       # Componente de rodapé
│   │   └── form
│   │       ├── CadastroForm.js  # Formulário de cadastro
│   │       └── validation.js     # Validação dos dados do formulário
│   ├── views
│   │   ├── HomeView.js     # View da página inicial
│   │   └── CadastroView.js  # View da página de cadastro
│   ├── styles
│   │   └── main.css        # Estilos CSS da aplicação
│   └── utils
│       └── storage.js      # Funções utilitárias para armazenamento local
├── tests
│   ├── form.test.js        # Testes unitários para validação do formulário
│   └── router.test.js      # Testes unitários para o sistema de roteamento
├── package.json             # Configuração do npm
├── vite.config.js          # Configuração do Vite
├── .gitignore               # Arquivos a serem ignorados pelo controle de versão
└── README.md                # Documentação do projeto
```

## Instalação

Para instalar e executar a aplicação, siga os passos abaixo:

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd ong-amigos-de-patas-spa
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```

4. Acesse a aplicação em seu navegador através do endereço `http://localhost:3000`.

## Uso

A aplicação permite que os usuários se cadastrem como voluntários ou apoiadores. O formulário de cadastro inclui validação de dados para garantir que todas as informações sejam inseridas corretamente.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto é licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.