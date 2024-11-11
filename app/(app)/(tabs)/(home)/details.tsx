import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Detail = () => {
  //const { id } = useLocalSearchParams();
  return (
    <SafeAreaView>
      <Text>Detail screen</Text>
      {/* <Text>Detail screen {id}</Text> */}
    </SafeAreaView>
  );
};

export default Detail;