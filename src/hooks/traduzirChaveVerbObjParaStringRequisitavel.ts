import Gui from "../constants/gui";

/** recebe lista de chaves de VerbObj que foram
 *  definidas como true e retorna lista de strings
 *  requisitáveis para o servidor e qual renderização
 *  é adequada.
* */
const traduzirChaveVerbObjParaStringRequisitavel = ( morfologiasSelecionadas :String[] ): {gui:Gui,stringRequisitavel:string}[] =>
{
  let morfologiasRequisitaveis: {gui:Gui,stringRequisitavel:string}[] = [];

  for ( let i = 0; i < morfologiasSelecionadas.length; i++ )
  {
    switch ( morfologiasSelecionadas[i] )
    {
      case "preia":
        morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"indicativoAtivoPresente"});
				break;
      case "impia":
        morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"indicativoAtivoImperfeito"});
				break;
      case "peria":
        morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"indicativoAtivoPerfeito"});
				break;
      case "mqpia":
        morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"indicativoAtivoMaisQuePerfeito"});
				break;
      case "fupia":
        morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"indicativoAtivoFuturoPerfeito"});
				break;
      case "futia":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"indicativoAtivoFuturo"});
				break;

      case "presa":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"subjuntivoAtivoPresente"});
				break;
      case "impsa":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"subjuntivoAtivoImperfeito"});
				break;
      case "persa":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"subjuntivoAtivoPerfeito"});
				break;
      case "mqpsa":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"subjuntivoAtivoMaisQuePerfeito"});
				break;

      case "preip":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"indicativoPassivoPresente"});
				break;
      case "impip":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"indicativoPassivoImperfeito"});
				break;
      case "perip":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"indicativoPassivoPerfeito"});
				break;
      case "mqpip":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"indicativoPassivoMaisQuePerfeito"});
				break;
      case "fupip":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"indicativoPassivoFuturoPerfeito"});
				break;
      case "futip":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"indicativoPassivoFuturo"});
				break;

      case "presp":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"subjuntivoPassivoPresente"});
				break;
      case "impsp":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"subjuntivoPassivoImperfeito"});
				break;
      case "persp":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"subjuntivoPassivoPerfeito"});
				break;
      case "mqpsp":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"subjuntivoPassivoMaisQuePerfeito"});
				break;

      case "infin":
				morfologiasRequisitaveis.push({gui:"infinitivo",stringRequisitavel:"infinitivo"});
				break;
      case "parti":
				morfologiasRequisitaveis.push({gui:"participio",stringRequisitavel:"participio"});
				break;
      case "supin":
				morfologiasRequisitaveis.push({gui:"supino",stringRequisitavel:"supino"});
				break;
      case "imper":
				morfologiasRequisitaveis.push({gui:"imperativo",stringRequisitavel:"imperativo"});
				break;
      case "gerun":
				morfologiasRequisitaveis.push({gui:"gerundioGerundivo",stringRequisitavel:"gerundio"});
				break;
      default:
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:""});
        break;
    }
  }
  return morfologiasRequisitaveis;
}

export default traduzirChaveVerbObjParaStringRequisitavel;

