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
          placeholder={props.campoa}
          onEndEditing={ novoTexto => props.settera( novoTexto ) }
        ></TextInput>

        <TextInput
          id={props.campob}
          placeholder={props.campob}
          onEndEditing={ novoTexto => props.setterb( novoTexto ) }
        ></TextInput>

      </View>
    </View>
  );
}
