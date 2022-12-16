import { useContext } from 'react';
import ativo from '../../../../Assets/ativo.svg'
import CardAssets from "../../../../Components/CardAssets";
import CardDashboard from "../../../../Components/CardDashboard";
import { AssetsContext } from '../../../../Context/AssetsContext';
import { BottomContent, CardsContainer, ContentInfo, InfoContainer, LeftContent, RightContent, SpecificationsContent, TopContent, Value } from "./styles";

export default function DashBoardAsset() {
  const { assets } = useContext(AssetsContext);

  console.log("assets", assets)


  return (
    <InfoContainer>
      <CardDashboard height="750px" width="230px" title="Ativos" fontSize="1.5rem">
        <CardsContainer>
          {assets.map((asset) => {
            return (
              <CardAssets
                key={asset.id}
                name={asset.name}
                model={asset.model}
                sensors={asset.sensors}
                status={asset.status}
              />

            )
          })}

        </CardsContainer>

      </CardDashboard>

      <LeftContent>
        <CardDashboard width="400px" height="460px" title="Motor H13D-1" fontSize="1.5rem">
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

        <CardDashboard width="400px" height="250px" title="Saúde do Ativo" fontSize="1.5rem">
        </CardDashboard>
      </LeftContent>

      <RightContent>

        <TopContent>
          <CardDashboard width="49%" height="100%" title="RPM" fontSize="1.5rem">
          </CardDashboard>
          <SpecificationsContent>
            <CardDashboard width="49%" height="100%" title="Temperatura Máxima" fontSize="1.5rem">
              <Value>80ºc</Value>
            </CardDashboard>

            <CardDashboard width="49%" height="100%" title="Potência kWh" fontSize="1.5rem">
              <Value>1.5</Value>
            </CardDashboard>
          </SpecificationsContent>

        </TopContent>

        <BottomContent>

          <CardDashboard
            width="49%"
            height="335px"
            title="Total de Coletas"
            fontSize="2rem"
          >
          </CardDashboard>
          <CardDashboard
            width="49%"
            height="335px"
            title="Total de Horas Coletadas"
            fontSize="2rem"
          >
          </CardDashboard>

        </BottomContent>
      </RightContent>

    </InfoContainer>
  )
}