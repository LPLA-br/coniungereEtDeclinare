import React from "react";
import { View, Text } from "react-native";
import estiloRodape from '../styles/rodape';

export default function Rodape()
{
  return (
    <>
      <View style={estiloRodape.rodape}>
        <Text> LPLA-br 2024 </Text>
      </View>
    </>
  );
};

