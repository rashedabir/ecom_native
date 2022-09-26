import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Center, HStack, Icon, Text } from "native-base";
import React, { useState } from "react";
import { Pressable } from "react-native";

const Footer = () => {
  const [selected, setSelected] = useState(0);

  return (
    <HStack
      bg="indigo.600"
      alignItems="center"
      safeAreaBottom
      shadow={6}
      style={{ paddingTop: 20 }}
    >
      <Pressable
        cursor="pointer"
        opacity={selected === 0 ? 1 : 0.5}
        py="3"
        flex={1}
        onPress={() => setSelected(0)}
      >
        <Center>
          <Icon
            mb="1"
            as={
              <MaterialCommunityIcons
                name={selected === 0 ? "home" : "home-outline"}
              />
            }
            color="white"
            size="sm"
          />
          <Text color="white" fontSize="12">
            Home
          </Text>
        </Center>
      </Pressable>
      <Pressable
        cursor="pointer"
        opacity={selected === 1 ? 1 : 0.5}
        py="2"
        flex={1}
        onPress={() => setSelected(1)}
      >
        <Center>
          <Icon
            mb="1"
            as={<MaterialIcons name="search" />}
            color="white"
            size="sm"
          />
          <Text color="white" fontSize="12">
            Search
          </Text>
        </Center>
      </Pressable>
      <Pressable
        cursor="pointer"
        opacity={selected === 2 ? 1 : 0.6}
        py="2"
        flex={1}
        onPress={() => setSelected(2)}
      >
        <Center>
          <Icon
            mb="1"
            as={
              <MaterialCommunityIcons
                name={selected === 2 ? "cart" : "cart-outline"}
              />
            }
            color="white"
            size="sm"
          />
          <Text color="white" fontSize="12">
            Cart
          </Text>
        </Center>
      </Pressable>
      <Pressable
        cursor="pointer"
        opacity={selected === 3 ? 1 : 0.5}
        py="2"
        flex={1}
        onPress={() => setSelected(3)}
      >
        <Center>
          <Icon
            mb="1"
            as={
              <MaterialCommunityIcons
                name={selected === 3 ? "account" : "account-outline"}
              />
            }
            color="white"
            size="sm"
          />
          <Text color="white" fontSize="12">
            Account
          </Text>
        </Center>
      </Pressable>
    </HStack>
  );
};

export default Footer;
