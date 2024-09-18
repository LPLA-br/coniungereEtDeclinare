
/** converte vogais longas con diacríticos
 *  macron para vogais comuns.
* */
const eliminarMacrons = ( palavra: string ) =>
{
  return palavra.replaceAll('ā','a').replaceAll('ē','e').replaceAll('ī','i').replaceAll('ō','o').replaceAll('ū','u');
}

export default eliminarMacrons;
