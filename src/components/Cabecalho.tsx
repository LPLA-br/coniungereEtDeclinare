import React from "react";
import { Text, View } from "react-native";

import estiloCabecalho from '../styles/cabecalho';

type LocalProps =
{
  texto: string;
}

export default function Cabecalho( props: LocalProps )
{
  return (
    <>
      <View style={estiloCabecalho.cabecalho}>
        <Text > {props.texto} </Text>
      </View>
    </>
  );
};

