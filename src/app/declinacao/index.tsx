/** Tela de partida para atividade de declinação
 *  LPLA-br 21/03/2024
 * */

import { Pressable, ScrollView, View, Text, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { Link, Stack } from 'expo-router';
import { ReactNode } from 'react';

import axios from 'axios';

import BotaoApp from '@/src/components/BotaoApp';

/** Tela de declinação.
 *  Contém lista de substantivos disponíveis
 *  para declinação fornecidos por consulta
 *  sqlite.
 * */
export default function Declinacao()
{
  const [ dados, setDados ] = useState<any[]>();
  const [ substantivoAlvo, setSubstantivoAlvo ] = useState<string>();

  const obterDados = async () =>
  {
    try
    {
      const listaSubstantivos = await axios.get( "http://127.0.0.1:8080/nome/substantivos" );


      if( typeof listaSubstantivos.data == "string" )
      {
        let resposta;
        try
        {
          resposta = JSON.parse( listaSubstantivos.data );
          setDados( resposta );
        }
        catch( err )
        {
          console.log( "ERRO: ", err );
        }
      }
      else if ( typeof listaSubstantivos.data == "object" )
      {
        if ( typeof listaSubstantivos.data.res != "undefined" )
        {
          setDados( listaSubstantivos.data.res );
        }
      }
    }
    catch (error)
    {
      console.error('NÃO FOI POSSÍVEL OBTER DADOS:', error);
      setDados( [{nomS:"Sem resposta"}] );
    }
  };


  useEffect(
  () =>
  {
    obterDados();
  },
  []);

  function renderizarSubstantivoPorSuaDeclinacao( declinacao: number ): ReactNode
  {
    console.log(dados);
    return (
      (typeof dados == "undefined") ?
      (<Text> OPS! problema ao conectar-se com servidor ! </Text>) :
      (dados.map( (item)=>
      {
        if ( item.nomS.length > 0 && item.declinacao == declinacao )
          return( <BotaoApp titulo={item.nomS} tipo='alteracao' funcao={setSubstantivoAlvo} /> )
      }))
    )
  }

  return (
    <View>
      <Stack.Screen options={{title:"DECLINARE"}} />
      <ScrollView>
        <Text> { substantivoAlvo?.toUpperCase() } </Text>
        <View>
          <Text> DECLINAÇÃO I </Text>
          {renderizarSubstantivoPorSuaDeclinacao(1)}
          <Text> DECLINAÇÃO V </Text>
          {renderizarSubstantivoPorSuaDeclinacao(5)}
          <Text> DECLINAÇÃO II </Text>
          {renderizarSubstantivoPorSuaDeclinacao(2)}
          <Text> DECLINAÇÃO IV </Text>
          {renderizarSubstantivoPorSuaDeclinacao(4)}
          <Text> DECLINAÇÃO III </Text>
          {renderizarSubstantivoPorSuaDeclinacao(3)}
        </View>

        <View className=''>
          <BotaoApp titulo='Declinar' tipo="navegacao" rumo={ "declinacao/" + substantivoAlvo } />
        </View>

      </ScrollView>
    </View>
  );
}


