/** Tela de partida para atividade de declinação
 *  LPLA-br 21/03/2024
 * */

import { Pressable, ScrollView, View, Text, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { Link, Stack } from 'expo-router';

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
      const response = await axios.get( "http://127.0.0.1:8080/nome/substantivos" );
      if( typeof response.data == "string" )
      {
        console.log( response.data );
        let resposta;
        try
        {
          resposta = JSON.parse( response.data );
          setDados( resposta );
        }
        catch( err )
        {
          console.log( "ERRO: ", err );
        }
      }
      else if ( typeof response.data == "object" )
      {
        console.log( response.data );
        if ( typeof response.data.res != "undefined" )
        {
          setDados( response.data.res );
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

  return (
    <View>
      <Stack.Screen options={{title:"DECLINARE"}} />
      <View>
        {
          (typeof dados == "undefined") ?
          (<Text>Undefined</Text>) :
          (dados.map( (item)=>( <BotaoApp titulo={item.nomS} tipo='interacao' /> )) )
        }
      </View>
      <BotaoApp titulo='Declinar' tipo="navegacao" rumo={ "declinacao/" + substantivoAlvo } />
    </View>
  );
}


