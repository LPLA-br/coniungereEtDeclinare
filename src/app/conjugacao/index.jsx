import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

/** Tela de conjugação com elementos internos
 *  dinâmicos.
 * */
export default function Conjugacao()
{
  return (
    <View>
      <View>
        <Text> conteúdo dinâmico das Conjugações </Text>
        <Pressable>
          <Link href={"/"}> voltar </Link>
        </Pressable>
      </View>
    </View>
  );
}

