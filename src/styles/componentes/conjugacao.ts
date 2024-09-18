import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";

const estiloConjugacao = StyleSheet.create(
  {
    campo:
    {
      display: 'flex',
      flexDirection: 'row',
      width: "100%"
    },
    tituloFlexao:
    {
      textAlign: "center"
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
    },
    segregacaoVertical:
    {
      display: 'flex',
      flexDirection: "column",
      justifyContent: 'space-between',
      height: "100%"
    }
  }
);

export default estiloConjugacao;
