/* LPLA-br 21/03/2024 */
import React from "react";
import { View, Text } from 'react-native';

import TextBiInput from "./TextBiInput";

import estiloDeclinacoes from "../styles/componentes/declinar";

/**
 * Macrocomponente contendo todos os campos
 * necessários para o exercício de declinção.
* */
export default function Declinar()
{
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
            <TextBiInput titulo="Nominativo" campoa="singular" campob="plural" />
            <TextBiInput titulo="Genitivo" campoa="singular" campob="plural" />
            <TextBiInput titulo="Dativo"  campoa="singular" campob="plural" />
            <TextBiInput titulo="Acusativo"  campoa="singular" campob="plural" />
            <TextBiInput titulo="Ablativo"  campoa="singular" campob="plural" />
          </View>
        </View>

      </View>
    </View>
  );
}
