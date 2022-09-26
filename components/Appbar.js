import { MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  HStack,
  Icon,
  IconButton,
  Menu,
  StatusBar,
  Text,
} from "native-base";
import React from "react";

const Appbar = () => {
  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="violet.600" />
      <HStack
        bg="violet.800"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <HStack alignItems="center">
          <IconButton
            icon={
              <Icon size="sm" as={MaterialIcons} name="menu" color="white" />
            }
          />
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack>
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="favorite"
                size="sm"
                color="white"
              />
            }
          />
          <IconButton
            icon={
              <Icon as={MaterialIcons} name="search" size="sm" color="white" />
            }
          />
          <Menu
            w="160"
            trigger={(triggerProps) => {
              return (
                <IconButton
                  {...triggerProps}
                  icon={
                    <Icon
                      as={MaterialIcons}
                      name="more-vert"
                      size="sm"
                      color="white"
                    />
                  }
                />
              );
            }}
          >
            <Menu.Item>Log out</Menu.Item>
          </Menu>
        </HStack>
      </HStack>
    </>
  );
};

export default Appbar;
