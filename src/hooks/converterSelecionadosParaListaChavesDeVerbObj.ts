import VerbObj from "../constants/VerbObj";

const converterSelecionadosParaListaChavesDeVerbObj = ( conf: VerbObj ): String[] =>
{
  let morfologiasSelecionadas: String[] = []; 
  const chavesObjecto: String[] = Object.keys(conf);

  for ( let i = 0; i < chavesObjecto.length; i++ )
  {
    //FORÇAR INDEXAÇÃO !
    if ( conf[chaveCorrente[i]] == true )
    {
      morfologiasSelecionadas.push( chavesObjecto[i] );
    }
  }
  return morfologiasSelecionadas;
};

export default converterSelecionadosParaListaChavesDeVerbObj;
