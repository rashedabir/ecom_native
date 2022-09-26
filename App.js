import { Box, NativeBaseProvider } from "native-base";
import React from "react";
import Appbar from "./components/Appbar";
import MainLayout from "./components/MainLayout";
import { expo as appName } from "./app.json";
import { AppRegistry } from "react-native";
import HomeScreen from "./components/HomeScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <MainLayout>
        <HomeScreen />
      </MainLayout>
    </NativeBaseProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
