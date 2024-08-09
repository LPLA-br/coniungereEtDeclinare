import './global.css';
import "@/src/app/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack, Slot } from 'expo-router';

//componente cabecalho descatado
import Rodape from '../components/Rodape';

import Colors from '../constants/Colors';

export default function HomeLayout()
{
   return (
     <>
       <Stack screenOptions={{ headerStyle: { backgroundColor: Colors.Verde } }} >
        <Slot />
       </Stack>
       <Rodape />
     </>
   );
}
