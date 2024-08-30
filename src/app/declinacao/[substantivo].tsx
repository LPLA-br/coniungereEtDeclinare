import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useLocalSearchParams, useGlobalSearchParams, Link } from "expo-router";
import { Stack } from "expo-router";


import Declinar from "@/src/components/Declinar";

export default function ExercicioDeclinacao()
{
  const parametros = useLocalSearchParams();

  return (
    <SafeAreaView>
      <View>
        <Stack.Screen options={{ title: "DECLINARE" }} />
        <View id="tituloSubstativo">
          <Text> {parametros.substantivo} </Text>
        </View>

        <Declinar ordenacao="linhares" parametroRota={parametros} />

      </View>
    </SafeAreaView>
  );

}

