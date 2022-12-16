import { Attribute, CardAssetsContainer, ContentData, Name } from "./styles";

interface CardAsstesProps {
  name: string;
  model: string;
  sensors: string;
  status: string;
}

export default function CardAssets({ name, model, sensors }: CardAsstesProps) {
  return (
    <CardAssetsContainer>
      <ContentData>
        <Attribute>Name: </Attribute>
        <Name>{name}</Name>
      </ContentData>
      <ContentData>
        <Attribute>Sensor: </Attribute>
        <Name>{sensors}</Name>
      </ContentData>
      <ContentData>
        <Attribute>Modelo: </Attribute>
        <Name>{model}</Name>
      </ContentData>
    </CardAssetsContainer>
  )
}