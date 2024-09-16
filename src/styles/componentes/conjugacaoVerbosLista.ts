/* ESTILIZAÇÃO DA TELA COM LISTA DE SUBSTANTIVOS */
import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";

const estiloListaVerbos = StyleSheet.create(
  {
    tituloVerboSelecionado:
    {
      textAlign: "center",
      borderStyle: "solid",
      borderColor: Colors.Cinza,
      marginBottom: 10,
      marginTop: 10,
    },
    substantivoDefinido:
    {
      textAlign: "center",
      borderStyle: "solid",
      borderColor: Colors.Cinza,
      marginBottom: 10,
      marginTop: 10,
    },
    renderizacaoDinamica:
    {
      display: "flex",
      flexDirection:"column",
      justifyContent: "space-evenly"
    }
  }
);

export default estiloListaVerbos;
