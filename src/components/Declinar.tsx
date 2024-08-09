/* LPLA-br 21/03/2024 */
import React from "react";
import { View, Text } from 'react-native';

import TextBiInput from "./TextBiInput";

import estiloDeclinacoes from "../styles/componentes/declinar";

type LocalProps =
{
  ordenacao: "linhares" | "orberg"
};

/**
 * Macrocomponente contendo todos os campos
 * necessários para o exercício de declinção.
* */
export default function Declinar( props: LocalProps )
{
  const LINHARES = (
    <>
      <TextBiInput titulo="Nominativo" campoa="singular" campob="plural" />
      <TextBiInput titulo="Acusativo"  campoa="singular" campob="plural" />
      <TextBiInput titulo="Dativo"  campoa="singular" campob="plural" />
      <TextBiInput titulo="Ablativo"  campoa="singular" campob="plural" />
      <TextBiInput titulo="Genitivo" campoa="singular" campob="plural" />
      <TextBiInput titulo="Vocativo" campoa="singular" campob="plural" />
    </>
  );

  const ORBERG = (
    <>
      <TextBiInput titulo="Nominativo" campoa="singular" campob="plural" />
      <TextBiInput titulo="Acusativo"  campoa="singular" campob="plural" />
      <TextBiInput titulo="Genitivo" campoa="singular" campob="plural" />
      <TextBiInput titulo="Dativo"  campoa="singular" campob="plural" />
      <TextBiInput titulo="Ablativo"  campoa="singular" campob="plural" />
      <TextBiInput titulo="Vocativo" campoa="singular" campob="plural" />
    </>
  );

  return (
    <View>
      <Text> DECLINARE </Text>
      <View>

        <View>

          <View style={estiloDeclinacoes.singPlur}>
            <Text> SINGULAR </Text>
            <Text> PLURAL </Text>
          </View>

          <View>
            { (typeof props.ordenacao != "undefined") ?
              ( (props.ordenacao == "linhares") ? LINHARES : ORBERG )
            :
              (<Text> FALHA: propriedade props.ordenacao: string não fornecida. </Text>)
            }
          </View>
        </View>

      </View>
    </View>
  );
}
