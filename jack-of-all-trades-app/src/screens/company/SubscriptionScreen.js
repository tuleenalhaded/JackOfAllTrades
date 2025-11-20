import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function SubscriptionScreen({ route, navigation }) {
  const { companyName } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Subscription</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.currentPlan}>
          <Text style={styles.planBadge}>CURRENT PLAN</Text>
          <Text style={styles.planName}>Premium</Text>
          <Text style={styles.planDescription}>
            Unlimited devices • Priority support • Advanced analytics
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Usage This Month</Text>
          <View style={styles.usageRow}>
            <Text style={styles.usageLabel}>API Calls</Text>
            <Text style={styles.usageValue}>1.2M / Unlimited</Text>
          </View>
          <View style={styles.usageRow}>
            <Text style={styles.usageLabel}>Active Devices</Text>
            <Text style={styles.usageValue}>2 / Unlimited</Text>
          </View>
          <View style={styles.usageRow}>
            <Text style={styles.usageLabel}>Users</Text>
            <Text style={styles.usageValue}>1,247</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Billing</Text>
          <View style={styles.billingRow}>
            <Text style={styles.billingLabel}>Next billing date</Text>
            <Text style={styles.billingValue}>Dec 20, 2025</Text>
          </View>
          <View style={styles.billingRow}>
            <Text style={styles.billingLabel}>Payment method</Text>
            <Text style={styles.billingValue}>•••• 4242</Text>
          </View>
        </View>

        <Button 
          mode="outlined" 
          style={styles.button}
          textColor="#2d3e2d"
          onPress={() => {}}
        >
          Manage Billing
        </Button>
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
  currentPlan: {
    backgroundColor: '#2d3e2d',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
  },
  planBadge: {
    fontSize: 11,
    color: '#8fbc8f',
    marginBottom: 8,
    letterSpacing: 1,
    fontWeight: '600',
  },
  planName: {
    fontSize: 28,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  planDescription: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#7a8a7a',
    marginBottom: 16,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  usageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  usageLabel: {
    fontSize: 15,
    color: '#2d3e2d',
  },
  usageValue: {
    fontSize: 15,
    color: '#7a8a7a',
    fontWeight: '500',
  },
  billingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  billingLabel: {
    fontSize: 15,
    color: '#2d3e2d',
  },
  billingValue: {
    fontSize: 15,
    color: '#7a8a7a',
    fontWeight: '500',
  },
  button: {
    borderRadius: 8,
    borderColor: '#e8ede8',
    marginTop: 16,
  },
});
