# Documentação do Código - InfnetFood

## Visão Geral
Este código representa a navegação principal do aplicativo **InfnetFood**, desenvolvido utilizando React Native e Expo. O aplicativo permite aos usuários fazer login, navegar entre diferentes telas, visualizar produtos, adicionar itens ao carrinho, realizar pedidos, acompanhar o status do pedido, configurar preferências e gerenciar seu perfil.

## Estrutura do Código
O código está dividido em dois componentes principais de navegação:
1. **Stack Navigator**: Gerencia a navegação entre a tela de login e o menu principal.
2. **Drawer Navigator**: Exibe o menu lateral para navegação entre as telas do aplicativo após o login.

## Dependências
- **React**: Biblioteca principal para a construção do aplicativo.
- **React Navigation**: Biblioteca para gerenciar a navegação entre telas.
  - `@react-navigation/native`: Para configurar o contêiner de navegação.
  - `@react-navigation/drawer`: Para o menu lateral (Drawer).
  - `@react-navigation/stack`: Para navegação por pilha (Stack).
- **Expo Notifications**: Para enviar notificações sobre o status dos pedidos.
- **React Native Vector Icons**: Para exibir ícones nas telas e no menu lateral.

## Componentes e Funcionalidades

### Estado
- **`isLoggedIn`**: Controla o estado de login do usuário. Se `true`, o usuário é redirecionado para o menu principal; caso contrário, permanece na tela de login.
- **`isDarkMode`**: Controla o estado do tema (claro ou escuro).

### Funções
- **`handleLogin(navigation)`**: Simula o login do usuário. Após o login, o usuário é redirecionado para a tela principal do aplicativo (Drawer).
- **`handleThemeChange(isDark)`**: Alterna entre os temas claro e escuro do aplicativo.
- **`sendOrderNotification(orderStatus)`**: Envia notificações locais para o usuário com base no status do pedido (recebido, enviado, entregue).

### Navegação
- **`DrawerNavigatorComponent`**: Componente que configura a navegação do menu lateral. Ele contém as seguintes telas:
  - **Home**: Tela principal do aplicativo.
  - **Profile**: Tela do perfil do usuário.
  - **Cart**: Tela do carrinho de compras.
  - **Orders**: Tela para visualizar o histórico de pedidos.
  - **Checkout**: Tela de checkout para realizar o pagamento.
  - **Products**: Tela que exibe os produtos disponíveis.
  - **Settings**: Tela de configurações, onde o usuário pode alterar o tema do aplicativo.

### Tela de Login
A tela de login simula o processo de autenticação e redireciona o usuário para o menu principal após o login bem-sucedido.

### Notificações
- **Expo Notifications** é utilizado para enviar notificações locais ao usuário. A função `sendOrderNotification` é responsável por criar e disparar essas notificações com base no status do pedido.

## Fluxo de Navegação
1. O aplicativo inicia com a tela de **Login**.
2. Após o login bem-sucedido, o usuário é redirecionado para a tela principal (Drawer Navigator).
3. O menu lateral (Drawer) permite ao usuário navegar entre várias seções do aplicativo, como "Home", "Profile", "Cart", "Orders", "Checkout", "Products" e "Settings".
4. Na tela de **Settings**, o usuário pode alterar entre o tema claro e escuro do aplicativo.
5. O aplicativo também utiliza notificações locais para informar o status do pedido.

## Conclusão
Este código fornece a base para um aplicativo de pedidos de comida, permitindo navegação entre diferentes telas e a interação com o usuário por meio de notificações e alterações de tema. O fluxo de navegação é claro e as funcionalidades são bem definidas para uma experiência de usuário simples e intuitiva.

