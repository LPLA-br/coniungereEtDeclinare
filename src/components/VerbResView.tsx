import { ReactNode } from "react";
import { useState } from "react";
import { Text, View } from "react-native";
import BotaoApp from "./BotaoApp";

type LocalType =
{
  resultados: string[]
};

const VerbResView = ( props: LocalType ): ReactNode =>
{

  const [ posicao, setPosicao ] = useState<number>(0);

  return (
    <View>
      <Text>
      {
        ( props.resultados.length == 0 )?
        ("OPS. sem resultados para exibir!"):
        (props.resultados[ posicao ])
      }
      </Text>
      <BotaoApp titulo="proximo" tipo="avaliacao" funcao={()=>{if(posicao < props.resultados.length) setPosicao(posicao+1)}} />
      <BotaoApp titulo="anterior" tipo="avaliacao" funcao={()=>{if(posicao > 0) setPosicao(posicao-1)}} />
    </View>
  );
};

export default VerbResView;
