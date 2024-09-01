/* LPLA-br 21/03/2024 */
import { useState } from "react";
import { View, Text } from 'react-native';
import { Dialog } from "@rneui/base";

import TextBiInput from "./TextBiInput";
import BotaoApp from "./BotaoApp";

import estiloDeclinacoes from "../styles/componentes/declinar";

import aferirResultados from "../hooks/aferirResultados";
import obterDeclinacaoCorreta from "../hooks/obterDeclinacaoCorreta";

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
  const [ modoExibicao, setModoExibicao ] = useState<boolean>(false);

  const [ aviso, setAviso ] = useState<boolean>(false);

  const [ nomS, setNomS ] = useState<string>("");
  const [ nomP, setNomP ] = useState<string>("");
  const [ genS, setGenS ] = useState<string>("");
  const [ genP, setGenP ] = useState<string>("");
  const [ datS, setDatS ] = useState<string>("");
  const [ datP, setDatP ] = useState<string>("");
  const [ acuS, setAcuS ] = useState<string>("");
  const [ acuP, setAcuP ] = useState<string>("");
  const [ ablS, setAblS ] = useState<string>("");
  const [ ablP, setAblP ] = useState<string>("");
  const [ vocS, setVocS ] = useState<string>("");
  const [ vocP, setVocP ] = useState<string>("");

  const [ resultado, setResultado ] = useState<string>("");


  const LINHARES = (
    <>
      <TextBiInput titulo="Nominativo" campoa="singular" campob="plural" settera={setNomS} setterb={setNomP} />
      <TextBiInput titulo="Acusativo"  campoa="singular" campob="plural" settera={setAcuS} setterb={setAcuP} />
      <TextBiInput titulo="Dativo"  campoa="singular" campob="plural" settera={setDatS} setterb={setDatP} />
      <TextBiInput titulo="Ablativo"  campoa="singular" campob="plural" settera={setAblS} setterb={setAblP} />
      <TextBiInput titulo="Genitivo" campoa="singular" campob="plural" settera={setGenS} setterb={setGenP} />
      <TextBiInput titulo="Vocativo" campoa="singular" campob="plural" settera={setVocS} setterb={setVocP} />
    </>
  );

  const ORBERG = (
    <>
      <TextBiInput titulo="Nominativo" campoa="singular" campob="plural" settera={setNomS} setterb={setNomP} />
      <TextBiInput titulo="Acusativo"  campoa="singular" campob="plural" settera={setAcuS} setterb={setAcuP} />
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

          {
            ( modoExibicao == false ?
              (
                ( typeof props.ordenacao != "undefined") ?
                ( (props.ordenacao == "linhares") ? LINHARES : ORBERG ) :
                (<Text> FALHA: propriedade props.ordenacao: string não fornecida. </Text>)
              ) :
              (
                <Text> {resultado} </Text>
              )
            )
          }

          <Dialog overlayStyle={{backgroundColor:"#ffffff"}} isVisible={aviso} onBackdropPress={ ()=>{setAviso(!aviso)} } >
            <Text> Certifica-te de que preencheste todos os campos ! </Text>
            <Dialog.Actions>
              <Dialog.Button title="OK" onPress={()=>{setAviso( !aviso )}} />
            </Dialog.Actions>
          </Dialog>

          {
            ( modoExibicao == false ) ?
            (
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
            ):
            (
              <>
                <BotaoApp tipo="navegacao" titulo="NOVO EXERCÍCIO" rumo="/declinacao" />
              </>
            )
          }
        </View>
    </View>
  );
}
