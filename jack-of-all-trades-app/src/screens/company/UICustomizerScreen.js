import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button, Card } from 'react-native-paper';

export default function UICustomizerScreen({ route, navigation }) {
  const { companyName } = route.params;
  const [brandName, setBrandName] = useState(companyName);
  const [primaryColor, setPrimaryColor] = useState('#667eea');
  const [secondaryColor, setSecondaryColor] = useState('#764ba2');
  const [fontFamily, setFontFamily] = useState('System');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ fontSize: 24 }}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>UI Customizer</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.title}>Brand Your Interface</Text>
        
        <TextInput
          label="Brand Name"
          value={brandName}
          onChangeText={setBrandName}
          mode="outlined"
          style={styles.input}
          outlineColor="#e8ede8"
          activeOutlineColor="#2d3e2d"
        />

        <TextInput
          label="Primary Color (hex)"
          value={primaryColor}
          onChangeText={setPrimaryColor}
          mode="outlined"
          style={styles.input}
          outlineColor="#e8ede8"
          activeOutlineColor="#2d3e2d"
        />

        <TextInput
          label="Secondary Color (hex)"
          value={secondaryColor}
          onChangeText={setSecondaryColor}
          mode="outlined"
          style={styles.input}
          outlineColor="#e8ede8"
          activeOutlineColor="#2d3e2d"
        />

        <TextInput
          label="Font Family"
          value={fontFamily}
          onChangeText={setFontFamily}
          mode="outlined"
          style={styles.input}
          outlineColor="#e8ede8"
          activeOutlineColor="#2d3e2d"
        />

        <Text style={styles.previewTitle}>Preview</Text>
        <Card style={[styles.previewCard, { backgroundColor: primaryColor }]}>
          <Card.Content>
            <Text style={styles.previewBrand}>{brandName}</Text>
            <Text style={styles.previewText}>Device: Smart Thermostat</Text>
            <Text style={styles.previewText}>Status: Connected</Text>
          </Card.Content>
        </Card>

        <Button 
          mode="contained" 
          style={styles.saveButton}
          onPress={() => {
            alert('UI Configuration Saved!');
            navigation.goBack();
          }}
        >
          Save Configuration
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
  backButton: {
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
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 24,
    color: '#2d3e2d',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  previewTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 32,
    marginBottom: 16,
    color: '#2d3e2d',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  previewCard: {
    marginBottom: 24,
    borderRadius: 12,
    padding: 24,
  },
  previewBrand: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
  },
  previewText: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
    marginBottom: 4,
  },
  saveButton: {
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#2d3e2d',
  },
});
