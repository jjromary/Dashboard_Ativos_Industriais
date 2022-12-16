import DashBoardAsset from "./Components/DashboardAsset";
import Units from "./Components/Units";
import { HomeContainer } from "./styles";

export default function Home() {

  return (
    <HomeContainer>
      <Units />
      <DashBoardAsset />
    </HomeContainer>
  )
}