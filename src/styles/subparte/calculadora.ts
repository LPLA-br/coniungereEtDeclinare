import { StyleSheet } from 'react-native';

const setoresDeBotoes = StyleSheet.create(
{
  celulaHorizontal:
  {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 0,
  },
  botoesQuadrados:
  {
    borderColor: '#000000',
    backgroundColor: '#5f5f5f',
    borderWidth: 1,
    padding: 1,
    width: 32,
    height: 32
  }
});

const organizacaoTeclado = StyleSheet.create(
{
  celulaTresTeclas:
  {
    maxWidth: 128,
    padding: 0
  },
  insercaoBotaoSoma:
  {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
  },
  botaoRetangular:
  {
    borderColor: '#000000',
    backgroundColor: '#5f5f5f',
    borderWidth: 1,
    padding: 1,
    width: 32,
    height: 64,
  }
});

const telaImpressao = StyleSheet.create(
{
  tela:
  {
    backgroundColor: "#000000",
    color: "#ffffff",
    textAlign: "right",
    width: 128
  }
}
);


export { setoresDeBotoes, organizacaoTeclado, telaImpressao }; 

