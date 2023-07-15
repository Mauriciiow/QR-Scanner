import { View, Text, SafeAreaView, Alert } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { styles } from "./scanner.styles";
import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";
import { Camera } from "expo-camera";
import Button from "../../components/Button";
import { StackProps } from "../../router";
import { withNavigationFocus } from "react-navigation";
import { useIsFocused } from "@react-navigation/native";
const Scanner = (
  { navigation, route }: StackProps,
  props: { isFocused: any }
) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setData] = useState<string>();
  const params = route?.params;

  const focused = useIsFocused();

  const getBarCodeScannerPermissions = async () => {
    // const { status } = await BarCodeScanner.requestPermissionsAsync();

    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
  };
  useEffect(() => {
    getBarCodeScannerPermissions();
  }, []);
  const handleBarCodeScanned = ({ type, data }: BarCodeScannerResult) => {
    setScanned(true);
    setData(data);
  };

  useEffect(() => {
    if (params?.goBack && scanned) {
      setScanned(false);
      setData("");
      params?.onSetGoBack(false);

      handleBarCodeScanned;
    }
  }, [params?.goBack, scanned]);

  useEffect(() => {
    if (scanned && scannedData) {
      navigation?.navigate("Data", { data: scannedData });
    }
  }, [scanned, scannedData]);

  return (
    <SafeAreaView style={styles.container}>
      {!hasPermission ? (
        <Button
          text="Allow Camera"
          onPress={() => getBarCodeScannerPermissions()}
        />
      ) : (
        <View style={styles.containerCamera}>
          {focused ? (
            <Camera
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{ height: 500, width: 500 }}
            />
          ) : (
            <></>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default Scanner;
