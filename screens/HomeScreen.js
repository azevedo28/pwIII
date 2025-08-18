// screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { database } from '../firebase';
import { ref, onValue, remove } from 'firebase/database';

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dbRef = ref(database, 'items/');
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const result = snapshot.val() || {};
      const list = Object.keys(result).map((key) => ({
        id: key,
        ...result[key],
      }));
      setData(list);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = (id) => {
    remove(ref(database, `items/${id}`));
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Adicionar novo" onPress={() => navigation.navigate('Create')} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Edit', { item })}>
            <View style={{ padding: 10, borderBottomWidth: 1 }}>
              <Text>{item.nome}</Text>
              <Button title="Excluir" onPress={() => handleDelete(item.id)} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
