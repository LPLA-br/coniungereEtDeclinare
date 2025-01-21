import axios from 'axios';

/**
*  Realiza requisição GET ao servidor
*  para obter um index de verbos ou
*  substantivos presentes no servidor.
*  requer url:string
*  retorna: lista de objetos ou undefined.
* */
const obterIndexPalavras = async ( url: string ) =>
{
    try
    {
      const response = await axios.get( url );

      if( typeof response.data == "string" )
      {

        let resposta;

        try
        {
          resposta = JSON.parse( response.data );
          return resposta;
        }
        catch( err )
        {
          console.log( "ERRO: ", err );
        }

      }
      else if ( typeof response.data == "object" )
      {
        if ( typeof response.data.res != "undefined" )
        {
          return response.data.res;
        }
      }
    }
    catch (error)
    {
      return undefined;
    }
}

export default obterIndexPalavras;
