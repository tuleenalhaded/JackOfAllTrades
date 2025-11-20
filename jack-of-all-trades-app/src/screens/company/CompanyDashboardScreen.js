import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Card, Appbar } from 'react-native-paper';

export default function CompanyDashboardScreen({ route, navigation }) {
  const { companyName } = route.params;

  const menuItems = [
    {
      icon: '🎨',
      title: 'Customize UI',
      description: 'Brand your device interfaces',
      screen: 'UICustomizer',
    },
    {
      icon: '🔌',
      title: 'Integrate Device',
      description: 'Add new device types',
      screen: 'DeviceIntegrator',
    },
    {
      icon: '📊',
      title: 'Analytics',
      description: 'View usage statistics',
      screen: 'Analytics',
    },
    {
      icon: '💳',
      title: 'Subscription',
      description: 'Manage billing',
      screen: 'Subscription',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{companyName}</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>Active Devices</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>1.2K</Text>
            <Text style={styles.statLabel}>Users</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>45K</Text>
            <Text style={styles.statLabel}>API Calls</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Quick Actions</Text>

        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => item.screen && navigation.navigate(item.screen, { companyName })}
            disabled={!item.screen}
          >
            <Card style={styles.menuCard}>
              <Card.Content style={styles.menuContent}>
                <Text style={styles.menuIcon}>{item.icon}</Text>
                <View style={styles.menuText}>
                  <Text style={styles.menuTitle}>{item.title}</Text>
                  <Text style={styles.menuDescription}>{item.description}</Text>
                </View>
                <Text style={styles.arrow}>›</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        ))}
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
    paddingBottom: 24,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2d3e2d',
  },
  content: {
    flex: 1,
    padding: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#f7f9f7',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2d3e2d',
  },
  statLabel: {
    fontSize: 11,
    color: '#7a8a7a',
    marginTop: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
    color: '#2d3e2d',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  menuCard: {
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  menuContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  menuIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  menuText: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
    color: '#2d3e2d',
  },
  menuDescription: {
    fontSize: 13,
    color: '#7a8a7a',
  },
  arrow: {
    fontSize: 24,
    color: '#d0d0d0',
  },
});
