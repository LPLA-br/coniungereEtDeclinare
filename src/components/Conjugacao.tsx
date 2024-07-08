/* LPLA-br 21/03/2024 */
import React from "react";
import { View, Text, TextInput } from 'react-native';
import { StyleSheet } from "react-native";

type LocalProps =
{
  tempo: string
};

/** 
*   Representa uma área de seis entradas
*   de texto para para cada tempo verbal.
*   Algumas telas podem ter mais de um deste.
*   Requer o campo "tempo" em suas propriedades.
* */
export default function Conjugacao( props: LocalProps )
{
  return (
    <View>
      <Text> {props.tempo} </Text>
      <View id={props.tempo} style={estilos.inputs}>
        <TextInput id="pps" placeholder="primeira pessoa do singular"></TextInput>
        <TextInput id="sps" placeholder="segunda pessoa do singular"></TextInput>
        <TextInput id="tps" placeholder="terceira pessoa do singular"></TextInput>

        <TextInput id="ppp" placeholder="primeira pessoa do plural"></TextInput>
        <TextInput id="spp" placeholder="segunda pessoa do plural"></TextInput>
        <TextInput id="tpp" placeholder="terceira pessoa do plural"></TextInput>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create(
  {
    inputs:
    {
      display: 'flex',
      flexDirection: 'row',
    }
  }
);

