
/** verifica se há campos vazios
*   true - todos os capos preenchidos
*   false - 1..N campo(s) vazios detectados*/
const inputsPreenchidos = ( inputs: string[] ): boolean =>
{
  for ( let i=0; i<inputs.length; i++)
  {
    if ( inputs[i].length > 0 )
    {
      continue;
    }
    else
    {
      return false;
    }
  }
  return true;
}

export default inputsPreenchidos;
