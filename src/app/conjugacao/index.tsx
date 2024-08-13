import { View, Text, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { Link, Stack } from 'expo-router';

import axios from 'axios';

import BotaoApp from '@/src/components/BotaoApp';

/** Tela de conjugação com elementos internos
 *  dinâmicos.
 * */
export default function Conjugacao()
{
  const [ dados, setDados ] = useState<any[]>();
  const [ verboAlvo, setVerboAlvo ] = useState<string>();

  const obterDados = async () =>
  {
    try
    {
      const response = await axios.get( "http://127.0.0.1:8080/verbos/infinitivos" );
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
      setDados( [{praesens:"Sem resposta"}] );
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
      <View>
        <Stack.Screen options={{title:"CONIUNGERE"}} />
        <Text> {verboAlvo?.toUpperCase()} </Text>

        <Text> REGULARES </Text>
        <View id='listaVerbos'>
        {
          (typeof dados == "undefined") ?
          (<Text> OPS! problema ao conectar-se com servidor ! </Text>) :
          (dados.map( (item)=>{
            if ( item.voz == "a" )
              return ( <BotaoApp titulo={item.praesens} tipo='alteracao' funcao={setVerboAlvo} /> )
          }))
        }
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

