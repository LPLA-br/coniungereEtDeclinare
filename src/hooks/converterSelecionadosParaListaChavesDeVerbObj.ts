import VerbObj from "../constants/VerbObj";

/** Converte dados de configuração do exercicio marcados
 *  como true (para serem feitos) em uma Matriz de strings.
 *  Este método pode ser integrado em outro que converta
 *  a Matriz de strings para uma Matriz de strings requisitáveis
 *  ao servidor.
* */
const converterSelecionadosParaListaChavesDeVerbObj = ( conf: VerbObj ): String[] =>
{
  let morfologiasSelecionadas: String[] = []; 
  const chavesObjecto: String[] = Object.keys(conf);

  for ( let i = 0; i < chavesObjecto.length; i++ )
  {
    //FORÇAR INDEXAÇÃO !
    if ( conf[chavesObjecto[i]] === true )
    {
      morfologiasSelecionadas.push( chavesObjecto[i] );
    }
  }
  return morfologiasSelecionadas;
};

export default converterSelecionadosParaListaChavesDeVerbObj;
