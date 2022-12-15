import CardAssets from "../../Components/CardAssets";
import CardDashboard from "../../Components/CardDashboard";
import Units from "./Components/Units";
import ativo from '../../Assets/ativo.svg'
import pizza from '../../Assets/pizza.svg'
import rpm from '../../Assets/rpm.svg'
import totalColetas from '../../Assets/totalColetas.svg'
import horasColetadas from '../../Assets/horasColetadas.svg'
import { BottomContent, CardsContainer, ContentInfo, HomeContainer, InfoContainer, LeftContent, MidleContent, RightContent, TopContent, Value } from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <Units />
      <InfoContainer>
        <CardDashboard height="750px" width="230px" title="Ativos" fontSize="2rem">
          <CardsContainer>
            <CardAssets />
            <CardAssets />
            <CardAssets />
            <CardAssets />
            <CardAssets />
            <CardAssets />
          </CardsContainer>

        </CardDashboard>

        <LeftContent>
          <CardDashboard width="400px" height="460px" title="Motor H13D-1" fontSize="2rem">
            <img src={ativo} />
            <ContentInfo>
              <p>Senso: <span>GSJ1535</span></p>
            </ContentInfo>
            <ContentInfo>
              <p>Status: <span>Em operação</span></p>
            </ContentInfo>
            <ContentInfo>
              <p>Model: <span>Motor</span></p>
            </ContentInfo>
            <ContentInfo>
              <p>Data da última coleta: <span>19/12/1992</span></p>
            </ContentInfo>
          </CardDashboard>

          <CardDashboard width="400px" height="250px" title="Saúde do Ativo" fontSize="2rem">
            <img src={pizza} width='300px' height='200px' />
          </CardDashboard>

        </LeftContent>

        <MidleContent>
          {/* <CardDashboard width="345px" height="268px" title="RPM" fontSize="2rem">
            <img src={rpm} />
          </CardDashboard>
          <CardDashboard width="345px" height="400px" title="Total de Coletas" fontSize="2rem">
            <img src={totalColetas} width="200px" height="400px" />

          </CardDashboard> */}
        </MidleContent>

        <RightContent>

          {/* <TopContent>
            <CardDashboard width="150px" height="268px" title="Temperatura Máxima" fontSize="1rem">
              <Value>80ºc</Value>
            </CardDashboard>

            <CardDashboard width="150px" height="268px" title="Potência kWh" fontSize="1rem">
              <Value>1.5</Value>
            </CardDashboard>
          </TopContent>

          <BottomContent>
            <CardDashboard width="345px" height="421px" title="Total de Horas Coletadas" fontSize="2rem">
              <img src={horasColetadas} width="200px" height="400px" />
            </CardDashboard>
          </BottomContent> */}

        </RightContent>

      </InfoContainer>
    </HomeContainer>
  )
}