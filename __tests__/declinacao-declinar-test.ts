/*
 TESTE INTEGRAÇÃO INTER FUNÇÕES
 src/app/[substantivo].tsx -> src/app/components/Declinar
* */
import aferirResultados from "../src/hooks/aferirResultados";
import obterDeclinacaoCorreta from "../src/hooks/obterDeclinacaoCorreta";
import inputsPreenchidos from "../src/hooks/inputsPreenchidos";
import Casos from "../src/constants/Casos";


describe("obterDeclinacaoCorreta",()=>
{
  test("requisição correta",()=>
  {
    (async ()=>
    {
      const resposta = await obterDeclinacaoCorreta( "Caesar" );
      expect( resposta ).not.toBe(undefined);
      expect( typeof resposta ).toBe( "object" );
      expect( resposta ).toHaveProperty( "nomS" );
    })();
  });

  test("requisição incorreta", ()=>
  {
    (async ()=>
    {
      const resposta = await obterDeclinacaoCorreta( "nada" );
      expect( resposta ).toBe(undefined);
      expect( typeof resposta ).not.toBe( "object" );
    })();
  });
});

describe("inputsPreenchidos", ()=>
{
  test( "todas entradas preenchidas", ()=>
  {
    const userInputFake: Casos =
    {
      nomS: "Caesar",   nomP: "-",
      genS: "Caesaris", genP: "-",
      datS: "Caesarī",  datP: "-",
      acuS: "Caesarem", acuP: "-",
      ablS: "Caesare",  ablP: "-",
      vocS: "Caesar",   vocP: "-"
    };
    
    const status: boolean = inputsPreenchidos( Object.values( userInputFake ) );
    expect(status).toBe(true);
  });

  test( "entradas parcialmente preenchidas", ()=>
  {
    const userInputFake: Casos =
    {
      nomS: "Caesar",   nomP: "",
      genS: "Caesaris", genP: "-",
      datS: "Caesarī",  datP: "-",
      acuS: "Caesarem", acuP: "-",
      ablS: "Caesare",  ablP: "-",
      vocS: "",         vocP: "-"
    };
    
    const status: boolean = inputsPreenchidos( Object.values( userInputFake ) );
    expect(status).toBe(false);
  });

  test( "entradas totalmente vazias", ()=>
  {
    const userInputFake: Casos =
    {
      nomS: "", nomP: "",
      genS: "", genP: "",
      datS: "", datP: "",
      acuS: "", acuP: "",
      ablS: "", ablP: "",
      vocS: "", vocP: ""
    };
    
    const status: boolean = inputsPreenchidos( Object.values( userInputFake ) );
    expect(status).toBe(false);
  });

});

describe("aferirResultados",()=>
{

  test("aferição de resultados corretos",()=>
  {
    (async ()=>
    {
      const correctUserInputFake: Casos =
      {
        nomS: "Caesar",   nomP: "-",
        genS: "Caesaris", genP: "-",
        datS: "Caesarī",  datP: "-",
        acuS: "Caesarem", acuP: "-",
        ablS: "Caesare",  ablP: "-",
        vocS: "Caesar",   vocP: "-"
      }

      let fakeCamposPreenchidos: boolean = true;
      let mockSetterCamposPreenchidos = (v:boolean)=>{ fakeCamposPreenchidos = v };

      const resultado = await aferirResultados(
        correctUserInputFake,
        await obterDeclinacaoCorreta( "Caesar" ),
        mockSetterCamposPreenchidos,
        fakeCamposPreenchidos
      );

      expect( typeof resultado ).toBe( "string" );
      expect( fakeCamposPreenchidos ).toBe( true );
    })();
  });

  test("aferição de resultados parcialmente corretos",()=>
  {
    (async ()=>
    {
      const correctUserInputFake: Casos =
      {
        nomS: "Caesar",   nomP: "-",
        genS: "Caesarois", genP: "Caesarirum",
        datS: "Caesarī",  datP: "-",
        acuS: "Caesareus", acuP: "-",
        ablS: "Caesare",  ablP: "-",
        vocS: "Caesarous",   vocP: "-"
      }

      let fakeCamposPreenchidos: boolean = true;
      let mockSetterCamposPreenchidos = (v:boolean)=>{ fakeCamposPreenchidos = v };

      const resultado = await aferirResultados(
        correctUserInputFake,
        await obterDeclinacaoCorreta( "Caesar" ),
        mockSetterCamposPreenchidos,
        fakeCamposPreenchidos
      );

      expect( typeof resultado ).toBe( "string" );
      expect( fakeCamposPreenchidos ).toBe( true );
    })();
  });


  test("aferição de resultados totalmente errados",()=>
  {
    (async ()=>
    {
      const correctUserInputFake: Casos =
      {
        nomS: "Caes",   nomP: "Moi",
        genS: "Caesarrs", genP: "Xoi",
        datS: "Caesarīus",  datP: "Xui",
        acuS: "Caesarea", acuP: "Cui",
        ablS: "Caesareasd",  ablP: "Coi",
        vocS: "Caesarcu",   vocP: "Cae"
      }

      let fakeCamposPreenchidos: boolean = true;
      let mockSetterCamposPreenchidos = (v:boolean)=>{ fakeCamposPreenchidos = v };

      const resultado = await aferirResultados(
        correctUserInputFake,
        await obterDeclinacaoCorreta( "Caesar" ),
        mockSetterCamposPreenchidos,
        fakeCamposPreenchidos
      );

      expect( typeof resultado ).toBe( "string" );
      expect( fakeCamposPreenchidos ).toBe( true );
    })();
  });
});


