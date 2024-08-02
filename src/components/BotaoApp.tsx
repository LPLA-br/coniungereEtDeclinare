/*LPLA-br 08/07/2024*/
import React from "react";
import { Text, Pressable } from 'react-native';
import { Link } from "expo-router";

import estiloBotoes from "../styles/componentes/botoes";

type LocalProps =
{
  titulo: string,
  tipo: "navegacao" | "interacao",
  rumo?: string,
  funcao?: Function
};

/** Renderiza um botão útil para
 *  navegar entre telas ou executar
 *  funções definidas acima do "return"
 *  do componente ou passadas pela variável
 *  "props".
* */
export default function BotaoApp( props: LocalProps )
{
  if ( props.tipo == "interacao" )
    if ( typeof props.funcao == "function" )
    {
      return (
        <Pressable id={props.titulo} style={estiloBotoes.botao} onPress={props.funcao()} >
          <Text> {props.titulo} </Text>
        </Pressable>
      );
    }
    else
    {
      return (
        <Pressable id={props.titulo} style={estiloBotoes.botao} >
          <Text> {props.titulo} </Text>
        </Pressable>
      );
    }
  else return (
    <Link href={props.rumo} style={estiloBotoes.botao}>
      <Pressable>
        <Text> {props.titulo} </Text>
      </Pressable>
    </Link>
  );
}

