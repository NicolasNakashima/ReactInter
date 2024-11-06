Área Administrativa - Aplicativo Khiata
Este repositório contém a área administrativa oculta do aplicativo Khiata, projetada para uso exclusivo de administradores. Através desta plataforma, os administradores podem aprovar a validação de contas premium dos usuários.

Funcionalidades
Autenticação e Controle de Acesso: Utilização de autenticação JWT para garantir acesso seguro e exclusivo para administradores.
Validação de Contas Premium: Interface intuitiva para verificação e aprovação de contas premium dos usuários.
Feedback Visual em Tempo Real: Notificações e feedback visual com notistack.
Formulários Dinâmicos: Integração com APIs para envio de respostas e validação de dados.
Página de Erro Personalizada: Página 404 customizada, exibida apenas para rotas inexistentes, com exceções em rotas específicas.
Tecnologias Utilizadas
Frontend: React com Vite e Material UI.
Roteamento: React Router Dom para navegação e controle de rotas protegidas.
Notificações: notistack para exibir mensagens de feedback em tempo real.
Autenticação: JWT para controle seguro de permissões.
Animações: Integração de animações com Lottie para feedback visual.
Configuração e Execução

1. Instalar Dependências
   bash
   Copiar código
   npm install
2. Configurar Ambiente
   Defina as variáveis de ambiente necessárias no arquivo .env.

3. Iniciar o Projeto
   bash
   Copiar código
   npm run dev
   Estrutura de Pastas
   Pages: Páginas principais da aplicação, incluindo Login, Dashboard, Form, e NotFound.
   Components: Componentes reutilizáveis, como Navbar e AnimationComponent.
   Assets: Animações e imagens estáticas.
   Styles: Arquivos de estilos customizados usando SCSS e MUI.
   Informações Adicionais
   Acesso Restrito: Apenas administradores podem acessar esta área.
   Logout com Redirecionamento: Ao fazer logout, o usuário é redirecionado para a página de login, e o localStorage é limpo automaticamente.
