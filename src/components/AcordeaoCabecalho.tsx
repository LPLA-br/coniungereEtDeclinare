import {
        AccordionHeader,
        AccordionTrigger,
        AccordionTitleText
} from "@/components/ui/accordion";

import { Text } from "react-native";

type LocalProps =
{
  titulo: string
};

export default function AcordeaoCabecalho( props: LocalProps )
{
  return (
    <AccordionHeader>
      <AccordionTrigger>
        {({ isExpanded }) => {
          return (
            <>
              <AccordionTitleText> {props.titulo} </AccordionTitleText>
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
  );
}

