import Button from "../../../../Components/Button";
import AssestList from "../AssetsList";
import { ButtonsContainer, Title, UnitsContainer } from "./styles";

export default function Units() {
  return (
    <UnitsContainer>
      <Title>Unidades</Title>
      <ButtonsContainer>
        <Button title="Unidade Jaguar" />
        <Button title="Unidade Tobias" />
      </ButtonsContainer>
    </UnitsContainer>
  )
}