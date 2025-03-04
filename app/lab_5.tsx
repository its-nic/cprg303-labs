import { Text, TouchableOpacity, View } from "react-native";
import CallAPI from "../components/lab5/callAPI";
import { useState } from "react";


export default function Lab5() {
    const [render, setRender] = useState(false);
  
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>Lab 5</Text>
  
        {render && <CallAPI />}
  
        <TouchableOpacity
          onPress={() => setRender(!render)}
          style={{
            backgroundColor: "#007BFF",
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 8,
            marginTop: 20,
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Toggle Text</Text>
        </TouchableOpacity>
      </View>
    );
  }