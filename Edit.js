import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { database } from './firebase';
import { ref, update } from 'firebase/database';

export default function Edit({ route, navigation }) {
  const { item } = route.params;
  const [nome, setNome] = useState(item.nome);

  const handleUpdate = () => {
    if (nome.trim() === '') return;
    update(ref(database, `items/${item.id}`), { nome });
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        value={nome}
        onChangeText={setNome}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Atualizar" onPress={handleUpdate} />
    </View>
  );
}
