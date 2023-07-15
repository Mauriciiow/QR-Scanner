import { View, Text } from "react-native";
import React from "react";
import { styles } from "./card.styles";

const Card = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan QR Code</Text>
      <Text style={styles.description}>
        Realize o scan dos seus QR Codes, de uma forma simples e prática!
      </Text>
    </View>
  );
};

export default Card;
