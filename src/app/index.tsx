import { View } from 'react-native';
import { estiloTelaInicial } from '../styles/index';

import BotaoApp from '../components/BotaoApp';

export default function App()
{
  return (
      <View >
        <View style={[estiloTelaInicial.container, estiloTelaInicial.exibirBorda]}>
          <BotaoApp titulo='Conjugar' tipo="navegacao" rumo="/conjugacao" />
          <BotaoApp titulo='Declinar' tipo="navegacao" rumo="/declinacao" />
          <BotaoApp titulo='Sair' tipo="navegacao" rumo="/" />
        </View>
      </View>
  );
}

