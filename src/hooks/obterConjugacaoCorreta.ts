import axios from "axios";
import { Pessoais } from "../constants/gui";

/** Retorna objeto abstrato ou undefined
 *  re-adaptado para consulta generica em verbos.
* */
const obterConjugacaoCorreta = async ( infinitivo:string, recursoDinamico: string ): Promise<Pessoais | undefined> =>
{
  try
  {
    const substantivo = await axios.get( encodeURI( `http://127.0.0.1:8080/verbos/${recursoDinamico}?infinitivo=${infinitivo}`));

    if ( typeof substantivo == "object" )
    {
      return substantivo.data.res;
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
