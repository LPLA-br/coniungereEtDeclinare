import { GuiData, ReactNodeConiungere } from "../constants/gui";

/** recebe lista de chaves de VerbObj que foram
 *  definidas como true e retorna estrutura de dados
 *  para orientação de renderização.
* */
const traduzirChaveVerbObjParaStringRequisitavel = ( morfologiasSelecionadas :String[], elementos: ReactNodeConiungere ): GuiData[] =>
{
  let morfologiasRequisitaveis: GuiData[] = [];

  for ( let i = 0; i < morfologiasSelecionadas.length; i++ )
  {
    switch ( morfologiasSelecionadas[i] )
    {
      case "preia":
        morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"indicativoAtivoPresente",renderizacao: elementos.pessoais});
				break;
      case "impia":
        morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"indicativoAtivoImperfeito",renderizacao: elementos.pessoais});
				break;
      case "peria":
        morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"indicativoAtivoPerfeito",renderizacao: elementos.pessoais});
				break;
      case "mqpia":
        morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"indicativoAtivoMaisQuePerfeito",renderizacao: elementos.pessoais});
				break;
      case "fupia":
        morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"indicativoAtivoFuturoPerfeito",renderizacao: elementos.pessoais});
				break;
      case "futia":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"indicativoAtivoFuturo",renderizacao: elementos.pessoais});
				break;

      case "presa":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"subjuntivoAtivoPresente",renderizacao: elementos.pessoais});
				break;
      case "impsa":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"subjuntivoAtivoImperfeito",renderizacao: elementos.pessoais});
				break;
      case "persa":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"subjuntivoAtivoPerfeito",renderizacao: elementos.pessoais});
				break;
      case "mqpsa":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"subjuntivoAtivoMaisQuePerfeito",renderizacao: elementos.pessoais});
				break;

      case "preip":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"indicativoPassivoPresente",renderizacao: elementos.pessoais});
				break;
      case "impip":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"indicativoPassivoImperfeito",renderizacao: elementos.pessoais});
				break;
      case "perip":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"indicativoPassivoPerfeito",renderizacao: elementos.pessoais});
				break;
      case "mqpip":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"indicativoPassivoMaisQuePerfeito",renderizacao: elementos.pessoais});
				break;
      case "fupip":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"indicativoPassivoFuturoPerfeito",renderizacao: elementos.pessoais});
				break;
      case "futip":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"indicativoPassivoFuturo",renderizacao: elementos.pessoais});
				break;

      case "presp":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"subjuntivoPassivoPresente",renderizacao: elementos.pessoais});
				break;
      case "impsp":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"subjuntivoPassivoImperfeito",renderizacao: elementos.pessoais});
				break;
      case "persp":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"subjuntivoPassivoPerfeito",renderizacao: elementos.pessoais});
				break;
      case "mqpsp":
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"subjuntivoPassivoMaisQuePerfeito",renderizacao: elementos.pessoais});
				break;

      case "infin":
				morfologiasRequisitaveis.push({gui:"infinitivo",stringRequisitavel:"infinitivo",renderizacao: undefined});
				break;
      case "parti":
				morfologiasRequisitaveis.push({gui:"participio",stringRequisitavel:"participio",renderizacao: undefined});
				break;
      case "supin":
				morfologiasRequisitaveis.push({gui:"supino",stringRequisitavel:"supino",renderizacao: undefined});
				break;
      case "imper":
				morfologiasRequisitaveis.push({gui:"imperativo",stringRequisitavel:"imperativo",renderizacao: undefined});
				break;
      case "gerun":
				morfologiasRequisitaveis.push({gui:"gerundioGerundivo",stringRequisitavel:"gerundio",renderizacao: undefined});
				break;
      default:
				morfologiasRequisitaveis.push({gui:"pessoais",stringRequisitavel:"",renderizacao: undefined});
        break;
    }
  }
  return morfologiasRequisitaveis;
}

export default traduzirChaveVerbObjParaStringRequisitavel;

