import CardAssets from "../../../../Components/CardAssets";
import { AssetsContainer, CardsContainer, Title } from "./styles";

export default function AssestList() {
  return (
    <AssetsContainer>
      <Title>Ativos</Title>
      <CardsContainer>
        <CardAssets />
        <CardAssets />
        <CardAssets />
        <CardAssets />
        <CardAssets />
        <CardAssets />
        <CardAssets />
        <CardAssets />
        <CardAssets />
        <CardAssets />
        <CardAssets />
      </CardsContainer>
    </AssetsContainer>
  )
}