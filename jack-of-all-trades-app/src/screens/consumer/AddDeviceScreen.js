import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

export default function AddDeviceScreen({ navigation }) {
  const [serialCode, setSerialCode] = useState('');
  const [scanning, setScanning] = useState(false);

  const handlePair = () => {
    if (serialCode.trim()) {
      // Simulate pairing
      setTimeout(() => {
        alert('Device paired successfully!');
        navigation.goBack();
      }, 1000);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Device</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>📱</Text>
        </View>

        <Text style={styles.title}>Pair New Device</Text>
        <Text style={styles.subtitle}>
          Enter the serial code found on your device
        </Text>

        <TextInput
          label="Serial Code"
          value={serialCode}
          onChangeText={setSerialCode}
          mode="outlined"
          style={styles.input}
          placeholder="XXXX-XXXX-XXXX"
          autoCapitalize="characters"
          outlineColor="#e8ede8"
          activeOutlineColor="#8fbc8f"
        />

        <Button 
          mode="contained" 
          onPress={handlePair}
          style={styles.button}
          disabled={!serialCode.trim()}
          buttonColor="#8fbc8f"
        >
          Pair Device
        </Button>

        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.line} />
        </View>

        <Button 
          mode="outlined" 
          onPress={() => setScanning(true)}
          style={styles.scanButton}
          textColor="#2d3e2d"
        >
          Scan QR Code
        </Button>

        <Text style={styles.helpText}>
          Need help? Check the device manual for the serial code location
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9f7',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 20,
    backgroundColor: '#f7f9f7',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 28,
    color: '#2d3e2d',
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#2d3e2d',
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#e8ede8',
  },
  icon: {
    fontSize: 48,
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    color: '#2d3e2d',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#7a8a7a',
    textAlign: 'center',
    marginBottom: 32,
  },
  input: {
    width: '100%',
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    borderRadius: 12,
    paddingVertical: 4,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#e8ede8',
  },
  dividerText: {
    marginHorizontal: 16,
    fontSize: 13,
    color: '#7a8a7a',
  },
  scanButton: {
    width: '100%',
    borderRadius: 12,
    borderColor: '#e8ede8',
  },
  helpText: {
    fontSize: 12,
    color: '#7a8a7a',
    textAlign: 'center',
    marginTop: 24,
  },
});
