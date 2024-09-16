/* LPLA-br 21/03/2024 */
import React from "react";
import { View, Text, TextInput } from 'react-native';
import { useState, useEffect } from "react";
import { ReactNode } from "react";

import estiloConjugacao from "../styles/componentes/conjugacao";

import VerbObj from "../constants/VerbObj";
import { Gui, GuiData, Pessoais } from "../constants/gui";

import converterSelecionadosParaListaChavesDeVerbObj from "../hooks/converterSelecionadosParaListaChavesDeVerbObj";
import traduzirChaveVerbObjParaStringRequisitavel from "../hooks/traduzirChaveVerbObjParaStringRequisitavel";
import aferirVerboDeGuiPessoal from "../hooks/aferirSubParteVerbal";

import BotaoApp from "./BotaoApp";
import renderizarMorfologiaCorreta from "./dinamicos/renderizarMorfologiaCorreta";

type LocalProps =
{
  conf: VerbObj,
  infinitivo: string
};

/** Componente metamorficamente complexo
*   de entradas de texto para exercícios de verbos.
* */
export default function Conjugar( props: LocalProps )
{
  //pilha de resultados por modo.tempo
  const [ resultados, setResultados ] = useState<string[]>([]);

  //pessoais
  const [ pps, setPps ] = useState<string>("");
  const [ sps, setSps ] = useState<string>("");
  const [ tps, setTps ] = useState<string>("");
  const [ ppp, setPpp ] = useState<string>("");
  const [ spp, setSpp ] = useState<string>("");
  const [ tpp, setTpp ] = useState<string>("");

  //infinitivo
  const [ iafut, setIafut ] = useState<string>("");
  const [ iapre, setIapre ] = useState<string>("");
  const [ iaper, setIaper ] = useState<string>("");

  const [ gui, setGui ] = useState<GuiData[]>([]);
  const [ guiCorrente, setGuiCorrente ] = useState<ReactNode>((<></>));

  const pessoais = (
      <View style={estiloConjugacao.inputs}>
        <TextInput id="pps" placeholder="primeira pessoa do singular" onChangeText={novoTexto => setPps( novoTexto )}></TextInput>
        <TextInput id="sps" placeholder="segunda pessoa do singular" onChangeText={novoTexto => setSps( novoTexto )}></TextInput>
        <TextInput id="tps" placeholder="terceira pessoa do singular" onChangeText={novoTexto => setTps( novoTexto )}></TextInput>

        <TextInput id="ppp" placeholder="primeira pessoa do plural" onChangeText={novoTexto => setPpp( novoTexto )}></TextInput>
        <TextInput id="spp" placeholder="segunda pessoa do plural" onChangeText={novoTexto => setSpp( novoTexto )}></TextInput>
        <TextInput id="tpp" placeholder="terceira pessoa do plural" onChangeText={novoTexto => setTpp( novoTexto )}></TextInput>
      </View>
  );

  const infinitivo = (
    <View>
      <Text> infinitivo (unimplemented) </Text>
    </View>
  );

  useEffect(()=>{
    (async ()=>
    {
      let selecionados: String[] = converterSelecionadosParaListaChavesDeVerbObj( props.conf );
      let selecionadosRequisitaveis: GuiData[] = traduzirChaveVerbObjParaStringRequisitavel( selecionados );
      setGui( selecionadosRequisitaveis );
      //fila carregada ! incipiando ab initio !
      const nodoInicial = gui.pop();
      setGui( [...gui] );
      setGuiCorrente( renderizarMorfologiaCorreta( nodoInicial, [pessoais, infinitivo] ) );
    })();
  },[]);

  return (
    <View>
      <Text> {props.infinitivo} </Text>
      <Text> { "VozModoTempo" } </Text>
      {guiCorrente}
      <BotaoApp tipo="avaliacao" titulo="AVANÇAR" funcao={()=>
      {
        //proxima renderização ...
        const entrada: Pessoais = {
          pri_sing: pps, seg_sing: sps, ter_sing: tps,
          pri_plur: ppp, seg_plur: spp, ter_plur: tpp
        };
        const nodo = gui.pop();
        setGui( [...gui] );

        if ( nodo?.gui == "pessoais" )
        {
          setGuiCorrente( pessoais );
        }
        else
        {
          setGuiCorrente( (<></>) );
        }

        if ( typeof nodo?.stringRequisitavel != "undefined" )
        {
          aferirVerboDeGuiPessoal( entrada, props.infinitivo, nodo?.stringRequisitavel, setResultados, resultados );
        }
      }} />
    </View>
  );
}

