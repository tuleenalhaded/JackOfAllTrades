import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

export default function AnalyticsScreen({ route, navigation }) {
  const { companyName } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Analytics</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>Active Users</Text>
          <Text style={styles.metricValue}>1,247</Text>
          <Text style={styles.metricChange}>+12% this month</Text>
        </View>

        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>API Calls (24h)</Text>
          <Text style={styles.metricValue}>45,892</Text>
          <Text style={styles.metricChange}>Normal activity</Text>
        </View>

        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>Device Connections</Text>
          <Text style={styles.metricValue}>3,421</Text>
          <Text style={styles.metricChange}>+8% this week</Text>
        </View>

        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>Uptime</Text>
          <Text style={styles.metricValue}>99.9%</Text>
          <Text style={styles.metricChange}>Last 30 days</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
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
    fontWeight: '600',
    color: '#2d3e2d',
  },
  content: {
    flex: 1,
    padding: 24,
  },
  metricCard: {
    backgroundColor: '#f7f9f7',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
  },
  metricLabel: {
    fontSize: 13,
    color: '#7a8a7a',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  metricValue: {
    fontSize: 36,
    fontWeight: '300',
    color: '#2d3e2d',
    marginBottom: 4,
  },
  metricChange: {
    fontSize: 14,
    color: '#6b8e6b',
  },
});
