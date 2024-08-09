import { View, Text, ScrollView } from "react-native";
import { useLocalSearchParams, useGlobalSearchParams, Link } from "expo-router";

import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
  AccordionTrigger,
  AccordionTitleText,
  AccordionIcon
} from "@/components/ui/accordion";

import CaixaSeletora from "../../components/CaixaSeletora";

/** Seletores que configuram o exercicio de conjugação
 *  a ser feito. Rota lida: /conjugacao/[VERBO]
 *  */
export default function RotaConjugacao()
{

  const glob  = useGlobalSearchParams();
  const local = useLocalSearchParams();

  console.log("Local:", local.verbo, "Global:", glob.verbo);

  return (
    <View>
      <View id="tituloVerbo">
        <Text>{ local.verbo }</Text>
      </View>
      <Text> AEDIFICA TUA VIA: </Text>
        <Accordion
          size="md"
          variant="filled"
          type="multiple"
          isCollapsible={true}
          isDisabled={false}
          className="modoIndicativoVozAtiva"
        >
          <AccordionItem value="demonstracao">

            <AccordionHeader>
              <AccordionTrigger>
                {({ isExpanded }) => {
                  return (
                    <>
                      <AccordionTitleText>How do I place an order?</AccordionTitleText>
                      {isExpanded ? (
                        <Text>-</Text>
                      ) : (
                        <Text>+</Text>
                      )}
                    </>
                  )
                }}
              </AccordionTrigger>
            </AccordionHeader>

            <AccordionContent>

            <CaixaSeletora titulo="presente" />
            <CaixaSeletora titulo="imperfeito" />
            <CaixaSeletora titulo="perfeito" />
            <CaixaSeletora titulo="mais que perfeito" />
            <CaixaSeletora titulo="futuro perfeito" />
            <CaixaSeletora titulo="futuro" />

            </AccordionContent>
          </AccordionItem>
        </Accordion>
    </View>
  );
}

