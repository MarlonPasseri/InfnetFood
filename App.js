import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from 'react-native-vector-icons'; // Importando os ícones da biblioteca
import * as Notifications from 'expo-notifications'; // Importando o Expo Notifications

import Home from './screens/Home';
import Login from './screens/Login';
import Products from './screens/Products';
import Cart from './screens/Cart';
import Profile from './screens/Profile';
import Orders from './screens/Orders';
import Checkout from './screens/Checkout';
import Settings from './screens/Settings'; // Importando a tela de configurações

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para o tema

  // Função para simular login
  const handleLogin = (navigation) => {
    setIsLoggedIn(true); // Mock de login
    navigation.replace('Drawer'); // Redireciona para a tela do Drawer
  };

  // Função para alternar entre tema claro e escuro
  const handleThemeChange = (isDark) => {
    setIsDarkMode(isDark);
  };

  // Função para enviar notificações de status do pedido
  const sendOrderNotification = async (orderStatus) => {
    let message = '';

    switch (orderStatus) {
      case 'received':
        message = 'Seu pedido foi recebido!';
        break;
      case 'sent':
        message = 'Seu pedido foi enviado e está a caminho!';
        break;
      case 'delivered':
        message = 'Seu pedido foi entregue! Aproveite sua refeição.';
        break;
      default:
        message = 'Status do pedido desconhecido.';
    }

    // Envia a notificação local
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Status do Pedido',
        body: message,
        data: { status: orderStatus },
      },
      trigger: {
        seconds: 1, // A notificação será enviada após 1 segundo (simulação)
      },
    });
  };

  // Tela de navegação do Drawer (menu lateral)
  const DrawerNavigatorComponent = () => (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={(props) => <Home {...props} isDarkMode={isDarkMode} />}
        options={{
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="home" size={size} color={focused ? '#7cc' : '#ccc'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="account-circle" size={size} color={focused ? '#7cc' : '#ccc'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="shopping-cart" size={size} color={focused ? '#7cc' : '#ccc'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={Orders}
        options={{
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="list" size={size} color={focused ? '#7cc' : '#ccc'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Checkout"
        component={Checkout}
        options={{
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="payment" size={size} color={focused ? '#7cc' : '#ccc'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Products"
        component={Products}
        options={{
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="fastfood" size={size} color={focused ? '#7cc' : '#ccc'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={(props) => <Settings {...props} onThemeChange={handleThemeChange} isDarkMode={isDarkMode} />}
        options={{
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="settings" size={size} color={focused ? '#7cc' : '#ccc'} />
          ),
        }}
      />
    </Drawer.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? "Drawer" : "Login"}>
        {/* Tela de Login */}
        <Stack.Screen
          name="Login"
          component={(props) => <Login {...props} onLogin={() => handleLogin(props.navigation)} />}
          options={{ headerShown: false }}
        />
        {/* Tela de navegação após login */}
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigatorComponent}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;







