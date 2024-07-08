/*LPLA-br 08/07/2024*/
import React from "react";
import { Text, Pressable } from 'react-native';
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

type LocalProps =
{
  titulo: string,
  tipo: "navegacao" | "interacao",
  rumo?: string,
  funcao?: Function
};

/** Botão genérico padronizado capaz de
*   lidar com eventos ou navegacao.
* */
export default function BotaoApp( props: LocalProps )
{
  if ( props.tipo == "interacao" )
    if ( typeof props.funcao == "function" )
    {
      return (
        <Pressable id={props.titulo} style={estilos.botao} onPress={props.funcao()} >
          <Text> {props.titulo} </Text>
        </Pressable>
      );
    }
    else
    {
      return (
        <Pressable id={props.titulo} style={estilos.botao} >
          <Text> {props.titulo} </Text>
        </Pressable>
      );
    }
  else return (
    <Link href={props.rumo} style={estilos.botao}>
      <Pressable>
        <Text> {props.titulo} </Text>
      </Pressable>
    </Link>
  );
}

const estilos = StyleSheet.create(
  {
    botao:
    {
      backgroundColor: '#a0a0a0',
      borderColor: 'black',
      borderWidth: 1
    },
  }
);
