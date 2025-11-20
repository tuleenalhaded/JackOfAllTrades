import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Appbar, TextInput, Button, Card, Chip } from 'react-native-paper';

export default function DeviceIntegratorScreen({ route, navigation }) {
  const { companyName } = route.params;
  const [deviceType, setDeviceType] = useState('');
  const [apiEndpoint, setApiEndpoint] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    { id: 1, name: 'Smart Home', icon: '🏠', capabilities: ['power', 'scheduling'] },
    { id: 2, name: 'Fitness', icon: '💪', capabilities: ['tracking', 'goals'] },
    { id: 3, name: 'Security', icon: '🔒', capabilities: ['alerts', 'monitoring'] },
    { id: 4, name: 'Entertainment', icon: '🎵', capabilities: ['media', 'volume'] },
  ];

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Device Integrator" />
      </Appbar.Header>

      <ScrollView style={styles.content}>
        <Text style={styles.title}>Add New Device Type</Text>
        
        <Text style={styles.sectionTitle}>Select Template</Text>
        <View style={styles.templatesGrid}>
          {templates.map((template) => (
            <TouchableOpacity
              key={template.id}
              onPress={() => setSelectedTemplate(template.id)}
            >
              <Card style={[
                styles.templateCard,
                selectedTemplate === template.id && styles.selectedTemplate
              ]}>
                <Card.Content style={styles.templateContent}>
                  <Text style={styles.templateIcon}>{template.icon}</Text>
                  <Text style={styles.templateName}>{template.name}</Text>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          ))}
        </View>

        <TextInput
          label="Device Type Name"
          value={deviceType}
          onChangeText={setDeviceType}
          mode="outlined"
          style={styles.input}
        />

        <TextInput
          label="API Endpoint URL"
          value={apiEndpoint}
          onChangeText={setApiEndpoint}
          mode="outlined"
          style={styles.input}
        />

        <Text style={styles.sectionTitle}>Capabilities</Text>
        <View style={styles.chipsContainer}>
          {selectedTemplate && templates.find(t => t.id === selectedTemplate)?.capabilities.map((cap, i) => (
            <Chip key={i} style={styles.chip}>{cap}</Chip>
          ))}
        </View>

        <Button 
          mode="contained" 
          style={styles.deployButton}
          disabled={!deviceType || !apiEndpoint || !selectedTemplate}
          onPress={() => {
            alert('Device Integration Deployed!');
            navigation.goBack();
          }}
        >
          Deploy Integration
        </Button>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },
  templatesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  templateCard: {
    width: '48%',
    marginBottom: 10,
    elevation: 2,
  },
  selectedTemplate: {
    borderWidth: 3,
    borderColor: '#667eea',
  },
  templateContent: {
    alignItems: 'center',
    padding: 15,
  },
  templateIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  templateName: {
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    marginBottom: 15,
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  chip: {
    marginRight: 10,
    marginBottom: 10,
  },
  deployButton: {
    paddingVertical: 8,
    backgroundColor: '#667eea',
    marginTop: 20,
  },
});