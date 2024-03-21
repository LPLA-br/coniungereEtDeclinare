/* ESTILIZAÇÃO DA TELA INICIAL */
import { StyleSheet } from "react-native";

const estilos = StyleSheet.create(
{
  viewPrincipal:
  {
    maxWidth: '30em',
  },
  container:
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'justifyContent',
    flexWrap: 'nowrap',
  },
  botao:
  {
    backgroundColor: '#a0a0a0',
    borderColor: 'black',
    borderWidth: '1px'
  },
  exibirBorda:
  {
    borderColor: 'green',
    borderWidth: '1px'
  }
});

export { estilos };

