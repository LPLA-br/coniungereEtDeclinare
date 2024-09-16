
/** Indica tipos de interface
 *  para renderização de verbos e
 *  para tratamento de entrada do usuário.
* */
type Gui = "pessoais" | "infinitivo" |
  "imperativo" | "participio" | "gerundioGerundivo" | "supino";

type GuiData =
{
  gui:Gui,
  stringRequisitavel:string
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

export { Gui, GuiData, Pessoais, Infinitivo, Imperativo, GerundioGerundivo, Supino };
