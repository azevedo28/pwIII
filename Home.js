import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { database } from './firebase';
import { ref, onValue, remove } from 'firebase/database';

export default function Home({ navigation }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const dbRef = ref(database, 'items/');
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val() || {};
      const list = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
      setItems(list);
    });
    return () => unsubscribe();
  }, []);

  const deleteItem = (id) => {
    remove(ref(database, `items/${id}`));
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Adicionar Novo" onPress={() => navigation.navigate('Create')} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Edit', { item })}>
            <View style={{ padding: 10, borderBottomWidth: 1 }}>
              <Text style={{ fontSize: 18 }}>{item.nome}</Text>
              <Button title="Excluir" onPress={() => deleteItem(item.id)} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
