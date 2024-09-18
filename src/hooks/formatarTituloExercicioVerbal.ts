
/** Aplica formatação simples para string de titulo de exercício.
* */
const formatarTituloExercicioVerbal = ( tituloCamelCase: string )=>
{
  return tituloCamelCase.replace(/([A-Z][a-z]*)/g, ' $1')
           .replace(/^./, tituloCamelCase[0].toLowerCase())
           .trim();
}

export default formatarTituloExercicioVerbal;

