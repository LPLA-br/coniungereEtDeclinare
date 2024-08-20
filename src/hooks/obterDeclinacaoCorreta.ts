import Casos from "../constants/Casos";
import axios from "axios";

const obterDeclinacaoCorreta = async ( nominativoSingularSubstantivo: string ): Promise<Casos | undefined> =>
{
  try
  {
    const substantivo = await axios.get( encodeURI( `http://127.0.0.1:8080/nome/substantivo?noms=${props.parametroRota.substantivo}`));

    if ( typeof substantivo == "object" )
    {
      console.log(substantivo.data);
      return substantivo.data;
    }
    else throw new Error( "Resposta não é objeto" );
  }
  catch ( err )
  {
    console.log( "ERRO: ",err );
    return undefined;
  }
}

export default obterDeclinacaoCorreta;
