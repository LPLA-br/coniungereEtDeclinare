
/** elimina problema de ids em renderizações dinâmicas. */
const gerarIdRandomico = ( comprimento: number )=>
{
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let counter = 0;
    while (counter < comprimento) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
      counter += 1;
    }
    return result;
}

export default gerarIdRandomico;
