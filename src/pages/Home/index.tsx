import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import Card from "../../components/Card";
import { styles } from "./home.styles";
import Button from "../../components/Button";
import { StackProps } from "../../router";
import { StatusBar } from "expo-status-bar";
const Home = ({ navigation }: StackProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#3584fa" />
      <Card />
      <Image
        source={require("../../../assets/qrcodeblue.png")}
        style={styles.imageQrcode}
      />
      <Button text="SCAN" onPress={() => navigation?.navigate("Scanner", {})} />
    </SafeAreaView>
  );
};

export default Home;
