import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";

const estiloConjugacao = StyleSheet.create(
  {
    campo:
    {
      display: 'flex',
      flexDirection: 'row',
    },
    numero:
    {
      display: 'flex',
      flexDirection: 'column',
    },
    entrada:
    {
      backgroundColor: Colors.Cinza,
      padding: 5,
      margin: 5
    }
  }
);

export default estiloConjugacao;
