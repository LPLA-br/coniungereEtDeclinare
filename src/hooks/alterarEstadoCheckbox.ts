
/** altera o estado booleano de um campo
 *  de um objeto.
* */
const alterarEstadoCheckbox = ( alvo: any, setterAlvo: Function ) =>
{
  setterAlvo( !alvo );
};

export default alterarEstadoCheckbox;
