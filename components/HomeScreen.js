import { Box, ScrollView } from "native-base";
import React from "react";
import Card from "./Card";

const HomeScreen = () => {
  return (
    <ScrollView>
      <Box>
        {Array(20)
          .fill()
          .map((item, i) => {
            return <Card key={i} />;
          })}
      </Box>
    </ScrollView>
  );
};

export default HomeScreen;
