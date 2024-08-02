/* LPLA-br 21/03/2024 */
import React from "react";
import { View, TextInput, Text } from "react-native";
import { StyleSheet } from "react-native";

type LocalProps =
{
  titulo: string,
  campoa: string,
  campob: string
};

/**
 * Sub-componente que representa um título em
 * maiúsculo com dois campos de texto, um ao lado
 * do outro, abaixo do título. requer campo "titulo"
 * em suas propriedades.
 * */
export default function TextBiInput( props: LocalProps )
{
  return (
    <View>
      <Text> {props.titulo} </Text>
      <View id={props.titulo} style={estilos.inputs}>
        <TextInput id={props.campoa} placeholder={props.campoa} ></TextInput>
        <TextInput id={props.campob} placeholder={props.campob}></TextInput>
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
