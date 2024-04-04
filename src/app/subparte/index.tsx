import { View, Pressable, Text } from 'react-native';
import { Link } from 'expo-router';
import TecladoCalculadora from '@/src/components/subparte/Teclado';
import { telaImpressao } from '../../styles/subparte/calculadora';

export default function Calculadora()
{
  return (
      <View >
        <View >
          <Text style={telaImpressao.tela} id='display'> display </Text>
        </View>

        <TecladoCalculadora/>
        
        <Link href={"/"}>
          <Pressable>
            <Text> Retornar </Text>
          </Pressable>
        </Link>
      </View>
  );
}

