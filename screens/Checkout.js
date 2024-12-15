import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';

const Checkout = ({ route, navigation }) => {
  // Recebendo os dados do carrinho passados pela tela anterior
  const { cart } = route.params || {};
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  // Função para calcular o total do pedido
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Função para validar o formulário
  const handleCheckout = () => {
    if (!address || !paymentMethod) {
      Alert.alert('Erro', 'Todos os campos obrigatórios devem ser preenchidos.');
      return;
    }

    // Simula o envio do pedido
    Alert.alert('Pedido Confirmado', `Seu pedido será enviado para: ${address}`);
 
    navigation.goBack(); // Exemplo de navegação após confirmar
  };

  // Verificar se o carrinho está vazio
  if (!cart || cart.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyMessage}>Checkout Vazio!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Revise seu Pedido</Text>

      {/* Lista de itens do pedido */}
      <View style={styles.orderItems}>
        {cart.map(item => (
          <View key={item.id} style={styles.orderItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetails}>
              {item.quantity} x R$ {item.price.toFixed(2)}
            </Text>
          </View>
        ))}
      </View>

      {/* Total do pedido */}
      <Text style={styles.total}>Total: R$ {calculateTotal()}</Text>

      {/* Endereço de entrega */}
      <Text style={styles.label}>Endereço de Entrega</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu endereço"
        value={address}
        onChangeText={setAddress}
      />

      {/* Método de pagamento */}
      <Text style={styles.label}>Método de Pagamento</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o método de pagamento"
        value={paymentMethod}
        onChangeText={setPaymentMethod}
      />

      {/* Botão de confirmar pedido */}
      <Button title="Confirmar Pedido" onPress={handleCheckout} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emptyMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6347', // Laranja para destacar a mensagem
    textAlign: 'center',
    marginTop: 20,
  },
  orderItems: {
    marginBottom: 20,
  },
  orderItem: {
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDetails: {
    fontSize: 16,
    color: '#555',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'right',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default Checkout;

