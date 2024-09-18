import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useState, useContext } from "react";

import BotaoApp from "./BotaoApp";
import { CheckBox, ListItem } from "@rneui/themed";

import alterarEstadoCheckbox from "@/src/hooks/alterarEstadoCheckbox";

import { ConfContext } from "../app/conjugacao/[verbo]";

import estiloConjugacao from "../styles/componentes/conjugacao";

export default function ConfiguracaoConjugacao()
{
  const [ preia, setPreia ] = useState<boolean>(false);
  const [ impia, setImpia ] = useState<boolean>(false);
  const [ peria, setPeria ] = useState<boolean>(false);
  const [ mqpia, setMqpia ] = useState<boolean>(false);
  const [ fupia, setFupia ] = useState<boolean>(false);
  const [ futia, setFutia ] = useState<boolean>(false);
                         
  const [ presa, setPresa ] = useState<boolean>(false);
  const [ impsa, setImpsa ] = useState<boolean>(false);
  const [ persa, setPersa ] = useState<boolean>(false);
  const [ mqpsa, setMqpsa ] = useState<boolean>(false);
                         
  const [ preip, setPreip ] = useState<boolean>(false);
  const [ impip, setImpip ] = useState<boolean>(false);
  const [ perip, setPerip ] = useState<boolean>(false);
  const [ mqpip, setMqpip ] = useState<boolean>(false);
  const [ fupip, setFupip ] = useState<boolean>(false);
  const [ futip, setFutip ] = useState<boolean>(false);
                         
  const [ presp, setPresp ] = useState<boolean>(false);
  const [ impsp, setImpsp ] = useState<boolean>(false);
  const [ persp, setPersp ] = useState<boolean>(false);
  const [ mqpsp, setMqpsp ] = useState<boolean>(false);

  const [ infin, setInfin ] = useState<boolean>(false);
  const [ parti, setParti ] = useState<boolean>(false);
  const [ supin, setSupin ] = useState<boolean>(false);
  const [ imper, setImper ] = useState<boolean>(false);
  const [ gerun, setGerun ] = useState<boolean>(false);

  //acordeões
  const [ ia, setIa ] = useState<boolean>(false);
  const [ sa, setSa ] = useState<boolean>(false);
  const [ ip, setIp ] = useState<boolean>(false);
  const [ sp, setSp ] = useState<boolean>(false);

  //contexto de configuração de [verbo]
  const [ conf, setConf ] = useContext( ConfContext );

  return (
  <View style={estiloConjugacao.segregacaoVertical}>
   <Text> AEDIFICA TUA VIA: </Text>
      <ListItem.Accordion
        content={ <Text>MODO INDICATIVO DA VOZ ATIVA</Text> }
        isExpanded={ia}
        onPress={() => { setIa(!ia); }}
      >
        <CheckBox checked={preia} onPress={()=>{alterarEstadoCheckbox(preia,setPreia)}}  title={"presente"}/>
        <CheckBox checked={impia} onPress={()=>{alterarEstadoCheckbox(impia,setImpia)}} title={"imperfeito"}/>
        <CheckBox checked={peria} onPress={()=>{alterarEstadoCheckbox(peria,setPeria)}}  title={"perfeito"}/>
        <CheckBox checked={mqpia} onPress={()=>{alterarEstadoCheckbox(mqpia,setMqpia)}}  title={"mais que perfeito"}/>
        <CheckBox checked={fupia} onPress={()=>{alterarEstadoCheckbox(fupia,setFupia)}}  title={"futuro perfeito"}/>
        <CheckBox checked={futia} onPress={()=>{alterarEstadoCheckbox(futia,setFutia)}}  title={"futuro"}/>
      </ListItem.Accordion>


      <ListItem.Accordion
        content={ <Text>MODO SUBJUNTIVO DA VOZ ATIVA</Text> }
        isExpanded={sa}
        onPress={() => { setSa(!sa); }}
      >
        <CheckBox checked={presa} onPress={()=>{alterarEstadoCheckbox(presa,setPresa)}} title={"presente"}  />
        <CheckBox checked={impsa} onPress={()=>{alterarEstadoCheckbox(impsa,setImpsa)}} title={"imperfeito"}/>
        <CheckBox checked={persa} onPress={()=>{alterarEstadoCheckbox(persa,setPersa)}} title={"perfeito"}  />
        <CheckBox checked={mqpsa} onPress={()=>{alterarEstadoCheckbox(mqpsa,setMqpsa)}} title={"mais que perfeito"}/>
      </ListItem.Accordion>

      <ListItem.Accordion
        content={ <Text> MODO INDICATIVO DA VOZ PASSIVA </Text> }
        isExpanded={ip}
        onPress={() => { setIp(!ip); }}
      >
        <CheckBox checked={preip} onPress={()=>{alterarEstadoCheckbox(preip,setPreip)}} title={"presente"}  />
        <CheckBox checked={impip} onPress={()=>{alterarEstadoCheckbox(impip,setImpip)}} title={"imperfeito"}/>
        <CheckBox checked={perip} onPress={()=>{alterarEstadoCheckbox(perip,setPerip)}} title={"perfeito"}  />
        <CheckBox checked={mqpip} onPress={()=>{alterarEstadoCheckbox(mqpip,setMqpip)}} title={"mais que perfeito"}/>
        <CheckBox checked={fupip} onPress={()=>{alterarEstadoCheckbox(fupip,setFupip)}} title={"futuro perfeito"}  />
        <CheckBox checked={futip} onPress={()=>{alterarEstadoCheckbox(futip,setFutip)}} title={"futuro"} />
      </ListItem.Accordion>

      <ListItem.Accordion
        content={ <Text> MODO SUBJUNTIVO DA VOZ PASSIVA </Text> }
        isExpanded={sp}
        onPress={() => { setSp(!sp); }}
      >
        <CheckBox checked={presp} onPress={()=>{alterarEstadoCheckbox(presp,setPresp)}} title={"presente"}    />
        <CheckBox checked={impsp} onPress={()=>{alterarEstadoCheckbox(impsp,setImpsp)}} title={"imperfeito"}  />
        <CheckBox checked={persp} onPress={()=>{alterarEstadoCheckbox(persp,setPersp)}} title={"perfeito"}    />
        <CheckBox checked={mqpsp} onPress={()=>{alterarEstadoCheckbox(mqpsp,setMqpsp)}} title={"mais que perfeito"}/>
      </ListItem.Accordion>

      <View>
        <Text> OUTROS </Text>
        <CheckBox checked={infin} onPress={()=>{alterarEstadoCheckbox(infin,setInfin)}} title={"infinitivo"} disabled />
        <CheckBox checked={parti} onPress={()=>{alterarEstadoCheckbox(parti,setParti)}} title={"participio"} disabled/>
        <CheckBox checked={supin} onPress={()=>{alterarEstadoCheckbox(supin,setSupin)}} title={"supino"} disabled/>
        <CheckBox checked={imper} onPress={()=>{alterarEstadoCheckbox(imper,setImper)}} title={"imperativo"} disabled/>
        <CheckBox checked={gerun} onPress={()=>{alterarEstadoCheckbox(gerun,setGerun)}} title={"gerundio e gerundivo"} disabled/>
      </View>
      <BotaoApp titulo="INICIAR EXERCICIO" tipo="avaliacao" funcao={()=>{
        setConf({
          preia:preia,
          impia:impia,
          peria:peria,
          mqpia:mqpia,
          fupia:fupia,
          futia:futia,
                     
          presa:presa,
          impsa:impsa,
          persa:persa,
          mqpsa:mqpsa,
                     
          preip:preip,
          impip:impip,
          perip:perip,
          mqpip:mqpip,
          fupip:fupip,
          futip:futip,
                     
          presp:presp,
          impsp:impsp,
          persp:persp,
          mqpsp:mqpsp,
                     
          infin:infin,
          parti:parti,
          supin:supin,
          imper:imper,
          gerun:gerun,
        });
      }} />
  </View>
  );
}

