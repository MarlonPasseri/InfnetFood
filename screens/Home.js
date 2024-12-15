import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const categories = ['Lanches', 'Bebidas', 'Sobremesas', 'Pratos Principais', 'Entradas', 'Saladas'];

const Home = ({ navigation, isDarkMode }) => {
  // Estilos dinâmicos baseados no modo de tema
  const containerStyle = isDarkMode ? styles.darkContainer : styles.lightContainer;
  const headerTextStyle = isDarkMode ? styles.darkHeaderText : styles.lightHeaderText;
  const categoryCardStyle = isDarkMode ? styles.darkCategoryCard : styles.lightCategoryCard;
  const categoryTextStyle = isDarkMode ? styles.darkCategoryText : styles.lightCategoryText;

  return (
    <View style={containerStyle}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <Text style={[styles.headerText, headerTextStyle]}>InfnetFood</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.categoryCard, categoryCardStyle]}
            onPress={() => navigation.navigate('Products', { categoryName: category })}
          >
            <Text style={[styles.categoryText, categoryTextStyle]}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // Estilos para o tema claro
  lightContainer: {
    flex: 1,
    backgroundColor: '#FFA500',
  },
  lightHeaderText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  lightCategoryCard: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  lightCategoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  // Estilos para o tema escuro
  darkContainer: {
    flex: 1,
    backgroundColor: '#333', // Cor de fundo para o modo escuro
  },
  darkHeaderText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff', // Texto claro para o modo escuro
  },
  darkCategoryCard: {
    backgroundColor: '#555', // Cartões mais escuros no modo escuro
    padding: 20,
    margin: 10,
    borderRadius: 10,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  darkCategoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Texto claro no modo escuro
  },

  // Outros estilos
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  header: {
    paddingTop: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 20,
  },
  categoryCard: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Home;




