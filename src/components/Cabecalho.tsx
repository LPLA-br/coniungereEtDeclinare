import React from "react";
import { Text, View } from "react-native";
import { estilos } from '../styles/head-foot';

type LocalProps =
{
  texto: string;
}

export default function Cabecalho( props: LocalProps )
{
  return (
    <>
      <View style={estilos.cabecalho}>
        <Text > {props.texto} </Text>
      </View>
    </>
  );
};

