import axios from "axios";
import { Pessoais } from "../constants/gui";
import server from "../constants/Server";

/** Retorna objeto poliforma ou undefined
 *  consiste em uma re-implementação
 *  especifica de obterConjugacaoCorreta().
 *  desencapsula res de uma lista.
* */
const obterConjugacaoCorreta = async ( infinitivo:string, recursoDinamico: string ): Promise<Pessoais | undefined> =>
{
  try
  {
    const parteVerbo = await axios.get( encodeURI( `${server}/verbos/${recursoDinamico}?infinitivo=${infinitivo}`));

    if ( typeof parteVerbo == "object" )
    {
      return parteVerbo.data.res[0];
    }
    else return undefined;
  }
  catch ( err )
  {
    console.log( "ERRO: ",err );
    return undefined;
  }
}

export default obterConjugacaoCorreta;
