import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const Settings = ({ onThemeChange, isDarkMode }) => {
  const toggleSwitch = (value) => {
    onThemeChange(value); // Atualiza o tema com base no switch
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações de Tema</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Modo Escuro</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleSwitch}
          thumbColor={isDarkMode ? '#fff' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchText: {
    fontSize: 18,
    marginRight: 10,
  },
});

export default Settings;


