/* LPLA-br 21/03/2024 */
import React from "react";
import { View, Text, TextInput } from 'react-native';
import { useState, useEffect } from "react";

import estiloConjugacao from "../styles/componentes/conjugacao";

import VerbObj from "../constants/VerbObj";

import obterConjugacaoCorreta from "../hooks/obterConjugacaoCorreta";

import BotaoApp from "./BotaoApp";

type LocalProps =
{
  conf: VerbObj,
  infinitivo: string
};

/** 
*   Representa uma área de seis entradas
*   de texto para para cada tempo verbal.
*   Algumas telas podem ter mais de um deste.
*   Requer o campo "tempo" em suas propriedades.
* */
export default function Conjugar( props: LocalProps )
{
  //pilha de resultados por modo.tempo
  const [ resultados, setResultados ] = useState<string[]>([]);

  const [ pps, setPps ] = useState<string>("");
  const [ sps, setSps ] = useState<string>("");
  const [ tps, setTps ] = useState<string>("");
  const [ ppp, setPpp ] = useState<string>("");
  const [ spp, setSpp ] = useState<string>("");
  const [ tpp, setTpp ] = useState<string>("");

  const [ trilha, setTrilha ] = useState<[]>([]);

  //limparCamposEAvancarParaProximaConjugacao()
  
  useEffect(()=>{
    (async ()=>
    {
      await obterConjugacaoCorreta( props.infinitivo, "mapeamento" );
    })();
  },[]);

  return (
    <View>
      <Text> {infinitivo} </Text>
      <View style={estiloConjugacao.inputs}>
        <TextInput id="pps" placeholder="primeira pessoa do singular" onChangeText={novoTexto => setPps( novoTexto )}></TextInput>
        <TextInput id="sps" placeholder="segunda pessoa do singular" onChangeText={novoTexto => setSps( novoTexto )}></TextInput>
        <TextInput id="tps" placeholder="terceira pessoa do singular" onChangeText={novoTexto => setTps( novoTexto )}></TextInput>

        <TextInput id="ppp" placeholder="primeira pessoa do plural" onChangeText={novoTexto => setPpp( novoTexto )}></TextInput>
        <TextInput id="spp" placeholder="segunda pessoa do plural" onChangeText={novoTexto => setSpp( novoTexto )}></TextInput>
        <TextInput id="tpp" placeholder="terceira pessoa do plural" onChangeText={novoTexto => setTpp( novoTexto )}></TextInput>
      </View>
      <BotaoApp tipo="avaliacao" titulo="?" funcao={()=>
      {
        const entrada = {
          pps: pps, sps: sps, tps: tps,
          ppp: ppp, spp: spp, tpp: tpp
        };
      }} />
    </View>
  );
}
/*
              <BotaoApp tipo="avaliacao" titulo="AVALIAR" funcao={ ()=>
                {
                  const entrada = {
                     nomS:nomS, nomP:nomP, genS:genS, genP:genP,
                     datS:datS, datP:datP, acuS:acuS, acuP:acuP,
                     ablS:ablS, ablP:ablP, vocS:vocS, vocP:vocP
                  };
                  (async ()=>
                  {
                    const resultado = await aferirResultados( entrada, await obterDeclinacaoCorreta( nomS ), setAviso, aviso );
                    setResultado( ( typeof resultado === "string" ? (resultado) : ("OPS: falha ao processar exercício") ) );
                    ( typeof resultado !== "undefined" ? (setTimeout(()=>{setModoExibicao(!modoExibicao)},1000)) : (0) );
                  })();
                }} />
*/

