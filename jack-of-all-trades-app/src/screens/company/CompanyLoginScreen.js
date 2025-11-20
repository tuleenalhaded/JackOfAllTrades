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
      <View style={styles.content}>
        <Text style={styles.icon}>🏢</Text>
        <Text style={styles.title}>Company Portal</Text>
        <Text style={styles.subtitle}>Manage your device integrations</Text>

        <TextInput
          label="Company Name"
          value={companyName}
          onChangeText={setCompanyName}
          mode="outlined"
          style={styles.input}
          autoCapitalize="words"
          outlineColor="#e8ede8"
          activeOutlineColor="#2d3e2d"
        />

        <Button 
          mode="contained" 
          onPress={handleLogin}
          style={styles.button}
          disabled={!companyName.trim()}
          buttonColor="#2d3e2d"
        >
          Sign In
        </Button>

        <Text style={styles.footerText}>
          New partner? Contact sales@jackofalltrades.com
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    maxWidth: 400,
    alignSelf: 'center',
    width: '100%',
  },
  icon: {
    fontSize: 64,
    textAlign: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
    color: '#2d3e2d',
  },
  subtitle: {
    fontSize: 15,
    color: '#7a8a7a',
    textAlign: 'center',
    marginBottom: 48,
  },
  input: {
    marginBottom: 24,
    backgroundColor: '#fff',
  },
  button: {
    paddingVertical: 8,
    borderRadius: 8,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 24,
    color: '#7a8a7a',
    fontSize: 13,
  },
});
