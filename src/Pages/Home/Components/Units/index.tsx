import { useContext } from "react";
import { AssetsContext } from "../../../../Context/AssetsContext";
import { Button, ButtonsContainer, Title, UnitsContainer } from "./styles";


export default function Units() {
  const { units } = useContext(AssetsContext);
  console.log(units)


  return (
    <UnitsContainer>
      <Title>Unidades</Title>
      <ButtonsContainer>
        {units.map((unit) => {
          return (
            <Button key={unit.id} type="submit">
              {unit.name}
            </Button>
          )
        })}
      </ButtonsContainer>
    </UnitsContainer>
  )
}