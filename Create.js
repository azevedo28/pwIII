import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { database } from './firebase';
import { ref, push } from 'firebase/database';

export default function Create({ navigation }) {
  const [nome, setNome] = useState('');

  const handleCreate = () => {
    if (nome.trim() === '') return;
    push(ref(database, 'items/'), { nome });
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Digite o nome"
        value={nome}
        onChangeText={setNome}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Salvar" onPress={handleCreate} />
    </View>
  );
}
