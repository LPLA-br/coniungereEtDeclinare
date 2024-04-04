import React from "react";
import { View, Pressable, Text } from 'react-native';
import { setoresDeBotoes } from '../../styles/subparte/calculadora';

type TQuadriTecla =
{
  a: string,
  b: string,
  c: string,
  d: string
};

export default function QuadriTecla( props: TQuadriTecla )
{
  return (
    <View style={setoresDeBotoes.celulaHorizontal}>
      <Pressable style={setoresDeBotoes.botoesQuadrados} id={props.a}> <Text>{props.a}</Text> </Pressable>
      <Pressable style={setoresDeBotoes.botoesQuadrados} id={props.b}> <Text>{props.b}</Text> </Pressable>
      <Pressable style={setoresDeBotoes.botoesQuadrados} id={props.c}> <Text>{props.c}</Text> </Pressable>
      <Pressable style={setoresDeBotoes.botoesQuadrados} id={props.d}> <Text>{props.d}</Text> </Pressable>
    </View>
  );
}

