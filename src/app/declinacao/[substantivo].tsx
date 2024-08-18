import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useLocalSearchParams, useGlobalSearchParams, Link } from "expo-router";
import { Stack } from "expo-router";


import Declinar from "@/src/components/Declinar";

import Casos from "@/src/constants/Casos";

export default function RotaConjugacao()
{
  const parametros = useLocalSearchParams();

  return (
    <SafeAreaView>
      <View>
        <Stack.Screen options={{ title: "CONIUNGERE" }} />
        <View id="tituloSubstativo">
          <Text> {parametros.substantivo} </Text>
        </View>

        <Declinar ordenacao="linhares" parametroRota={parametros} />

      </View>
    </SafeAreaView>
  );

}

