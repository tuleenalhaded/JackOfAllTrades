import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

export default function DeviceControlScreen({ route, navigation }) {
  const { device } = route.params;
  const [temperature, setTemperature] = useState(device.temperature || 72);
  const [power, setPower] = useState(device.power || false);
  const [volume, setVolume] = useState(device.volume || 15);
  const [brightness, setBrightness] = useState(device.brightness || 80);
  const [locked, setLocked] = useState(device.locked || false);

  // Universal Remote Control
  if (device.type === 'remote') {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.deviceName}>{device.name}</Text>
          
          <TouchableOpacity 
            style={[styles.powerButton, power && styles.powerButtonOn]}
            onPress={() => setPower(!power)}
          >
            <Text style={styles.powerIcon}>⏻</Text>
            <Text style={styles.powerText}>{power ? 'On' : 'Off'}</Text>
          </TouchableOpacity>

          <View style={styles.remoteGrid}>
            <TouchableOpacity style={styles.remoteButton}>
              <Text style={styles.remoteButtonText}>▲</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.remoteButton}>
              <Text style={styles.remoteButtonText}>◀</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.remoteButton}>
              <Text style={styles.remoteButtonText}>OK</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.remoteButton}>
              <Text style={styles.remoteButtonText}>▶</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.remoteButton}>
              <Text style={styles.remoteButtonText}>▼</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.volumeControl}>
            <Text style={styles.volumeLabel}>Volume</Text>
            <View style={styles.volumeButtons}>
              <TouchableOpacity 
                style={styles.volumeButton}
                onPress={() => setVolume(Math.max(0, volume - 1))}
              >
                <Text style={styles.volumeButtonText}>−</Text>
              </TouchableOpacity>
              <Text style={styles.volumeValue}>{volume}</Text>
              <TouchableOpacity 
                style={styles.volumeButton}
                onPress={() => setVolume(Math.min(100, volume + 1))}
              >
                <Text style={styles.volumeButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }

  // Smart Light Control
  if (device.type === 'light') {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.deviceName}>{device.name}</Text>
          
          <TouchableOpacity 
            style={[styles.lightCircle, power && styles.lightCircleOn]}
            onPress={() => setPower(!power)}
          >
            <Text style={styles.lightIcon}>💡</Text>
          </TouchableOpacity>

          {power && (
            <View style={styles.brightnessControl}>
              <Text style={styles.brightnessLabel}>Brightness</Text>
              <Text style={styles.brightnessValue}>{brightness}%</Text>
              <View style={styles.brightnessButtons}>
                <TouchableOpacity 
                  style={styles.controlButton}
                  onPress={() => setBrightness(Math.max(0, brightness - 10))}
                >
                  <Text style={styles.controlText}>−</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.controlButton}
                  onPress={() => setBrightness(Math.min(100, brightness + 10))}
                >
                  <Text style={styles.controlText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }

  // Smart Lock Control
  if (device.type === 'lock') {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.deviceName}>{device.name}</Text>
          
          <TouchableOpacity 
            style={[styles.lockCircle, locked && styles.lockCircleLocked]}
            onPress={() => setLocked(!locked)}
          >
            <Text style={styles.lockIcon}>{locked ? '🔒' : '🔓'}</Text>
          </TouchableOpacity>

          <Text style={styles.lockStatus}>
            {locked ? 'Locked' : 'Unlocked'}
          </Text>
        </View>
      </View>
    );
  }

  // Thermostat Control
  if (device.type === 'thermostat') {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.deviceName}>{device.name}</Text>
          
          <View style={styles.tempCircle}>
            <Text style={styles.tempValue}>{temperature}°</Text>
          </View>

          <View style={styles.controls}>
            <TouchableOpacity 
              style={styles.controlButton}
              onPress={() => setTemperature(Math.max(60, temperature - 1))}
            >
              <Text style={styles.controlText}>−</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.controlButton}
              onPress={() => setTemperature(Math.min(85, temperature + 1))}
            >
              <Text style={styles.controlText}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.modeContainer}>
            <TouchableOpacity style={styles.modeButton}>
              <Text style={styles.modeText}>Auto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modeButtonInactive}>
              <Text style={styles.modeTextInactive}>Heat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modeButtonInactive}>
              <Text style={styles.modeTextInactive}>Cool</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  // Scale device
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.deviceName}>{device.name}</Text>
        
        <View style={styles.tempCircle}>
          <Text style={styles.tempValue}>{device.weight}</Text>
          <Text style={styles.unitText}>lbs</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{device.bmi}</Text>
            <Text style={styles.statLabel}>BMI</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>18.5%</Text>
            <Text style={styles.statLabel}>Body Fat</Text>
          </View>
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
  backButton: {
    paddingTop: 60,
    paddingLeft: 24,
    paddingBottom: 20,
  },
  backText: {
    fontSize: 32,
    color: '#2d3e2d',
    fontWeight: '300',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deviceName: {
    fontSize: 24,
    fontWeight: '300',
    color: '#2d3e2d',
    marginBottom: 48,
    letterSpacing: -0.5,
  },
  tempCircle: {
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e8ede8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 48,
  },
  tempValue: {
    fontSize: 72,
    fontWeight: '200',
    color: '#6b8e6b',
    letterSpacing: -2,
  },
  unitText: {
    fontSize: 18,
    color: '#7a8a7a',
    marginTop: 8,
  },
  controls: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 48,
  },
  controlButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#8fbc8f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '300',
  },
  modeContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  modeButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: '#8fbc8f',
  },
  modeButtonInactive: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e8ede8',
  },
  modeText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '400',
  },
  modeTextInactive: {
    fontSize: 15,
    color: '#7a8a7a',
    fontWeight: '400',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 24,
    marginTop: 32,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 28,
    fontWeight: '300',
    color: '#6b8e6b',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 13,
    color: '#7a8a7a',
  },
  // Remote Control Styles
  powerButton: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e8ede8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 48,
  },
  powerButtonOn: {
    backgroundColor: '#8fbc8f',
    borderColor: '#8fbc8f',
  },
  powerIcon: {
    fontSize: 48,
    marginBottom: 8,
  },
  powerText: {
    fontSize: 16,
    color: '#7a8a7a',
    fontWeight: '400',
  },
  remoteGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 32,
    maxWidth: 200,
  },
  remoteButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e8ede8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  remoteButtonText: {
    fontSize: 20,
    color: '#2d3e2d',
  },
  volumeControl: {
    alignItems: 'center',
  },
  volumeLabel: {
    fontSize: 14,
    color: '#7a8a7a',
    marginBottom: 12,
  },
  volumeButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },
  volumeButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#8fbc8f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  volumeButtonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '300',
  },
  volumeValue: {
    fontSize: 24,
    color: '#2d3e2d',
    fontWeight: '300',
    minWidth: 40,
    textAlign: 'center',
  },
  // Light Control Styles
  lightCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e8ede8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 48,
  },
  lightCircleOn: {
    backgroundColor: '#fff9e6',
    borderColor: '#ffd700',
  },
  lightIcon: {
    fontSize: 80,
  },
  brightnessControl: {
    alignItems: 'center',
  },
  brightnessLabel: {
    fontSize: 14,
    color: '#7a8a7a',
    marginBottom: 8,
  },
  brightnessValue: {
    fontSize: 32,
    color: '#6b8e6b',
    fontWeight: '300',
    marginBottom: 16,
  },
  brightnessButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  // Lock Control Styles
  lockCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e8ede8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  lockCircleLocked: {
    backgroundColor: '#8fbc8f',
    borderColor: '#8fbc8f',
  },
  lockIcon: {
    fontSize: 80,
  },
  lockStatus: {
    fontSize: 20,
    color: '#2d3e2d',
    fontWeight: '300',
  },
});
