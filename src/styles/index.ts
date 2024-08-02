/* ESTILIZAÇÃO DA TELA INICIAL */
import { StyleSheet } from "react-native";

/* estilo de src/app/index.tsx */
const estiloTelaInicial = StyleSheet.create(
{
  viewPrincipal:
  {
    maxWidth: 30,
  },
  container:
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    flexWrap: 'nowrap',
  },
  botao:
  {
    backgroundColor: '#a0a0a0',
    borderColor: 'black',
    borderWidth: 1
  },
  exibirBorda:
  {
    borderColor: 'green',
    borderWidth: 1
  }
});

export { estiloTelaInicial };

