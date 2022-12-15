import AssestList from "./Components/AssetsList";
import Units from "./Components/Units";
import { DataContainer, HomeContainer } from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <Units />
      <DataContainer>
        <AssestList />
      </DataContainer>
    </HomeContainer>
  )
}