import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

/* estilo de: src/app/_layout.txt subcomponente "rodape" */
const estiloRodape = StyleSheet.create(
  {
    rodape:
    {
      textAlign: "center",
      backgroundColor: Colors.Verde,
      padding: 10,
    },
    rodapeText:
    {
      textAlign: "center"
    }
  });

export default estiloRodape;
