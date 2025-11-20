import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button, Appbar } from 'react-native-paper';

export default function CompanyLoginScreen({ navigation }) {
  const [companyName, setCompanyName] = useState('');

  const handleLogin = () => {
    if (companyName.trim()) {
      navigation.navigate('CompanyDashboard', { companyName });
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Company Portal" />
      </Appbar.Header>

      <View style={styles.content}>
        <Text style={styles.icon}>🏢</Text>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to manage your device integrations</Text>

        <TextInput
          label="Company Name"
          value={companyName}
          onChangeText={setCompanyName}
          mode="outlined"
          style={styles.input}
          autoCapitalize="words"
        />

        <Button 
          mode="contained" 
          onPress={handleLogin}
          style={styles.button}
          disabled={!companyName.trim()}
        >
          Sign In
        </Button>

        <Text style={styles.footerText}>
          Don't have an account? Contact sales
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#667eea',
  },
  content: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
  icon: {
    fontSize: 80,
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    paddingVertical: 8,
    backgroundColor: '#667eea',
  },
  footerText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
});
