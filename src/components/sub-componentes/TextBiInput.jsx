/*  Componente para dois text inputs com um título
 *  centralizado acima.
 *  LPLA-br 21/03/2024
 * */

import React from "react";
import { View, TextInput, Text } from "react-native";
import { StyleSheet } from "react-native";

/**
 *  Sub-Componente de input singular e plural
 *  para caso gramatical. Id da View mais externa
 *  contém "caso".
 *  @param {caso:string}
 * */
export default function TextBiInput(props)
{
  return (
    <View id={props.caso}>
      <Text> {props.caso} </Text>
      <View style={estilos.inputs}>
        //<TextInput id="singular" ></TextInput>
        //<TextInput id="plural" ></TextInput>
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
