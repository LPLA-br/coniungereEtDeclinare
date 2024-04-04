import React from "react";
import { View, Pressable, Text } from 'react-native';
import { setoresDeBotoes } from '../../styles/subparte/calculadora';

type TTriTecla =
{
  a: string,
  b: string,
  c: string
};

export default function TriTecla( props: TTriTecla )
{
  return (
    <View style={setoresDeBotoes.celulaHorizontal}>
      <Pressable style={setoresDeBotoes.botoesQuadrados} id={props.a}> <Text>{props.a}</Text> </Pressable>
      <Pressable style={setoresDeBotoes.botoesQuadrados} id={props.b}> <Text>{props.b}</Text> </Pressable>
      <Pressable style={setoresDeBotoes.botoesQuadrados} id={props.c}> <Text>{props.c}</Text> </Pressable>
    </View>
  );
}

