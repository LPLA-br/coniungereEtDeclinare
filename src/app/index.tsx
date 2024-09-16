import { View } from 'react-native';
import { Stack } from 'expo-router';

import BotaoApp from '../components/BotaoApp';
import { estiloTelaInicial } from '../styles/index';


export default function Home()
{
  return (
      <View >
        <Stack.Screen options={{title:"CONIUNGERE ET DECLINARE"}} />
          <View style={[estiloTelaInicial.container ]}>
            <BotaoApp titulo='Conjugar' tipo="navegacao" rumo="/conjugacao" />
            <BotaoApp titulo='Declinar' tipo="navegacao" rumo="/declinacao" />
          </View>
      </View>
  );
}

