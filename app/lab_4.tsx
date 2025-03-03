import { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Pressable } from 'react-native';
import vacationDestinations from '../constants/list_items';

export default function Lab4() {

  const [selected, setSelected] = useState<number[]>([]);

  const toggleSelection = (id: number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
};


  return (
    <View>
      <Text>Lab 4: Vacation destinations:</Text>
      <FlatList
        data={vacationDestinations}
        renderItem={({ item }) => (
          <Pressable style={styles.container} onPress={() => toggleSelection(item.id)}>
            <Text>{selected.includes(item.id) ? '✅' : '⬜'}{item.location}</Text>
            <Text>Price: {item.price}</Text>
            <Text>Average Temp: {item.average_yearly_temperature}</Text> 
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    maxWidth: 200,
    borderRadius: 10,
  },
});