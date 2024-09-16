import { View, Text, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { Link, Stack } from 'expo-router';

import BotaoApp from '@/src/components/BotaoApp';

import obterIndexPalavras from '@/src/hooks/obterIndexPalavras';
import renderizarVerbosPorDeVozAtiva from '@/src/components/dinamicos/renderizarVerbosDeVozAtiva';

import estiloListaVerbos from '@/src/styles/componentes/conjugacaoVerbosLista';
import estiloBotoes from '@/src/styles/componentes/botoes';

/** Tela de conjugação com elementos internos
 *  dinâmicos.
 * */
export default function Conjugacao()
{
  const [ dados, setDados ] = useState<any[]>();
  const [ verboAlvo, setVerboAlvo ] = useState<string>();

  useEffect(
  () =>
  {
    (async () =>
    {
      const resposta = await obterIndexPalavras( "http://127.0.0.1:8080/verbos/infinitivos" );
      setDados( resposta );
      setVerboAlvo( "escolha verbo para conjugar abaixo" );
    })();
  },
  []);

  return (
    <View>
      <View>
        <Stack.Screen options={{title:"CONIUNGERE"}} />
        <Text  style={estiloListaVerbos.substantivoDefinido}> {verboAlvo?.toUpperCase()} </Text>

        <Text> REGULARES </Text>
        <View id='listaVerbos' style={estiloListaVerbos.renderizacaoDinamica}>
          {renderizarVerbosPorDeVozAtiva(dados,setVerboAlvo)}
        </View>

        <Text> ANÔMALOS </Text>

        <Text> DEPONENTES </Text>

        <Text> DEFECTIVOS </Text>

        <View styles={estiloBotoes.botaoAcao}>
          <BotaoApp titulo='Conjugar' tipo="navegacao" rumo={ "/conjugacao/" + verboAlvo } />
        </View>
      </View>
    </View>
  );
}

