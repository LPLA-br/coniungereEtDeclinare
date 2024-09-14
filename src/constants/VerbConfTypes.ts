/** 14/set/2024
* Lista de chaves do Objeto de configuração
* dos exercicios de conjugacão. Union de
* strings obtidas das chaves do objeto
* de configuração.
* útil para operações com Object.keys()
* e etc ...
* */

const VerbConfKeysList: String[] =
[
 "preia",
 "impia",
 "peria",
 "mqpia",
 "fupia",
 "futia",
  
 "presa",
 "impsa",
 "persa",
 "mqpsa",
  
 "preip",
 "impip",
 "perip",
 "mqpip",
 "fupip",
 "futip",
  
 "presp",
 "impsp",
 "persp",
 "mqpsp",
  
 "infin",
 "parti",
 "supin",
 "imper",
 "gerun",
] as const;

type Tupla = typeof VerbConfKeysList;
type VerbConfKeysListUnion = Tupla[number];

export { VerbConfKeysList, VerbConfKeysListUnion };

