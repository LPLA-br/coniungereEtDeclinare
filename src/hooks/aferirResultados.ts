import Casos from "../constants/Casos";

const aferirResultados = ( entradaUsuario: Casos ) =>
{
    let retorno = {};

    for ( const chave in entradaUsuario )
    {
      if ( (entradaUsuario[chave]) == (substantivo[chave]))
      {
        retorno[chave] = "acertaste";
      }
      else
      {
        retorno[chave] = "erraste";
      }
    }
    console.log( JSON.stringify(retorno) );
}

export default aferirResultados;
