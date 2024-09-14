
/** 14/set/2024
 *  Importado do backend src/types
*   lista de strings requisitáveis
*   e union para tratamentos com
*   Object.keys;
* */
const CONSULTAS = [
    "indicativoAtivoPresente"
  , "indicativoAtivoImperfeito"
  , "indicativoAtivoPerfeito"
  , "indicativoAtivoMaisQuePerfeito"
  , "indicativoAtivoFuturoPerfeito"
  , "indicativoAtivoFuturo"
  , "subjuntivoAtivoPresente"
  , "subjuntivoAtivoImperfeito"
  , "subjuntivoAtivoPerfeito"
  , "subjuntivoAtivoMaisQuePerfeito"
  , "indicativoPassivoPresente"
  , "indicativoPassivoImperfeito"
  , "indicativoPassivoPerfeito"
  , "indicativoPassivoMaisQuePerfeito"
  , "indicativoPassivoFuturoPerfeito"
  , "indicativoPassivoFuturo"
  , "subjuntivoPassivoPresente"
  , "subjuntivoPassivoImperfeito"
  , "subjuntivoPassivoPerfeito"
  , "subjuntivoPassivoMaisQuePerfeito"
] as const;

type Tupla = typeof CONSULTAS;
type consultas = Tupla[number];

export { CONSULTAS, consultas };
