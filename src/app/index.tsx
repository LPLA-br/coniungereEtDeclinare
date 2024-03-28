import { View, Pressable, Text } from 'react-native';
import { Link } from 'expo-router';
import { estilos } from '../styles/index';

export default function Page()
{
  return (
      <View >
        <View style={[estilos.container, estilos.exibirBorda]}>

          <Link href={"/conjugacao"} style={estilos.botao}>
            <Pressable>
              <Text> Conjugar </Text>
            </Pressable>
          </Link>

          <Link href={"/declinacao"} style={estilos.botao}>
            <Pressable>
              <Text> Declinar </Text>
            </Pressable>
          </Link>

          <Pressable style={estilos.botao}>
            <Text> Sair </Text>
          </Pressable>
        </View>
      </View>
  );
}

