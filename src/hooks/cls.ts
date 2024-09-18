
/*limpa uma quantidade variável de campos de texto.*/
const cls = ( campos: Function[] ) =>
{
  for( let i = 0; i<campos.length; i++ )
  {
    campos[i]("");
  }
}

export { cls };
