import { View } from 'react-native';
import { estiloTelaInicial } from '../styles/index';
import { Stack } from 'expo-router';

import BotaoApp from '../components/BotaoApp';

export default function Home()
{
  return (
      <View >
        <Stack.Screen options={{title:"CONIUNGERE ET DECLINARE"}} />
          <View style={[estiloTelaInicial.container, estiloTelaInicial.exibirBorda]}>
            <BotaoApp titulo='Conjugar' tipo="navegacao" rumo="/conjugacao" />
            <BotaoApp titulo='Declinar' tipo="navegacao" rumo="/declinacao" />
            <BotaoApp titulo='Sair' tipo="navegacao" rumo="/" />
          </View>
      </View>
  );
}

