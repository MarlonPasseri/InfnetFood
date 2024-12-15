import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import * as Notifications from 'expo-notifications'; // Importando o Expo Notifications

// Mock de dados de pedidos
const mockOrders = [
  { id: '1', item: 'Lanche de Frango', status: 'Em Preparação', date: '2024-12-13' },
  { id: '2', item: 'Suco de Laranja', status: 'Enviado', date: '2024-12-12' },
  { id: '3', item: 'Sobremesa de Chocolate', status: 'Entregue', date: '2024-12-11' },
  { id: '4', item: 'Salada de Frutas', status: 'Em Preparação', date: '2024-12-10' },
  { id: '5', item: 'Prato Principal - Lasanha', status: 'Enviado', date: '2024-12-09' },
];

const Orders = ({ navigation }) => {
  // Estado para armazenar os pedidos (aqui, estamos utilizando os dados mockados)
  const [orders, setOrders] = useState(mockOrders);

  // Função para enviar notificação de status do pedido
  const sendOrderNotification = async (orderStatus, itemName) => {
    let message = '';

    // Definindo a mensagem de acordo com o status do pedido
    switch (orderStatus) {
      case 'Em Preparação':
        message = `Seu pedido de ${itemName} está em preparação.`;
        break;
      case 'Enviado':
        message = `Seu pedido de ${itemName} foi enviado e está a caminho!`;
        break;
      case 'Entregue':
        message = `Seu pedido de ${itemName} foi entregue! Aproveite sua refeição.`;
        break;
      default:
        message = `Status do pedido de ${itemName} está desconhecido.`;
    }

    // Enviando a notificação
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Status do Pedido',
        body: message,
        data: { status: orderStatus },
      },
      trigger: {
        seconds: 1, // A notificação será enviada após 1 segundo
      },
    });
  };

  // Função para alterar o status do pedido e enviar notificação
  const changeOrderStatus = (orderId, newStatus) => {
    // Atualiza o estado do pedido
    const updatedOrders = orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);

    // Envia a notificação
    const updatedOrder = updatedOrders.find(order => order.id === orderId);
    sendOrderNotification(newStatus, updatedOrder.item);
  };

  // Função para renderizar os itens da lista
  const renderOrderItem = ({ item }) => (
    <View style={styles.orderCard}>
      <Text style={styles.orderItem}>{item.item}</Text>
      <Text style={styles.orderDate}>Data: {item.date}</Text>
      <Text style={styles.orderStatus}>Status: {item.status}</Text>

      <TouchableOpacity
        style={styles.viewDetailsButton}
        onPress={() => alert('Exibir detalhes do pedido')}
      >
        <Text style={styles.viewDetailsText}>Ver Detalhes</Text>
      </TouchableOpacity>

      {/* Botão para alterar o status e enviar a notificação */}
      {item.status !== 'Entregue' && (
        <TouchableOpacity
          style={styles.changeStatusButton}
          onPress={() => changeOrderStatus(item.id, 'Entregue')}
        >
          <Text style={styles.changeStatusText}>Marcar como Entregue</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Pedidos</Text>

      {/* Exibindo a lista de pedidos com FlatList */}
      <FlatList
        data={orders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  orderCard: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  orderItem: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderDate: {
    fontSize: 14,
    color: '#555',
  },
  orderStatus: {
    fontSize: 14,
    color: '#888',
  },
  viewDetailsButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  viewDetailsText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  changeStatusButton: {
    backgroundColor: '#32CD32',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  changeStatusText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Orders;

