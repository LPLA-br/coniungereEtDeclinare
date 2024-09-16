import { ReactNode } from "react";
import { GuiData } from "@/src/constants/gui";

/** recebe dados para renderização e renderizações disponíveis
*   e retorna a renderização correta de acordo com tais dados.
*   Fornece a interface gráfica correta para aquela forma do
*   verbo.
*   */
const renderizarMorfologiaCorreta = ( dadosGui: GuiData | undefined, renderizacoes: any[] )
: ReactNode | undefined  =>
{
  if ( typeof dadosGui != "undefined" )
  {
    switch ( dadosGui.gui )
    {
      case "pessoais":
        return renderizacoes?.pessoais;
      case "infinitivo":
        return renderizacoes?.infinitivo;
      default:
        return (<></>);
    }
  }
  else
  {
    return (<></>);
  }
};

export default renderizarMorfologiaCorreta;
