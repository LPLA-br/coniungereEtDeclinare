/* LPLA-br 21/03/2024 */
import { useState, useEffect } from "react";
import { View, Text, Button } from 'react-native';

import TextBiInput from "./TextBiInput";
import BotaoApp from "@/src/components/BotaoApp";

import estiloDeclinacoes from "../styles/componentes/declinar";

import Casos from "../constants/Casos";

import obterDeclinacaoCorreta from "../hooks/obterDeclinacaoCorreta";
import aferirResultados from "../hooks/aferirResultados";

type LocalProps =
{
  ordenacao: "linhares" | "orberg",
  parametroRota: any //string 
};

/** Macrocomponente responsável por: Requisitar ao servidor
*   o substantivo correto e modalizar os resultados do encerramento
*   do exercício.
* */
export default function Declinar( props: LocalProps )
{
  const [ substantivo, setSubstantivo ] = useState<Casos>(); //request axios

  const [ nomS, setNomS ] = useState<string>("");
  const [ nomP, setNomP ] = useState<string>("");
  const [ genS, setGenS ] = useState<string>("");
  const [ genP, setGenP ] = useState<string>("");
  const [ datS, setDatS ] = useState<string>("");
  const [ datP, setDatP ] = useState<string>("");
  const [ accS, setAccS ] = useState<string>("");
  const [ accP, setAccP ] = useState<string>("");
  const [ ablS, setAblS ] = useState<string>("");
  const [ ablP, setAblP ] = useState<string>("");
  const [ vocS, setVocS ] = useState<string>("");
  const [ vocP, setVocP ] = useState<string>("");

  useEffect(
    ()=>
    {
      (async ()=>
      {
        const resultado = await obterDeclinacaoCorreta( props.parametroRota.substantivo ); 
        if ( typeof resultado == "object" )
          setSubstantivo( resultado );
      })();
    },
    []
  );

  const LINHARES = (
    <>
      <TextBiInput titulo="Nominativo" campoa="singular" campob="plural" settera={setNomS} setterb={setNomP} />
      <TextBiInput titulo="Acusativo"  campoa="singular" campob="plural" settera={setAccS} setterb={setAccP} />
      <TextBiInput titulo="Dativo"  campoa="singular" campob="plural" settera={setDatS} setterb={setDatP} />
      <TextBiInput titulo="Ablativo"  campoa="singular" campob="plural" settera={setAblS} setterb={setAblP} />
      <TextBiInput titulo="Genitivo" campoa="singular" campob="plural" settera={setGenS} setterb={setGenP} />
      <TextBiInput titulo="Vocativo" campoa="singular" campob="plural" settera={setVocS} setterb={setVocP} />
    </>
  );

  const ORBERG = (
    <>
      <TextBiInput titulo="Nominativo" campoa="singular" campob="plural" settera={setNomS} setterb={setNomP} />
      <TextBiInput titulo="Acusativo"  campoa="singular" campob="plural" settera={setAccS} setterb={setAccP} />
      <TextBiInput titulo="Genitivo" campoa="singular" campob="plural" settera={setGenS} setterb={setGenP} />
      <TextBiInput titulo="Dativo"  campoa="singular" campob="plural" settera={setDatS} setterb={setDatP} />
      <TextBiInput titulo="Ablativo"  campoa="singular" campob="plural" settera={setAblS} setterb={setAblP} />
      <TextBiInput titulo="Vocativo" campoa="singular" campob="plural" settera={setVocS} setterb={setVocP} />
    </>
  );

  return (
    <View>
        <View>
          <View style={estiloDeclinacoes.singPlur}>
            <Text> SINGULAR </Text>
            <Text> PLURAL </Text>
          </View>

          <View>
            { (typeof props.ordenacao != "undefined") ?
              ( (props.ordenacao == "linhares") ? LINHARES : ORBERG ) :
              (<Text> FALHA: propriedade props.ordenacao: string não fornecida. </Text>)
            }
          </View>

          <BotaoApp titulo="aferir resultados" tipo="navegacao" rumo={`/`}></BotaoApp>
          <Button title="AFERIR RESULTADOS" onPress={()=>{ aferirResultados({
                nomS: nomS, nomP: nomP, genS: genS, genP: genP, datS: datS,
                datP: datP, accS: accS, accP: accP, ablS: ablS, ablP: ablP,
                vocS: vocS, vocP: vocP
          })}}></Button>
        </View>
    </View>
  );
}
