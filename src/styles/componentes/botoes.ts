import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";

/* estilo dos botões da aplicação */
const estiloBotoes = StyleSheet.create(
{
  botao:
  {
    backgroundColor: Colors.Cinza,
    borderWidth: 1,
    padding: 10,
    marginTop: 1,
  },
  botaoAcao:
  {
    backgroundColor: Colors.Cinza,
    marginBottom: 10,
    marginTop: 10,
  }
});

export default estiloBotoes ;
