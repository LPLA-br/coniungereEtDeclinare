import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useLocalSearchParams, useGlobalSearchParams, Link } from "expo-router";
import { Stack } from "expo-router";

import {
  Accordion,
  AccordionItem,
  AccordionContent,
} from "@/components/ui/accordion";

import CaixaSeletora from "../../components/CaixaSeletora";
import AcordeaoCabecalho from "@/src/components/AcordeaoCabecalho";
import BotaoApp from "@/src/components/BotaoApp";

/** Seletores que configuram o exercicio de conjugação
 *  a ser feito. Rota lida: /conjugacao/[VERBO]
 *  */
export default function RotaConjugacao()
{

  const glob  = useGlobalSearchParams();
  const local = useLocalSearchParams();

  console.log("Local:", local.verbo, "Global:", glob.verbo);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Stack.Screen options={{ title: "CONIUNGERE" }}/>
          <View id="tituloVerbo">
            <Text>{ local.verbo }</Text>
          </View>
          <Text> AEDIFICA TUA VIA: </Text>
            <Accordion
              size="md"
              variant="filled"
              type="single"
              isCollapsible={true}
              isDisabled={false}
              className="modoIndicativoVozAtiva"
            >
              <AccordionItem value="miva">
                <AcordeaoCabecalho titulo="modo indicativo voz ativa" />
                <AccordionContent>
                  <CaixaSeletora titulo="presente" />
                  <CaixaSeletora titulo="imperfeito" />
                  <CaixaSeletora titulo="perfeito" />
                  <CaixaSeletora titulo="mais que perfeito" />
                  <CaixaSeletora titulo="futuro perfeito" />
                  <CaixaSeletora titulo="futuro" />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="msva">
                <AcordeaoCabecalho titulo="modo subjuntivo voz ativa" />
                <AccordionContent>
                  <CaixaSeletora titulo="presente" />
                  <CaixaSeletora titulo="imperfeito" />
                  <CaixaSeletora titulo="perfeito" />
                  <CaixaSeletora titulo="mais que perfeito" />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="mivp">
                <AcordeaoCabecalho titulo="modo indicativo voz passiva" />
                <AccordionContent>
                  <CaixaSeletora titulo="presente" />
                  <CaixaSeletora titulo="imperfeito" />
                  <CaixaSeletora titulo="perfeito" />
                  <CaixaSeletora titulo="mais que perfeito" />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="msvp">
                <AcordeaoCabecalho titulo="modo subjuntivo voz passiva" />
                <AccordionContent>
                  <CaixaSeletora titulo="presente" />
                  <CaixaSeletora titulo="imperfeito" />
                  <CaixaSeletora titulo="perfeito" />
                  <CaixaSeletora titulo="mais que perfeito" />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <BotaoApp titulo="iniciar exercicio" tipo="interacao" funcao={()=>{console.log("uninplemented")}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

