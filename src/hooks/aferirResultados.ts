import Casos from "../constants/Casos";
import inputsPreenchidos from "./inputsPreenchidos";
import traduzirChaveParaPalavra from "./traduzirChaveParaPalavra";
import eliminarMacrons from "./eliminarMacrons";

/** Avalia correção do exercício.
*   Recebe entrada do usuário e
*   callback para função que:
*     recebe nominativo singular string
*     e retorna objeto compilante do tipo
*     "Casos"
*   Esta função retorna string com os
*   resultados.
* */
const aferirResultados = async ( entradaUsuario: Casos, substantivoCorreto: Casos | undefined, setterAviso: Function, aviso: boolean ): Promise< string | undefined > =>
{
  if ( inputsPreenchidos( Object.values( entradaUsuario ) ) )
  {
    try
    {
      const substantivo: Casos | undefined = substantivoCorreto;

      if ( typeof substantivo === "undefined" )
      {
        return undefined;
      }
      else
      {
        let resultado: string[] = [];
        let retorno: string = "";

        resultado = resultado.concat( Object.keys(entradaUsuario).map( (chave)=>
          {
            if( entradaUsuario[ chave ] === eliminarMacrons(substantivo[ chave ]) )
            {
              return ( `${traduzirChaveParaPalavra(chave)} ${entradaUsuario[chave]} = ${eliminarMacrons(substantivo[ chave ])} ACERTASTE\n` );
            }
            else
            {
              return ( `${traduzirChaveParaPalavra(chave)} ${entradaUsuario[chave]} ≠ ${eliminarMacrons(substantivo[ chave ])} ERRASTE\n` );
            }
          })
        );
        
        for ( let i = 0; i <= resultado.length; i+=2 )
        {
          if ( typeof resultado[i] !== "undefined" )
          {
            retorno = retorno.concat( `${resultado[i]} ${resultado[i+1]}\n` );
          }
        }

        return retorno;
      }
    }
    catch( err )
    {
      console.log( "ERRO: ", err );
      return undefined;
    }
  }
  else
  {
    setterAviso( !aviso );
    return undefined;
  }
}

export default aferirResultados;
