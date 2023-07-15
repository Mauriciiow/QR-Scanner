import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./data.styles";
import AntDesing from "@expo/vector-icons/AntDesign";
import { StackProps } from "../../router";
import * as Linking from "expo-linking";
import { A } from "@expo/html-elements";
import { ButtonIcon } from "../../components/Button";
const QRCodeData = ({ navigation, route }: StackProps) => {
  const data = route?.params.data || "ERRO";
  const urlHttp = /^http:\/\//i;
  const urlHttps = /^https:\/\//i;

  const [goBack, setGoback] = useState<boolean>(false);

  useEffect(() => {
    if (goBack) {
      navigation?.navigate("Scanner", {
        goBack,
        onSetGoBack: (item: boolean) => {
          setGoback(item);
        },
      });
    }
  }, [goBack]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesing
          name="arrowleft"
          onPress={() => {
            setGoback(true);
          }}
          size={32}
          color="#fff"
          style={styles.icon}
        />
        <Text style={styles.titleHeader}>My QR Code</Text>
        <Text></Text>
      </View>
      <View style={{ alignSelf: "center", marginTop: 40 }}>
        <Image source={require("../../../assets/qrcodeblue.png")} />
      </View>
      <View style={styles.content}>
        {urlHttp.test(data) || urlHttps.test(data) ? (
          <A style={styles.link} href={data}>
            {data}
          </A>
        ) : (
          <Text>{data}</Text>
        )}

        <View style={{ width: "100%", alignItems: "center", marginTop: 50 }}>
          <ButtonIcon
            text="Scan Again?"
            onPress={() => setGoback(true)}
            Icon={() => <AntDesing name="camerao" color="#3584fa" size={18} />}
          />
        </View>
      </View>
    </View>
  );
};

export default QRCodeData;
