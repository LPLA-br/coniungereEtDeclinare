import { Pessoais } from "../constants/gui";
import obterConjugacaoCorreta from "../hooks/obterConjugacaoCorreta";
import formatarTituloExercicioVerbal from "./formatarTituloExercicioVerbal";
import eliminarMacrons from "./eliminarMacrons";

/** Avalia correção da entrada de usuário
 * para forma verbal que flexina em pessoa e
 * número. retorna string formatada com os
 * resultados.
* */
const aferirVerboDeGuiPessoal = async ( entrada: Pessoais , infinitivo: string
                                      , stringRequisitavel: string ): Promise<string> =>
{ 
  let resultado: string[] = [];
  let retorno: string = formatarTituloExercicioVerbal(stringRequisitavel) + '\n';
  const entradaCorreta: Pessoais | undefined = await obterConjugacaoCorreta( infinitivo, stringRequisitavel );

  if ( typeof entradaCorreta != "undefined" && typeof entrada != "undefined" && typeof stringRequisitavel != "undefined" )
  {
    resultado = resultado.concat( Object.keys(entrada).map((chave)=>
    {
      if ( entrada[ chave ] === (eliminarMacrons(entradaCorreta[ chave ])) )
        return `${(eliminarMacrons(entradaCorreta[ chave ]))} = ${entrada[ chave ]} CORRETO`;
      else
        return `${(eliminarMacrons(entradaCorreta[ chave ]))} ≠ ${entrada[ chave ]} ERRADO`;
    }));

    //construção da resposta em string única a partir de "resultado"
    for ( let i = 0; i < resultado.length; i++ )
    {
      retorno = retorno.concat( resultado[i] + '\n' );
    }

    return retorno;
  }
  else
  {
    return "OPS! a avalição dos resultados falhou.";
  }

};

export default aferirVerboDeGuiPessoal;
