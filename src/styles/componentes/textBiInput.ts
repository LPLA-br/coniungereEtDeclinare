import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";;

const estiloTextBiInput = StyleSheet.create(
  {
    inputs:
    {
      display: 'flex',
      flexDirection: 'row',
    },
    entradasTextoIndividuais:
    {
      backgroundColor: Colors.Cinza,
      borderStyle: "solid",
      borderColor: "#000000",
      marginLeft: 5,
      marginRight: 5,
      padding: 5,
      width: "50%"
    }
  }
);

export default estiloTextBiInput;
