import { View, Pressable, Text, TextInput } from 'react-native';
import { Link } from 'expo-router';

export default function Calculadora()
{
  return (
      <View >
        <View>

        <TextInput id='visor-calculadora'>
        </TextInput>
        <View id='teclado-calculadora'>

        </View>

          <Link href={"/"}>
            <Pressable>
              <Text> Retornar </Text>
            </Pressable>
          </Link>

        </View>
      </View>
  );
}

