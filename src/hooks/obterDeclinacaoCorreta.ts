import Casos from "../constants/Casos";
import axios from "axios";

/** Obter declinações corretas de um sobustantivo
 *  do servidor.
 *  Recebe nominativo singular de um substantivo latino
 *  Promete objeto tipo "Casos" ou undefined
* */
const obterDeclinacaoCorreta = async ( nominativoSingularSubstantivo: string ): Promise<Casos | undefined> =>
{
  try
  {
    const substantivo = await axios.get( encodeURI( `http://127.0.0.1:8080/nome/substantivo?noms=${nominativoSingularSubstantivo}`));

    if ( typeof substantivo == "object" )
    {
      return substantivo.data.res;
    }
    else return undefined;
  }
  catch ( err )
  {
    return undefined;
  }
}

export default obterDeclinacaoCorreta;
