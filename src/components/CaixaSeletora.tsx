
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel
} from "@/components/ui/checkbox";

type LocalProps =
{
  titulo: string
};

/** Reduz linhas de construcao na tela "Aedifica tua via"
*   Problemas com icon
* */
export default function CaixaSeletora( props: LocalProps )
{
  return (
    <Checkbox value={props.titulo} size="md" isInvalid={false} isDisabled={false}>
      <CheckboxIndicator>
      </CheckboxIndicator>
      <CheckboxLabel> { props.titulo } </CheckboxLabel>
    </Checkbox>
  );
}

