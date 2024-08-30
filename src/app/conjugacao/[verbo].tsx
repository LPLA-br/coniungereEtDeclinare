import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useLocalSearchParams, useGlobalSearchParams, Stack } from "expo-router";
import { useState, createContext } from "react";

import BotaoApp from "@/src/components/BotaoApp";

import ConfiguracaoConjugacao from "@/src/components/ConfiguracaoConjugacao";
import VerbObj from "@/src/constants/VerbObj";

export const ConfContext = createContext();

/** Seletores que configuram o exercicio de conjugação
 *  a ser feito. Rota lida: /conjugacao/[VERBO]
 *  */
export default function ExercicioConjugacao()
{

  const glob  = useGlobalSearchParams();
  const local = useLocalSearchParams();

  const [ conf, setConf ] = useState<VerbObj | undefined>(undefined);

  console.log("Local:", local.verbo, "Global:", glob.verbo);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Stack.Screen options={{ title: "CONIUNGERE" }}/>
          <View id="tituloVerbo">
            <Text>{ local.verbo }</Text>
          </View>
          <ConfContext.Provider value={[ conf, setConf ]}>
            {
              ( typeof conf === "undefined" )?
              ( <ConfiguracaoConjugacao/> ):
              ( <BotaoApp tipo="avaliacao" titulo="CONSOLE LOG" funcao={()=>{console.log(conf);}} /> )
            }
          </ConfContext.Provider>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

