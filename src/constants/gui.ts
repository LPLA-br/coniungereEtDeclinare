import { ReactNode } from "react";

/** Indica tipos de interface
 *  para renderização de verbos e
 *  para tratamento de entrada do usuário.
* */
type Gui = "pessoais" | "infinitivo" |
  "imperativo" | "participio" | "gerundioGerundivo" | "supino";

// grupo de elementos renderizáveis
type ReactNodeConiungere =
{
  "pessoais"?: ReactNode,
  "infinitivo"?: ReactNode, 
  "imperativo"?: ReactNode,
  "participio"?: ReactNode,
  "gerundioGerundivo"?: ReactNode,
  "supino"?: ReactNode
};

type GuiData =
{
  gui:Gui, //campo obsoleto
  stringRequisitavel:string,
  renderizacao: ReactNode
};

type Pessoais = 
{
  pri_sing: string,
  seg_sing: string,
  ter_sing: string,
  pri_plur: string,
  seg_plur: string,
  ter_plur: string,
};

type Infinitivo = 
{
  futuroAtivo:      string,
  futuroPassivo:    string,
  presenteAtivo:    string,
  presentePassivo:  string,
  perfeitoAtivo:    string,
  perfeitoPassivo:  string,
};

type Imperativo =
{
  praesens_sing: string,
  futurum_sing:  string,
  praesens_plur: string,
  futurum_plur:  string,
};

type GerundioGerundivo =
{
   acusativo: string,
   genitivo: string,
   ablativo: string
};

type Supino =
{
  supinoI:  string,
  supinoII: string
};

export { Gui, GuiData, ReactNodeConiungere, Pessoais, Infinitivo, Imperativo, GerundioGerundivo, Supino };
