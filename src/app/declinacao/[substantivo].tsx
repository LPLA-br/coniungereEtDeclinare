import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useLocalSearchParams, useGlobalSearchParams, Link } from "expo-router";
import { Stack } from "expo-router";

import Declinar from "@/src/components/Declinar";
import BotaoApp from "@/src/components/BotaoApp";

export default function RotaConjugacao()
{
  const local = useLocalSearchParams();

  return (
<SafeAreaView>
      <View>
        <Stack.Screen options={{ title: "CONIUNGERE" }} />
        <View id="tituloSubstativo">
          <Text> {local.substantivo} </Text>
        </View>

        <Declinar ordenacao="linhares"/>

        <BotaoApp titulo="aferir resultados" tipo="interacao" funcao={()=>{console.log("uninplemented")}}/>
      </View>
    </SafeAreaView>
  );

}

