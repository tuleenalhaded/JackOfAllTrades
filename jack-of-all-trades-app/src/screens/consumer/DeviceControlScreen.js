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
      <View style={styles.remoteContainer}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <View style={styles.remoteContent}>
          <View style={styles.remoteTop}>
            <Text style={styles.remoteName}>{device.name}</Text>
            <Text style={styles.remoteChannel}>{device.channel}</Text>
          </View>

          {/* Power Button */}
          <TouchableOpacity 
            style={[styles.remotePowerBtn, power && styles.remotePowerBtnOn]}
            onPress={() => setPower(!power)}
            activeOpacity={0.7}
          >
            <Text style={[styles.remotePowerIcon, power && styles.remotePowerIconOn]}>⏻</Text>
          </TouchableOpacity>

          {/* D-Pad Navigation */}
          <View style={styles.dPad}>
            <TouchableOpacity style={styles.dPadUp} activeOpacity={0.6}>
              <Text style={styles.dPadText}>▲</Text>
            </TouchableOpacity>
            
            <View style={styles.dPadMiddle}>
              <TouchableOpacity style={styles.dPadLeft} activeOpacity={0.6}>
                <Text style={styles.dPadText}>◀</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.dPadCenter} activeOpacity={0.6}>
                <Text style={styles.dPadCenterText}>OK</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.dPadRight} activeOpacity={0.6}>
                <Text style={styles.dPadText}>▶</Text>
              </TouchableOpacity>
            </View>
            
            <TouchableOpacity style={styles.dPadDown} activeOpacity={0.6}>
              <Text style={styles.dPadText}>▼</Text>
            </TouchableOpacity>
          </View>

          {/* Volume & Channel Controls */}
          <View style={styles.remoteControls}>
            <View style={styles.remoteControlGroup}>
              <Text style={styles.remoteControlLabel}>VOL</Text>
              <TouchableOpacity 
                style={styles.remoteControlBtn}
                onPress={() => setVolume(Math.min(100, volume + 5))}
              >
                <Text style={styles.remoteControlText}>+</Text>
              </TouchableOpacity>
              <Text style={styles.remoteControlValue}>{volume}</Text>
              <TouchableOpacity 
                style={styles.remoteControlBtn}
                onPress={() => setVolume(Math.max(0, volume - 5))}
              >
                <Text style={styles.remoteControlText}>−</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.remoteControlGroup}>
              <Text style={styles.remoteControlLabel}>CH</Text>
              <TouchableOpacity style={styles.remoteControlBtn}>
                <Text style={styles.remoteControlText}>▲</Text>
              </TouchableOpacity>
              <Text style={styles.remoteControlValue}>12</Text>
              <TouchableOpacity style={styles.remoteControlBtn}>
                <Text style={styles.remoteControlText}>▼</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Quick Access Buttons */}
          <View style={styles.quickButtons}>
            <TouchableOpacity style={styles.quickBtn}>
              <Text style={styles.quickBtnText}>Netflix</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickBtn}>
              <Text style={styles.quickBtnText}>Prime</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickBtn}>
              <Text style={styles.quickBtnText}>HBO</Text>
            </TouchableOpacity>
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
  // Remote Control Redesign
  remoteContainer: {
    flex: 1,
    backgroundColor: '#2d3e2d',
  },
  remoteContent: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  remoteTop: {
    alignItems: 'center',
    marginBottom: 32,
  },
  remoteName: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.6,
    marginBottom: 4,
  },
  remoteChannel: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '300',
  },
  remotePowerBtn: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  remotePowerBtnOn: {
    backgroundColor: '#8fbc8f',
    borderColor: '#8fbc8f',
  },
  remotePowerIcon: {
    fontSize: 32,
    color: '#fff',
    opacity: 0.6,
  },
  remotePowerIconOn: {
    opacity: 1,
  },
  dPad: {
    width: 200,
    alignItems: 'center',
    marginBottom: 40,
  },
  dPadUp: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  dPadMiddle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  dPadLeft: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  dPadCenter: {
    width: 70,
    height: 70,
    backgroundColor: '#8fbc8f',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  dPadRight: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  dPadDown: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dPadText: {
    fontSize: 20,
    color: '#fff',
    opacity: 0.8,
  },
  dPadCenterText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  remoteControls: {
    flexDirection: 'row',
    gap: 40,
    marginBottom: 32,
  },
  remoteControlGroup: {
    alignItems: 'center',
  },
  remoteControlLabel: {
    fontSize: 11,
    color: '#fff',
    opacity: 0.5,
    marginBottom: 12,
    letterSpacing: 1,
  },
  remoteControlBtn: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
  },
  remoteControlText: {
    fontSize: 20,
    color: '#fff',
    opacity: 0.8,
  },
  remoteControlValue: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 8,
  },
  quickButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  quickBtn: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
  },
  quickBtnText: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '500',
  },
});
