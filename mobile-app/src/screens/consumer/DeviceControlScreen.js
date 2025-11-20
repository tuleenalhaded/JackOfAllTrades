import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Appbar, Button, Slider, SegmentedButtons } from 'react-native-paper';

export default function DeviceControlScreen({ route, navigation }) {
  const { device } = route.params;
  const [state, setState] = useState(device.state);

  const handleTemperatureChange = async (temp) => {
    await device.setTemperature(Math.round(temp));
    setState({...device.state});
  };

  const handleModeChange = async (mode) => {
    await device.setMode(mode);
    setState({...device.state});
  };

  if (device.type === 'thermostat') {
    return (
      <View style={styles.container}>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title={device.name} />
        </Appbar.Header>

        <ScrollView style={styles.content}>
          <View style={styles.tempDisplay}>
            <Text style={styles.currentTemp}>{state.temperature}°F</Text>
            <Text style={styles.tempLabel}>Current Temperature</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Target Temperature</Text>
            <Text style={styles.targetTemp}>{state.targetTemperature}°F</Text>
            <Slider
              value={state.targetTemperature}
              onValueChange={handleTemperatureChange}
              minimumValue={60}
              maximumValue={85}
              step={1}
              style={styles.slider}
            />
            <View style={styles.sliderLabels}>
              <Text>60°F</Text>
              <Text>85°F</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Mode</Text>
            <SegmentedButtons
              value={state.mode}
              onValueChange={handleModeChange}
              buttons={[
                { value: 'auto', label: 'Auto' },
                { value: 'heat', label: 'Heat' },
                { value: 'cool', label: 'Cool' },
                { value: 'off', label: 'Off' },
              ]}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Additional Info</Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Humidity</Text>
              <Text style={styles.infoValue}>{state.humidity}%</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Fan Speed</Text>
              <Text style={styles.infoValue}>{state.fanSpeed}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  // Scale device
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={device.name} />
      </Appbar.Header>

      <ScrollView style={styles.content}>
        {state.lastMeasurement ? (
          <>
            <View style={styles.tempDisplay}>
              <Text style={styles.currentTemp}>{state.weight}</Text>
              <Text style={styles.tempLabel}>lbs</Text>
            </View>

            <View style={styles.statsGrid}>
              <View style={styles.statCard}>
                <Text style={styles.statValue}>{state.bmi}</Text>
                <Text style={styles.statLabel}>BMI</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statValue}>{state.bodyFat}%</Text>
                <Text style={styles.statLabel}>Body Fat</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statValue}>{state.muscleMass}</Text>
                <Text style={styles.statLabel}>Muscle Mass</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statValue}>{state.waterPercentage}%</Text>
                <Text style={styles.statLabel}>Water</Text>
              </View>
            </View>

            <Button 
              mode="contained" 
              style={styles.button}
              onPress={() => {}}
            >
              View 7-Day Trend
            </Button>
          </>
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No measurements yet</Text>
            <Button mode="contained" style={styles.button}>
              Take Measurement
            </Button>
          </View>
        )}
      </ScrollView>
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
  tempDisplay: {
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 20,
    elevation: 3,
  },
  currentTemp: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#667eea',
  },
  tempLabel: {
    fontSize: 18,
    color: '#666',
    marginTop: 10,
  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  targetTemp: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#667eea',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 2,
  },
  statValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#667eea',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#667eea',
  },
  emptyState: {
    alignItems: 'center',
    padding: 40,
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
});
