import { View, Pressable, Text, TextInput } from 'react-native';
import QuadriTecla from './QuadriTecla';
import TriTecla from './Tritecla';
import { organizacaoTeclado } from '../../styles/subparte/calculadora';

export default function TecladoCalculadora()
{
  return (
      <View >
        <View style={organizacaoTeclado.celulaTresTeclas}>
          <QuadriTecla a='<' b='√' c='%' d='/' />
          <QuadriTecla a='7' b='8' c='9' d='*' />
          <QuadriTecla a='4' b='5' c='6' d='-' />
        </View>
        <View style={organizacaoTeclado.insercaoBotaoSoma}>
          <View style={organizacaoTeclado.celulaTresTeclas}>
            <TriTecla a='1' b='2' c='3'/>
            <TriTecla a='0' b='.' c='='/>
          </View>
          <Pressable style={organizacaoTeclado.botaoRetangular}><Text>+</Text></Pressable>
        </View>
      </View>
  );
}
