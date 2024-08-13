/*LPLA-br 08/07/2024*/
import React from "react";
import { Text, Pressable } from 'react-native';
import { Link } from "expo-router";

import estiloBotoes from "../styles/componentes/botoes";

type LocalProps =
{
  titulo: string,
  tipo: "navegacao" | "interacao" | "alteracao",
  rumo?: string,
  funcao?: Function
};

/** Renderiza um botão útil para
 *  navegar entre telas ou executar
 *  funções definidas acima do "return"
 *  do componente ou passadas pela variável
 *  "props".
 *  REFATORÁTURO !
* */
export default function BotaoApp( props: LocalProps )
{

  /*alteracao. invoca useState() passado para o componente
  * definido valor de acordo com o título do componente*/
  function alterarValorUseStatePorTitulo()
  {
    if ( typeof props.funcao == "function" )
    {
      props.funcao( props.titulo );
    }
  }

  if ( typeof props.funcao == "function" )
  {
    if ( props.tipo == "interacao" )
    {
      // execução de funções
      return (
        <Pressable id={props.titulo} style={estiloBotoes.botao} onPress={props.funcao()} >
          <Text> {props.titulo} </Text>
        </Pressable>
      );
    }
    else if ( props.tipo == "alteracao" )
    {
      //definicao de valores de useState() passado.
      return (
        <Pressable id={props.titulo} style={estiloBotoes.botao} onPress={alterarValorUseStatePorTitulo} >
          <Text> {props.titulo} </Text>
        </Pressable>
      );
    }
    else
    {
      return (
        <Pressable id={props.titulo} style={estiloBotoes.botao}  >
          <Text> {props.titulo} </Text>
        </Pressable>
      );
    }
  }
  else
  {
    return (
    <Link href={{ pathname: props.rumo }} style={estiloBotoes.botao}>
      { props.titulo }
    </Link>
    );
  }
}

