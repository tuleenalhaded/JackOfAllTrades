import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Card, FAB, Appbar, Chip } from 'react-native-paper';
import { Platform } from '../../../core/Platform';
import ThermostatDevice from '../../../examples/thermostat/ThermostatDevice';
import ScaleDevice from '../../../examples/scale/ScaleDevice';

export default function ConsumerHomeScreen({ navigation }) {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const platform = new Platform();
    
    const thermostat = new ThermostatDevice({
      id: 'thermo-001',
      name: 'Living Room Thermostat',
      manufacturer: 'ClimateControl Inc'
    });
    
    const scale = new ScaleDevice({
      id: 'scale-001',
      name: 'Bathroom Scale',
      manufacturer: 'FitTrack Corp'
    });

    thermostat.connect();
    scale.connect();
    
    platform.registerDevice(thermostat);
    platform.registerDevice(scale);
    
    setDevices([thermostat, scale]);
  }, []);

  const getDeviceIcon = (type) => {
    switch(type) {
      case 'thermostat': return '🌡️';
      case 'fitness_scale': return '⚖️';
      default: return '📱';
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="My Devices" />
      </Appbar.Header>

      <ScrollView style={styles.content}>
        <Text style={styles.greeting}>Welcome back! 👋</Text>
        <Text style={styles.subtitle}>{devices.length} devices connected</Text>

        {devices.map((device) => (
          <TouchableOpacity 
            key={device.id}
            onPress={() => navigation.navigate('DeviceControl', { device })}
          >
            <Card style={styles.deviceCard}>
              <Card.Content>
                <View style={styles.deviceHeader}>
                  <Text style={styles.deviceIcon}>{getDeviceIcon(device.type)}</Text>
                  <View style={styles.deviceInfo}>
                    <Text style={styles.deviceName}>{device.name}</Text>
                    <Text style={styles.deviceManufacturer}>{device.manufacturer}</Text>
                  </View>
                  <Chip 
                    icon="check-circle" 
                    style={styles.statusChip}
                    textStyle={styles.statusText}
                  >
                    Online
                  </Chip>
                </View>
                
                {device.type === 'thermostat' && (
                  <View style={styles.quickInfo}>
                    <Text style={styles.quickInfoText}>
                      {device.state.temperature}°F → {device.state.targetTemperature}°F
                    </Text>
                    <Text style={styles.quickInfoLabel}>{device.state.mode}</Text>
                  </View>
                )}
                
                {device.type === 'fitness_scale' && device.state.lastMeasurement && (
                  <View style={styles.quickInfo}>
                    <Text style={styles.quickInfoText}>{device.state.weight} lbs</Text>
                    <Text style={styles.quickInfoLabel}>BMI: {device.state.bmi}</Text>
                  </View>
                )}
              </Card.Content>
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FAB
        style={styles.fab}
        icon="plus"
        label="Add Device"
        onPress={() => {}}
      />
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
    padding: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 25,
  },
  deviceCard: {
    marginBottom: 15,
    elevation: 3,
  },
  deviceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  deviceIcon: {
    fontSize: 40,
    marginRight: 15,
  },
  deviceInfo: {
    flex: 1,
  },
  deviceName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  deviceManufacturer: {
    fontSize: 14,
    color: '#666',
  },
  statusChip: {
    backgroundColor: '#4caf50',
  },
  statusText: {
    color: '#fff',
  },
  quickInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  quickInfoText: {
    fontSize: 16,
    fontWeight: '600',
  },
  quickInfoLabel: {
    fontSize: 14,
    color: '#666',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#667eea',
  },
});
