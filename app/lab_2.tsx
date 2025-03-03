import { StyleSheet, View } from 'react-native';
import FruitScreen from '../components/lab2/fruit';


export default function App() {

  return (
    <View style={styles.container}>
      <FruitScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
