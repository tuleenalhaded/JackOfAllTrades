import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Card, Appbar } from 'react-native-paper';

export default function ConsumerHomeScreen({ navigation }) {
  const [devices] = useState([
    {
      id: 'remote-001',
      name: 'Living Room TV',
      type: 'remote',
      status: 'online',
      power: false,
      volume: 15,
      channel: 'HBO'
    },
    {
      id: 'thermo-001',
      name: 'Thermostat',
      type: 'thermostat',
      status: 'online',
      temperature: 72,
      targetTemp: 72,
      mode: 'auto'
    },
    {
      id: 'light-001',
      name: 'Bedroom Lights',
      type: 'light',
      status: 'online',
      power: true,
      brightness: 80
    },
    {
      id: 'lock-001',
      name: 'Front Door',
      type: 'lock',
      status: 'online',
      locked: true
    },
    {
      id: 'scale-001',
      name: 'Bathroom Scale',
      type: 'fitness_scale',
      status: 'online',
      weight: 165,
      bmi: 24.2
    }
  ]);

  const getDeviceIcon = (type) => {
    switch(type) {
      case 'remote': return '📺';
      case 'thermostat': return '🌡️';
      case 'light': return '💡';
      case 'lock': return '🔒';
      case 'fitness_scale': return '⚖️';
      default: return '📱';
    }
  };

  const getDeviceValue = (device) => {
    switch(device.type) {
      case 'remote': return device.power ? 'On' : 'Off';
      case 'thermostat': return `${device.temperature}°`;
      case 'light': return device.power ? 'On' : 'Off';
      case 'lock': return device.locked ? 'Locked' : 'Unlocked';
      case 'fitness_scale': return `${device.weight} lbs`;
      default: return '';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Devices</Text>
        <Text style={styles.headerSubtitle}>{devices.length} connected</Text>
      </View>

      <ScrollView style={styles.content}>
        {devices.map((device) => (
          <TouchableOpacity 
            key={device.id}
            onPress={() => navigation.navigate('DeviceControl', { device })}
            activeOpacity={0.7}
          >
            <View style={styles.deviceCard}>
              <View style={styles.cardTop}>
                <Text style={styles.deviceIcon}>{getDeviceIcon(device.type)}</Text>
                <View style={styles.statusDot} />
              </View>
              
              <Text style={styles.deviceName}>{device.name}</Text>
              <Text style={styles.deviceValue}>{getDeviceValue(device)}</Text>
            </View>
          </TouchableOpacity>
        ))}

        {/* Add Device Card */}
        <TouchableOpacity 
          onPress={() => navigation.navigate('AddDevice')}
          activeOpacity={0.7}
        >
          <View style={styles.addDeviceCard}>
            <Text style={styles.addDeviceIcon}>+</Text>
            <Text style={styles.addDeviceText}>Add Device</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
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
    paddingBottom: 24,
    backgroundColor: '#f7f9f7',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '300',
    color: '#2d3e2d',
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#7a8a7a',
    marginTop: 4,
    fontWeight: '400',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  deviceCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e8ede8',
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  deviceIcon: {
    fontSize: 32,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#8fbc8f',
  },
  deviceName: {
    fontSize: 18,
    fontWeight: '400',
    color: '#2d3e2d',
    marginBottom: 8,
  },
  deviceValue: {
    fontSize: 28,
    fontWeight: '300',
    color: '#6b8e6b',
    letterSpacing: -1,
  },
  addDeviceCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#e8ede8',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 140,
  },
  addDeviceIcon: {
    fontSize: 40,
    color: '#8fbc8f',
    marginBottom: 8,
  },
  addDeviceText: {
    fontSize: 16,
    color: '#7a8a7a',
    fontWeight: '400',
  },
});
