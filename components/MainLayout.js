import React from "react";
import { Box, Button, Center, Menu } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Appbar from "./Appbar";
import Footer from "./Footer";
import HomeScreen from "./HomeScreen";

const Drawer = createDrawerNavigator();

export const MainLayout = ({ children }) => {
  const [shouldOverlapWithTrigger] = React.useState(false);
  const [position, setPosition] = React.useState("auto");
  return (
    <NavigationContainer>
      <Appbar />
      <Box flex={1} bg="white" width="100%" alignSelf="center">
        <Center flex={1}>{children}</Center>
        <Footer />
      </Box>

      {/*<Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>*/}
    </NavigationContainer>
  );
};

export default MainLayout;
