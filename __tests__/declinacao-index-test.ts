/**********************
TESTES UNITÁRIO
funções executadas em src/app/declinacao/index.tsx
Funções com retorno JSX deve ser replicadas para
retorno string.
************************/

import obterIndexPalavras from "../src/hooks/obterIndexPalavras";

describe("obterIndexPalavras", ()=>
{
  test("requisição correta para obter lista de substantivos",()=>
  {
    (async ()=>
    {
      let resposta = await obterIndexPalavras("http://127.0.0.1:8080/nome/substantivos");
      expect( resposta ).not.toBe(undefined);
      expect( typeof resposta ).toBe( "object" );
      expect( resposta.length ).toBeGreaterThan(1);
      expect( typeof resposta[0] ).toBe( "object" );
    })();
  });

  test("requisição incorreta para obter lista de substantivos",()=>
  {
    (async ()=>
    {
      let resposta = await obterIndexPalavras("http://127.0.0.1:8080/noma/surubastivos");
      expect( resposta ).toBe(undefined);
    })();
  });

});

describe("renderizarSubstantivosPorDeclinacao", ()=>
{

  // Replicação da função sem JSX.
  const renderizarSubstantivoPorSuaDeclinacao = ( declinacao: number, dados: any[] | undefined, setterSubstantivoAlvo: Function ): string | ("BotaoApp"|"Vazio")[] =>
  {
    return (
      (typeof dados == "undefined") ?
      ("Text.aviso") :
      (dados.map( (item)=>
      {
        if ( item.nomS.length > 0 && item.declinacao == declinacao )
          return( "BotaoApp" );
        else
          return ( "Vazio" );
      }))
    )
  };

  test("renderizacao dinamica de substantivos normal para <BotaoApp> ", ()=>
  {
    (async()=>
    {
      function mockUseStateSetter( input: string ): string
      {
        return input;
      }

      let resposta = await obterIndexPalavras("http://127.0.0.1:8080/nome/substantivos");
      let componente = renderizarSubstantivoPorSuaDeclinacao( 1, resposta, mockUseStateSetter );
      expect( componente.length ).toBeGreaterThan( 0 );
      expect( componente[0] ).toBe( "BotaoApp" );
    })();

  test("renderizacao dinamica de substantivos falha por servdior indisponível", ()=>
  {
    (async()=>
    {
      function mockUseStateSetter( input: string ): string
      {
        return input;
      }

      let resposta = undefined;
      let componente = renderizarSubstantivoPorSuaDeclinacao( 1, resposta, mockUseStateSetter );
      expect( componente ).toBe( "Text.aviso" );
    })();
  });

  test("Renderização de elementos vazios", ()=>
  {
    (async()=>
    {
      function mockUseStateSetter( input: string ): string
      {
        return input;
      }

      let resposta = await obterIndexPalavras("http://127.0.0.1:8080/nome/substantivos");
      let componente = renderizarSubstantivoPorSuaDeclinacao( 1, resposta, mockUseStateSetter );
      expect( componente.length ).toBeGreaterThan( 0 );
      expect( componente.filter( (v:string)=>{ if(v=="Vazio") return v; }) ).toHaveLength( 0 );
    })();
  });
});

