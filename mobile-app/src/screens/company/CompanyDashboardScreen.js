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
      screen: null,
    },
    {
      icon: '💳',
      title: 'Subscription',
      description: 'Manage billing',
      screen: null,
    },
  ];

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={companyName} />
      </Appbar.Header>

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
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#667eea',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 3,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#667eea',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  menuCard: {
    marginBottom: 15,
    elevation: 2,
  },
  menuContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 40,
    marginRight: 15,
  },
  menuText: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  menuDescription: {
    fontSize: 14,
    color: '#666',
  },
  arrow: {
    fontSize: 30,
    color: '#ccc',
  },
});
