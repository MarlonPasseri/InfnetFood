import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Animated,
} from 'react-native';

const mockProducts = {
  Lanches: [
    { id: '1', name: 'Hambúrguer', price: 10 },
    { id: '2', name: 'Sanduíche Natural', price: 8 },
    { id: '3', name: 'Hot Dog', price: 7 },
  ],
  Bebidas: [
    { id: '4', name: 'Refrigerante', price: 5 },
    { id: '5', name: 'Suco Natural', price: 6 },
    { id: '6', name: 'Água', price: 2 },
  ],
  Sobremesas: [
    { id: '7', name: 'Torta de Limão', price: 6 },
    { id: '8', name: 'Pudim', price: 5 },
    { id: '9', name: 'Brownie', price: 7 },
  ],
  'Pratos Principais': [
    { id: '10', name: 'Feijoada', price: 18 },
    { id: '11', name: 'Frango Grelhado', price: 15 },
    { id: '12', name: 'Bife à Parmegiana', price: 20 },
  ],
  Entradas: [
    { id: '13', name: 'Salada Caesar', price: 8 },
    { id: '14', name: 'Bruschetta', price: 10 },
    { id: '15', name: 'Caldinho de Feijão', price: 6 },
  ],
  Saladas: [
    { id: '16', name: 'Salada de Frutas', price: 7 },
    { id: '17', name: 'Salada Verde', price: 5 },
    { id: '18', name: 'Salada de Grão-de-bico', price: 9 },
  ],
};

const Products = ({ route, navigation }) => {
  const { categoryName } = route.params || {};
  const products = categoryName ? mockProducts[categoryName] : [];
  const [cart, setCart] = useState([]);

  const scaleAnim = useRef(new Animated.Value(1)).current; // Inicializa a animação de escala
  const opacityAnim = useRef(new Animated.Value(1)).current; // Inicializa a animação de opacidade

  const animateAddToCart = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0.5,
          duration: 150,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    animateAddToCart();
    Alert.alert('Adicionado', `${product.name} foi adicionado ao carrinho.`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardText}>{item.name}</Text>
      <Text style={styles.cardPrice}>R$ {item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
        <Text style={styles.addButtonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum produto disponível.</Text>}
      />
      <Animated.View
        style={[
          styles.cartButtonContainer,
          { transform: [{ scale: scaleAnim }], opacity: opacityAnim },
        ]}
      >
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate('Cart', { cart: cart })}
        >
          <Text style={styles.cartButtonText}>Ver Carrinho</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardPrice: {
    fontSize: 16,
    color: '#666',
    marginVertical: 5,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cartButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  cartButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Products;




