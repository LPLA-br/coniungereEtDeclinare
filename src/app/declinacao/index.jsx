/** Tela de partida para atividade de declinação
 *  1-escolher substantivo 2-declinar 3-aferir resultados
 *  LPLA-br 21/03/2024
 *
 * */

import { Pressable, View, Text } from 'react-native';
import { Link } from 'expo-router';
import Declinar from '../../components/declinacao/Declinar';

/** Tela de declinação 
 * */
export default function Declinacao()
{
  return (
    <View>
      <Text> Nada Até o momento </Text>
      <Pressable>
        <Link href={"/"}> voltar </Link>
      </Pressable>
      <Declinar/>
    </View>
  );
}
