import { Pressable, ScrollView, View, Text, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { Link, Stack } from 'expo-router';
import { ReactNode } from 'react';

import BotaoApp from '@/src/components/BotaoApp';

import obterIndexPalavras from '@/src/hooks/obterIndexPalavras';
import renderizarSubstantivoPorSuaDeclinacao from '@/src/components/dinamicos/renderizarSubstantivosPorDeclinacao';

/** Tela de declinação.
 *  Contém lista de substantivos disponíveis
 *  para declinação fornecidos por consulta
 *  sqlite.
 * */
export default function Declinacao()
{
  const [ dados, setDados ] = useState<any[] | undefined>();
  const [ substantivoAlvo, setSubstantivoAlvo ] = useState<string>();

  useEffect(
  () =>
  {
    (async ()=>
    {
      const resposta = await obterIndexPalavras("http://127.0.0.1:8080/nome/substantivos" );
      setDados(resposta);
    })();
  },
  []);

  return (
    <View>
      <Stack.Screen options={{title:"DECLINARE"}} />
      <ScrollView>
        <Text> { substantivoAlvo?.toUpperCase() } </Text>
        <View>
          <Text> DECLINAÇÃO I </Text>
          {renderizarSubstantivoPorSuaDeclinacao(1,dados,setSubstantivoAlvo)}
          <Text> DECLINAÇÃO V </Text>
          {renderizarSubstantivoPorSuaDeclinacao(5,dados,setSubstantivoAlvo)}
          <Text> DECLINAÇÃO II </Text>
          {renderizarSubstantivoPorSuaDeclinacao(2,dados,setSubstantivoAlvo)}
          <Text> DECLINAÇÃO IV </Text>
          {renderizarSubstantivoPorSuaDeclinacao(4,dados,setSubstantivoAlvo)}
          <Text> DECLINAÇÃO III </Text>k
          {renderizarSubstantivoPorSuaDeclinacao(3,dados,setSubstantivoAlvo)}
        </View>

        <View>
          <BotaoApp titulo='Declinar' tipo="navegacao" rumo={ "declinacao/" + substantivoAlvo } />
        </View>

      </ScrollView>
    </View>
  );
}


