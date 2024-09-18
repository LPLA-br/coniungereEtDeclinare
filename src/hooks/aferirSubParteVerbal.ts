import { Pessoais } from "../constants/gui";
import obterConjugacaoCorreta from "./obterConjugacaoCorreta";

/** Método invocado para
 *  tratar das formas pessoais
 *  de verbos.
* */
const aferirVerboDeGuiPessoal = async ( entrada: Pessoais ,infinitivo: string,
                                       stringRequisitavel: string, resultadosSetter:Function,
                                      resultados: string[]): Promise<void> =>
{ 
  const correto: Pessoais | undefined = await obterConjugacaoCorreta( infinitivo, stringRequisitavel );
  let resultado: string[] = [];
  let retorno: string = stringRequisitavel + '\n';

  if ( typeof correto != "undefined" && typeof entrada != "undefined" )
  {
    resultado = resultado.concat( Object.keys(entrada).map((chave)=>
    {
      if ( entrada[ chave ] == correto[ chave ] )
        return `esperado:${correto[ chave ]} recebido:${entrada[ chave ]} CORRETO`;
      else
        return `esperado:${correto[ chave ]} recebido:${entrada[ chave ]} ERRADO`;
    }));

    for ( let i = 0; i < resultado.length; i++ )
    {
      retorno = retorno.concat( resultado[i] + '\n' );
    }
    resultadosSetter( resultado.push( retorno ) );
  }
  else
  {
    resultadosSetter( ["OPS: aferição de resultados falhou para " + stringRequisitavel] );
  }

};

export default aferirVerboDeGuiPessoal;
