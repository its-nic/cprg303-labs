import { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function CallAPI() {

    interface Data {
        userId: number;
        id: number;
        title: string;
        body: string;
    }


  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      if (!response.ok) throw new Error("Failed to fetch");
      const result = await response.json();
      setData(result);
    } catch (err){
        if(err instanceof Error){
            setError
        }
        else{
            setError("An unknown error has occurred.");
        }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <Text>API Data</Text>
        {loading && <Text>{loading} Loading...</Text>}
        {error && <Text>error: {error}</Text>}
      {data && (
        <View>
            <Text>User ID: {data.userId}</Text>
            <Text>ID: {data.id}</Text>
            <Text>Title: {data.title}</Text>
            <Text>Body: {data.body}</Text>
        </View>
      )}
      <TouchableOpacity onPress={fetchData} disabled={loading}>
        <Text>Refresh Data</Text>
      </TouchableOpacity>
    </View>
  );
}
