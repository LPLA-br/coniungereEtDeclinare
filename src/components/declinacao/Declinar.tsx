/* Componente do desafio de declinação com seus campos
 * de preenchimento de texto.
 * LPLA-br 21/03/2024
 * */

import React from "react";
import { View, Text } from 'react-native';
import { StyleSheet } from "react-native";
import TextBiInput from "../sub-componentes/TextBiInput";

export default function Declinar()
{
  return (
    <View>
      <Text> DECLINARE </Text>
      <View>

        <View>

          <View style={estilos.singPlur}>
            <Text> SINGULAR </Text>
            <Text> PLURAL </Text>
          </View>

          <View>
            <TextBiInput caso="Nominativo"  />
            <TextBiInput caso="Genitivo"  />
            <TextBiInput caso="Dativo"  />
            <TextBiInput caso="Acusativo"  />
            <TextBiInput caso="Ablativo"  />
          </View>
        </View>

      </View>
    </View>
  );
}

const estilos = StyleSheet.create(
  {
    singPlur:
    {
      display: 'flex',
      flexDirection: 'row'
    }
  }
);

