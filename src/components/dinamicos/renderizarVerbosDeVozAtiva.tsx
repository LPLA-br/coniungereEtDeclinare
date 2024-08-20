import { Text, View } from "react-native";
import { ReactNode } from 'react';

import BotaoApp from "../BotaoApp";

/**
* Renderiza verbos infinitivos presentes ativos
* contidos em dados.
* requer setter externo para definir qual
* verbo será de exercício.
* retorna BotaoApp ou Text de aviso ou elemento vazio.
* */
const renderizarVerbosPorDeVozAtiva = ( dados: any[] | undefined, setterVerboAlvo: Function ): ReactNode =>
{
  return (
    (typeof dados == "undefined") ?
    (<Text> OPS! problema ao conectar-se com servidor ! </Text>) :
    (dados.map( (item)=>
    {
      if ( item.voz == "a" )
      {
        return ( <BotaoApp titulo={item.praesens} tipo='alteracao' funcao={setterVerboAlvo} /> );
      }
      else
      {
        return ( <></> );
      }
    }))
  )
};

export default renderizarVerbosPorDeVozAtiva;
