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

  const [ gui, setGui ] = useState<GuiData[]>([{gui:"pessoais",stringRequisitavel:"indicativoAtivoFuturo"}]);
  const [ guiCorrente, setGuiCorrente ] = useState<ReactNode>((<></>));

  const pessoais = (
      <View style={estiloConjugacao.campo}>
        <View style={estiloConjugacao.numero}>
          <TextInput id="pps" style={estiloConjugacao.entrada} placeholder="primeira pessoa do singular" onChangeText={novoTexto => setPps( novoTexto )}></TextInput>
          <TextInput id="sps" style={estiloConjugacao.entrada} placeholder="segunda pessoa do singular" onChangeText={novoTexto => setSps( novoTexto )}></TextInput>
          <TextInput id="tps" style={estiloConjugacao.entrada} placeholder="terceira pessoa do singular" onChangeText={novoTexto => setTps( novoTexto )}></TextInput>
        </View>
        <View style={estiloConjugacao.numero}>
          <TextInput id="ppp" style={estiloConjugacao.entrada} placeholder="primeira pessoa do plural" onChangeText={novoTexto => setPpp( novoTexto )}></TextInput>
          <TextInput id="spp" style={estiloConjugacao.entrada} placeholder="segunda pessoa do plural" onChangeText={novoTexto => setSpp( novoTexto )}></TextInput>
          <TextInput id="tpp" style={estiloConjugacao.entrada} placeholder="terceira pessoa do plural" onChangeText={novoTexto => setTpp( novoTexto )}></TextInput>
        </View>
      </View>
  );

  const infinitivo = (
    <View>
      <Text> infinitivo (unimplemented) </Text>
    </View>
  );

  return (
    <View>
      <Text> { gui[gui.length-1]?.gui } </Text>
      {
        guiCorrente
      }
      <BotaoApp tipo="avaliacao" titulo="AVANÇAR" funcao={()=>
      {
        if ( gui.length === 0 )
        {
          //INIT
          let selecionados: String[] = converterSelecionadosParaListaChavesDeVerbObj( props.conf );
          let selecionadosRequisitaveis: GuiData[] = traduzirChaveVerbObjParaStringRequisitavel( selecionados );
          setGui( selecionadosRequisitaveis );
          console.log(gui);
          const nodoInicial = gui.pop();
          setGui( [...gui] );
          setGuiCorrente( renderizarMorfologiaCorreta( nodoInicial, [pessoais, infinitivo] ) );
          return;
        }

        //EXTRAÇÃO DE DADOS
        const entrada: Pessoais = {
          pri_sing: pps, seg_sing: sps, ter_sing: tps,
          pri_plur: ppp, seg_plur: spp, ter_plur: tpp
        };

        //RENDERIZAÇÃO DESENFILEIRANTE.
        const nodo = gui.pop();
        setGui( [...gui] );

        if ( nodo?.gui === "pessoais" )
        {
          setGuiCorrente( pessoais );
        }
        else
        {
          setGuiCorrente( (<Text>gui corrente NULL</Text>) );
        }

        //AFERIÇÃO DE RESULTADOS
        if ( typeof nodo?.stringRequisitavel != "undefined" )
        {
          aferirVerboDeGuiPessoal( entrada, props.infinitivo, nodo?.stringRequisitavel, setResultados, resultados );
        }
      }} />
    </View>
  );
}

