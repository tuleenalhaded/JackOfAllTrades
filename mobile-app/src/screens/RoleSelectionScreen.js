import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export default function RoleSelectionScreen({ navigation }) {
  return (
    <LinearGradient colors={['#667eea', '#764ba2']} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>🃏</Text>
        <Text style={styles.title}>Jack of All Trades</Text>
        <Text style={styles.subtitle}>One App. All Your Devices.</Text>

        <View style={styles.cardsContainer}>
          <Card style={styles.card} onPress={() => navigation.navigate('ConsumerHome')}>
            <Card.Content style={styles.cardContent}>
              <Text style={styles.cardIcon}>👤</Text>
              <Text style={styles.cardTitle}>I'm a Consumer</Text>
              <Text style={styles.cardDescription}>
                Control all my smart devices from one place
              </Text>
            </Card.Content>
          </Card>

          <Card style={styles.card} onPress={() => navigation.navigate('CompanyLogin')}>
            <Card.Content style={styles.cardContent}>
              <Text style={styles.cardIcon}>🏢</Text>
              <Text style={styles.cardTitle}>I'm a Company</Text>
              <Text style={styles.cardDescription}>
                Integrate and customize my device interfaces
              </Text>
            </Card.Content>
          </Card>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    opacity: 0.9,
    marginBottom: 50,
  },
  cardsContainer: {
    width: '100%',
    maxWidth: 400,
  },
  card: {
    marginBottom: 20,
    elevation: 8,
  },
  cardContent: {
    alignItems: 'center',
    padding: 20,
  },
  cardIcon: {
    fontSize: 50,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
});
