import Casos from "../constants/Casos";

/** Avalia correção do exercício.
*   Recebe entrada do usuário e
*   callback para função que:
*     recebe nominativo singular string
*     e retorna objeto compilante do tipo
*     "Casos"
*   Esta função retorna string com os
*   resultados.
* */
const aferirResultados = async ( entradaUsuario: Casos, substantivoCorreto: Casos | undefined ): Promise< string | undefined > =>
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
          if( entradaUsuario[ chave ] === substantivo[ chave ] )
          {
            return ( `${entradaUsuario[chave]} = ${substantivo[chave]} ACERTASTE\n` );
          }
          else
          {
            return ( `${entradaUsuario[chave]} → ${substantivo[chave]} ERRASTE\n` );
          }
        })
      );
      
      for ( let i = 0; i <= resultado.length; i++ )
      {
        if ( typeof resultado[i] !== "undefined" )
        {
          retorno = retorno.concat( `${resultado[i]}\n` );
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

export default aferirResultados;
