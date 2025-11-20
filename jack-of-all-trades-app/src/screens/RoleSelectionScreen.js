import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

export default function RoleSelectionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>🃏</Text>
        <Text style={styles.title}>Jack of All Trades</Text>
        <Text style={styles.subtitle}>One app for everything</Text>

        <View style={styles.cardsContainer}>
          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('ConsumerHome')}
            activeOpacity={0.8}
          >
            <Text style={styles.cardIcon}>👤</Text>
            <Text style={styles.cardTitle}>Consumer</Text>
            <Text style={styles.cardDescription}>Control my devices</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.cardCompany}
            onPress={() => navigation.navigate('CompanyLogin')}
            activeOpacity={0.8}
          >
            <Text style={styles.cardIcon}>🏢</Text>
            <Text style={styles.cardTitle}>Company</Text>
            <Text style={styles.cardDescription}>Manage integrations</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9f7',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  logo: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '300',
    color: '#2d3e2d',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    color: '#7a8a7a',
    marginBottom: 64,
    fontWeight: '400',
  },
  cardsContainer: {
    width: '100%',
    maxWidth: 320,
  },
  card: {
    backgroundColor: '#8fbc8f',
    borderRadius: 20,
    padding: 32,
    marginBottom: 16,
    alignItems: 'center',
  },
  cardCompany: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 32,
    borderWidth: 1,
    borderColor: '#e8ede8',
    alignItems: 'center',
  },
  cardIcon: {
    fontSize: 40,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#2d3e2d',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    color: '#7a8a7a',
    textAlign: 'center',
  },
});
