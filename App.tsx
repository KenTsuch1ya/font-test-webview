import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: "https://font-check-three.vercel.app/" }}
        style={{ marginTop: 0 }}
      />
    </View>
  );
}
