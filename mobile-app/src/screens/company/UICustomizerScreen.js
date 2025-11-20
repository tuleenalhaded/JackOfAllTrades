import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Appbar, TextInput, Button, Card } from 'react-native-paper';

export default function UICustomizerScreen({ route, navigation }) {
  const { companyName } = route.params;
  const [brandName, setBrandName] = useState(companyName);
  const [primaryColor, setPrimaryColor] = useState('#667eea');
  const [secondaryColor, setSecondaryColor] = useState('#764ba2');
  const [fontFamily, setFontFamily] = useState('System');

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="UI Customizer" />
      </Appbar.Header>

      <ScrollView style={styles.content}>
        <Text style={styles.title}>Brand Your Interface</Text>
        
        <TextInput
          label="Brand Name"
          value={brandName}
          onChangeText={setBrandName}
          mode="outlined"
          style={styles.input}
        />

        <TextInput
          label="Primary Color (hex)"
          value={primaryColor}
          onChangeText={setPrimaryColor}
          mode="outlined"
          style={styles.input}
        />

        <TextInput
          label="Secondary Color (hex)"
          value={secondaryColor}
          onChangeText={setSecondaryColor}
          mode="outlined"
          style={styles.input}
        />

        <TextInput
          label="Font Family"
          value={fontFamily}
          onChangeText={setFontFamily}
          mode="outlined"
          style={styles.input}
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
  input: {
    marginBottom: 15,
  },
  previewTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
  },
  previewCard: {
    marginBottom: 20,
    elevation: 5,
  },
  previewBrand: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  previewText: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  saveButton: {
    paddingVertical: 8,
    backgroundColor: '#667eea',
  },
});
