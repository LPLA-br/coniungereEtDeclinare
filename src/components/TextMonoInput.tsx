/* LPLA-br 08/07/2024 */
import React from "react";
import { View, TextInput, Text } from "react-native";
import { StyleSheet } from "react-native";

type LocalProps =
{
  titulo: string
};

/**
 * Sub-componente que representa um título sobre
 * um campo de texto. Recebe "titulo" que será 
 * o id do campo de texto e o título.
 * */
export default function TextMonoInput( props: LocalProps )
{
  return (
    <View style={estilos.componentesEmLinha}>
      <Text> {props.titulo} </Text>
      <TextInput id={props.titulo} ></TextInput>
    </View>
  );
}


const estilos = StyleSheet.create(
  {
    componentesEmLinha:
    {
      display: 'flex',
      flexDirection: 'row',
    }
  }
);
