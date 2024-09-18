/* LPLA-br 21/03/2024 */
import React from "react";
import { View, Text, TextInput } from 'react-native';
import { useState, useEffect } from "react";

import estiloConjugacao from "../styles/componentes/conjugacao";

import VerbObj from "../constants/VerbObj";
import {GuiData} from "../constants/gui";

import BotaoApp from "./BotaoApp";
import VerbResView from "./VerbResView";

//import avancarConjugacao from "../hooks/avancarConjugacao";
import converterSelecionadosParaListaChavesDeVerbObj from "../hooks/converterSelecionadosParaListaChavesDeVerbObj";
import traduzirChaveVerbObjParaStringRequisitavel from "../hooks/traduzirChaveVerbObjParaStringRequisitavel";
import aferirVerboDeGuiPessoal from "../hooks/aferirVerboDeGuiPessoal";
import formatarTituloExercicioVerbal from "../hooks/formatarTituloExercicioVerbal";
import { cls } from "../hooks/cls";

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

  /*infinitivo
  const [ iafut, setIafut ] = useState<string>("");
  const [ iapre, setIapre ] = useState<string>("");
  const [ iaper, setIaper ] = useState<string>("");*/

  const [ gui, setGui ] = useState<GuiData[]>([]);

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

  useEffect(()=>{
    const componentes = { pessoais: pessoais, infinitivo: infinitivo };
    const dados = traduzirChaveVerbObjParaStringRequisitavel(converterSelecionadosParaListaChavesDeVerbObj( props.conf ), componentes );
    setGui( dados );
  },
  []);

  useEffect(()=>{
    console.log(gui);
  },[gui]);

  return (
    <View>
      <View>
        <Text style={estiloConjugacao.tituloFlexao}>
        {
          ( gui.length > 0 )?
          ( formatarTituloExercicioVerbal( gui[ gui.length - 1 ].stringRequisitavel ) ):
          ( <Text>FIM DO EXERCÍCIO</Text> )
        }
        </Text>
        {
          ( gui.length > 0 )?
          ( gui[ gui.length - 1 ].renderizacao ):
          ( <VerbResView resultados={resultados}/> )
        }
      </View>

      {
        ( gui.length != 0 )?
        (
            <BotaoApp tipo="avaliacao" titulo="AVANÇAR" funcao={()=>{
              if ( gui.length === 0 ) return;
              (async ()=>
              {
                let str = ( gui.length > 0 )?
                (gui[ gui.length - 1 ].stringRequisitavel):
                (undefined);
                
                if ( gui.length > 0 && typeof str === "string" )
                {
                  const avaliacaoCorrente = await aferirVerboDeGuiPessoal( { pri_sing:pps, seg_sing:sps, ter_sing:tps, pri_plur:ppp, seg_plur:spp, ter_plur:tpp },
                                                                          props.infinitivo, str);
                  if ( typeof avaliacaoCorrente != "string" )
                  {
                    console.log( avaliacaoCorrente );
                  }
                  else
                  {
                    resultados.push( avaliacaoCorrente );
                    setResultados( resultados );    
                  }
                }
              })();
              gui.pop();
              setGui( [...gui] );
            }} />
        ):
        (
          <BotaoApp titulo="ENCERRAR" tipo="navegacao" rumo="conjugacao/"/>
        )
      }
      
    </View>
  );
}

