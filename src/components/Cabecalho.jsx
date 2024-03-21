import React from "react";
import { Text, View } from "react-native";
import { estilos } from '../styles/head-foot';

export default function Cabecalho( { texto } )
{
  return (
    <>
      <View style={estilos.cabecalho}>
        <Text > {texto} </Text>
      </View>
    </>
  );
};

