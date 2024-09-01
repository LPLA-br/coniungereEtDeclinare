import Casos from "../constants/Casos";
import axios from "axios";

/** Recebe infinitivo ativo identificador do verbo
 *  e o identificador modo+voz documentado em:
 *  https://github.com/LPLA-br/coniungereEtDeclinare-server/wiki/Documentacao-geral#verbos
* */
const obterConjugacaoCorreta = async ( infinitivo:string, modoVoz: string ): Promise<Casos | undefined> =>
{
  try
  {
    const substantivo = await axios.get( encodeURI( `http://127.0.0.1:8080/verbos/${modoVoz}?infinitivo=${infinitivo}`));

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
