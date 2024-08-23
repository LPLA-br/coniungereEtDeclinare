/**
*   Traduz chave do tipo Caso para
*   nome canônico de caso gramatical.
*   recebe chave string
*   retorna string canônica
* */
const traduzirChaveParaPalavra = ( chave :string ): string =>
{
  switch ( chave )
  {
    case "nomS":
      return "nominativo singular: ";
    case "nomP":
      return "nominativo plural: ";
    case "genS":
      return "genitivo singular: ";
    case "genP":
      return "genitivo plural: ";
    case "datS":
      return "dativo singular: ";
    case "datP":
      return "dativo plural: ";
    case "acuS":
      return "acusativo singular: ";
    case "acuP":
      return "acusativo plural: ";
    case "ablS":
      return "ablativo singular: ";
    case "ablP":
      return "ablativo plural: ";
    case "vocS":
      return "vocativo singular: ";
    case "vocP":
      return "vocativo plural: ";
    default:
      return "";
  };
}

export default traduzirChaveParaPalavra;
