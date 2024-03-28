import './global.css';
import { Slot } from 'expo-router';
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import { SafeAreaView } from 'react-native';

export default function HomeLayout()
{
  return (
    <>
      <SafeAreaView>
        <Cabecalho className="cabecalho" texto={"CONIUNGERE ET DECLINARE"} />
        <Slot />
        <Rodape className="rodape" />
      </SafeAreaView>
    </>
  );
}
