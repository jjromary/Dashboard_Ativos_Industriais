import { Attribute, CardAssetsContainer, ContentData, Name } from "./styles";

export default function CardAssets() {
  return (
    <CardAssetsContainer>
      <ContentData>
        <Attribute>Name: </Attribute>
        <Name>Motor H13D-1</Name>
      </ContentData>
      <ContentData>
        <Attribute>Sensor: </Attribute>
        <Name>GSJ1535</Name>
      </ContentData>
      <ContentData>
        <Attribute>Modelo: </Attribute>
        <Name>Motor</Name>
      </ContentData>
    </CardAssetsContainer>
  )
}