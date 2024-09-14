import { CONSULTAS } from "../constants/VerbRequisitaveis";

/** recebe lista de chaves de VerbObj que foram
 *  definidas como true e retorna lista de strings
 *  requisitáveis para o servidor.
 *  // TODO: AVALIAR RETORNO: {stringRequisitavel:string,guiType:string}[]
* */
const traduzirChaveVerbObjParaStringRequisitavel = ( morfologiasSelecionadas :String[] ): String[] =>
{
  let morfologiasRequisitaveis: String[] = [];

  for ( let i = 0; i < morfologiasSelecionadas.length; i++ )
  {
    switch ( morfologiasSelecionadas[i] )
    {
      case "preia":
        morfologiasSelecionadas.push("indicativoAtivoPresente");
				break;
      case "impia":
        morfologiasSelecionadas.push("indicativoAtivoImperfeito");
				break;
      case "peria":
        morfologiasSelecionadas.push("indicativoAtivoPerfeito");
				break;
      case "mqpia":
        morfologiasSelecionadas.push("indicativoAtivoMaisQuePerfeito");
				break;
      case "fupia":
        morfologiasSelecionadas.push("indicativoAtivoFuturoPerfeito");
				break;
      case "futia":
				morfologiasSelecionadas.push("indicativoAtivoFuturo");
				break;

      case "presa":
				morfologiasSelecionadas.push("subjuntivoAtivoPresente");
				break;
      case "impsa":
				morfologiasSelecionadas.push("subjuntivoAtivoImperfeito");
				break;
      case "persa":
				morfologiasSelecionadas.push("subjuntivoAtivoPerfeito");
				break;
      case "mqpsa":
				morfologiasSelecionadas.push("subjuntivoAtivoMaisQuePerfeito");
				break;

      case "preip":
				morfologiasSelecionadas.push("indicativoPassivoPresente");
				break;
      case "impip":
				morfologiasSelecionadas.push("indicativoPassivoImperfeito");
				break;
      case "perip":
				morfologiasSelecionadas.push("indicativoPassivoPerfeito");
				break;
      case "mqpip":
				morfologiasSelecionadas.push("indicativoPassivoMaisQuePerfeito");
				break;
      case "fupip":
				morfologiasSelecionadas.push("indicativoPassivoFuturoPerfeito");
				break;
      case "futip":
				morfologiasSelecionadas.push("indicativoPassivoFuturo");
				break;

      case "presp":
				morfologiasSelecionadas.push("subjuntivoPassivoPresente");
				break;
      case "impsp":
				morfologiasSelecionadas.push("subjuntivoPassivoImperfeito");
				break;
      case "persp":
				morfologiasSelecionadas.push("subjuntivoPassivoPerfeito");
				break;
      case "mqpsp":
				morfologiasSelecionadas.push("subjuntivoPassivoMaisQuePerfeito");
				break;

      case "infin":
				morfologiasSelecionadas.push("infinitivo");
				break;
      case "parti":
				morfologiasSelecionadas.push("participio");
				break;
      case "supin":
				morfologiasSelecionadas.push("supino");
				break;
      case "imper":
				morfologiasSelecionadas.push("imperativo");
				break;
      case "gerun":
				morfologiasSelecionadas.push("gerundio");
				break;
      default:
				morfologiasSelecionadas.push("");
        break;
    }
  }
  return morfologiasRequisitaveis;
}

export default traduzirChaveVerbObjParaStringRequisitavel;

