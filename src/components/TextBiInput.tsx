/* LPLA-br 21/03/2024 */
import { View, TextInput, Text } from "react-native";

import estiloTextBiInput from "../styles/componentes/textBiInput";

type LocalProps =
{
  titulo: string,
  campoa: string,
  campob: string,
  settera: Function,
  setterb: Function
};

/**
 * Componente de dois inputs textuais que modificam
 * duas variaveis useState<string>()
 * no elemento superior.
 * */
export default function TextBiInput( props: LocalProps )
{

  return (
    <View>
      <Text> {props.titulo} </Text>
      <View id={props.titulo} style={estiloTextBiInput.inputs}>

        <TextInput
          id={props.campoa}
          style={[estiloTextBiInput.entradasTextoIndividuais]}
          placeholder={props.campoa}
          onChangeText={ novoTexto => props.settera( novoTexto ) }
        ></TextInput>

        <TextInput
          id={props.campob}
          style={[estiloTextBiInput.entradasTextoIndividuais]}
          placeholder={props.campob}
          onChangeText={ novoTexto => props.setterb( novoTexto ) }
        ></TextInput>

      </View>
    </View>
  );
}
