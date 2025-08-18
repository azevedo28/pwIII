// screens/CreateScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { database } from '../firebase';
import { ref, push } from 'firebase/database';

export default function CreateScreen({ navigation }) {
  const [nome, setNome] = useState('');

  const handleAdd = () => {
    push(ref(database, 'items/'), { nome });
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Salvar" onPress={handleAdd} />
    </View>
  );
}
