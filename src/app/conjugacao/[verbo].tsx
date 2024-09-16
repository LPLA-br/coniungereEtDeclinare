import { View, Text, ScrollView } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import { useState, createContext } from "react";

import BotaoApp from "@/src/components/BotaoApp";

import ConfiguracaoConjugacao from "@/src/components/ConfiguracaoConjugacao";
import VerbObj from "@/src/constants/VerbObj";
import Conjugar from "@/src/components/Conjugar";

import estiloListaVerbos from "@/src/styles/componentes/conjugacaoVerbosLista";

export const ConfContext = createContext({});

/** Seletores que configuram o exercicio de conjugação
 *  a ser feito. Rota lida: /conjugacao/[VERBO]
 *  */
export default function ExercicioConjugacao()
{
  const local = useLocalSearchParams();
  const [ conf, setConf ] = useState<VerbObj | undefined>(undefined);

  return (
    <ScrollView>
      <View>
        <Stack.Screen options={{ title: "CONIUNGERE" }}/>
        <View id="tituloVerbo">
          <Text style={estiloListaVerbos.tituloVerboSelecionado}>{ local.verbo }</Text>
        </View>
        <ConfContext.Provider value={[ conf, setConf ]}>
          {
            ( typeof conf === "undefined" )?
            ( <ConfiguracaoConjugacao/> ):
            (
              <>
                <Conjugar conf={conf} infinitivo="legere"/>
                <BotaoApp tipo="avaliacao" titulo="CONSOLE LOG" funcao={()=>{console.log(conf);}} />
              </>
            )
          }
        </ConfContext.Provider>
      </View>
    </ScrollView>
  );
}

