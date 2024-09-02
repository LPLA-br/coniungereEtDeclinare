import { Text, View } from "react-native";
import { ReactNode } from 'react';

import BotaoApp from "../BotaoApp";

/**
* Renderiza substantivos presentes em dados
* de acordo com a declinação especificada.
* Recebe: numero da declinação,
* dados requisitados no formato lista de objetos:{ nomS: string, declinacao: number, genero: string.length=1 },
* setter de um useState para <string>
* retorna array de reactNode<BotaoApp> ou um <Text> de aviso ou elemento vazio <></> (problema texto redundante).
* */
const renderizarSubstantivoPorSuaDeclinacao = ( declinacao: number, dados: any[] | undefined, setterSubstantivoAlvo: Function ): ReactNode =>
{
  return (
    (typeof dados == "undefined") ?
    (<Text> OPS! problema ao conectar-se com servidor ! </Text>) :
    (dados.map( (item)=>
    {
      if ( item.nomS.length > 0 && item.declinacao == declinacao )
        return( <BotaoApp titulo={item.nomS} tipo='alteracao' funcao={setterSubstantivoAlvo} /> );
      else
        return ( <></> );
    }))
  )
};

export default renderizarSubstantivoPorSuaDeclinacao;
