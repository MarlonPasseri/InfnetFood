import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulando login com dados mockados
    if (email === 'user@example.com' && password === '1234') {
      onLogin(); // Chamando a função para alterar o estado de login no App
    } else {
      Alert.alert('Erro', 'Email ou senha incorretos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao InfnetFood</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e', // Cor de fundo escura (preto)
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF6347', // Laranja para o título
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#FF6347', // Laranja para borda dos inputs
    borderRadius: 10,
    backgroundColor: '#2c2c2c', // Fundo escuro para os campos de input
    color: '#fff', // Texto branco para contraste
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FF6347', // Laranja para o botão
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#FF6347', // Adiciona uma sombra laranja ao botão
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5, // Sombra no Android
  },
  buttonText: {
    color: '#fff', // Texto branco no botão
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export default Login;

