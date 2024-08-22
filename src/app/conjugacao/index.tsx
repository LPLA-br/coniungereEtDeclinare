import { View, Text, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { Link, Stack } from 'expo-router';

import BotaoApp from '@/src/components/BotaoApp';

import obterIndexPalavras from '@/src/hooks/obterIndexPalavras';
import renderizarVerbosPorDeVozAtiva from '@/src/components/dinamicos/renderizarVerbosDeVozAtiva';

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
    })();
  },
  []);

  return (
    <View>
      <View>
        <Stack.Screen options={{title:"CONIUNGERE"}} />
        <Text> {verboAlvo?.toUpperCase()} </Text>

        <Text> REGULARES </Text>
        <View id='listaVerbos'>
        {renderizarVerbosPorDeVozAtiva(dados,setVerboAlvo)}
        </View>

        <Text> ANÔMALOS </Text>

        <Text> DEPONENTES </Text>

        <Text> DEFECTIVOS </Text>

        <View className=''>
          <BotaoApp titulo='Conjugar' tipo="navegacao" rumo={ "/conjugacao/" + verboAlvo } />
        </View>
      </View>
    </View>
  );
}

