import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ButtonProps } from "./button.types";
import { styles } from "./button.styles";

const Button = ({ onPress, text, color }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: color ? color : "#3584fa" }]}
    >
      <Text style={[styles.text, { color: color ? "black" : "#fff" }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export const ButtonIcon = ({ onPress, text, color, Icon }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.containerIconButton]}>
      {Icon && <Icon />}
      <Text style={styles.textIconButton}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
