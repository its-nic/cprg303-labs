import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from "expo-router";

export default function App() {

    const router = useRouter();

  return (
    <View style={styles.container}>
        <View>
            <Text>CPRG-303 Labs:</Text>
            <StatusBar style="auto" />
        </View>
        <View>
            <TouchableOpacity style={styles.button} onPress={() => router.push("lab_1")}>
                <Text style={styles.buttonText}>Lab 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => router.push("lab_2")}>
                <Text style={styles.buttonText}>Lab 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => router.push("lab_3")}>
                <Text style={styles.buttonText}>Lab 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => router.push("lab_4")}>
                <Text style={styles.buttonText}>Lab 4</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    },
    buttonText: {
    color: 'white',
    },
});
