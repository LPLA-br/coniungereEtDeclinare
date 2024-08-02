import { View } from 'react-native';
import { estilos } from '../styles/index';

import BotaoApp from '../components/BotaoApp';

export default function Page()
{
  return (
      <View >
        <View style={[estilos.container, estilos.exibirBorda]}>
          <BotaoApp titulo='Conjugar' tipo="navegacao" rumo="/conjugacao" />
          <BotaoApp titulo='Declinar' tipo="navegacao" rumo="/declinacao" />
          <BotaoApp titulo='Sair' tipo="navegacao" rumo="/" />
        </View>
      </View>
  );
}

