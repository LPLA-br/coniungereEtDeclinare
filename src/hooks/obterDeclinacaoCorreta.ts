import Casos from "../constants/Casos";
import axios from "axios";
import server from "../constants/Server";

const obterDeclinacaoCorreta = async ( nominativoSingularSubstantivo: string ): Promise<Casos | undefined> =>
{
  try
  {
    const substantivo = await axios.get( encodeURI( `${server}/nome/substantivo?noms=${nominativoSingularSubstantivo}`));

    if ( typeof substantivo == "object" )
    {
      console.log(substantivo.data);
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

export default obterDeclinacaoCorreta;
