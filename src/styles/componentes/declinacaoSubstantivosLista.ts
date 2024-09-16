/* ESTILIZAÇÃO DA TELA COM LISTA DE SUBSTANTIVOS */
import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";

const estiloListaSubstantivos = StyleSheet.create(
  {
    substantivoDefinido:
    {
      textAlign: "center",
      borderStyle: "solid",
      borderColor: Colors.Cinza,
      marginBottom: 10,
      marginTop: 10,
    }
  }
);

export default estiloListaSubstantivos;
