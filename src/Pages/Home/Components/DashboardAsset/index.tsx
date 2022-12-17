import { useContext, useState } from 'react';
import ativo from '../../../../Assets/ativo.svg'
import CardAssets from "../../../../Components/CardAssets";
import CardDashboard from "../../../../Components/CardDashboard";
import { AssetsContext } from '../../../../Context/AssetsContext';
import { dateFormatter } from '../../../../Utils/Formatter';
import { BottomContent, CardsContainer, ContentInfo, InfoContainer, LeftContent, RightContent, SpecificationsContent, TopContent, Value } from "./styles";

export default function DashBoardAsset() {
  const { assets } = useContext(AssetsContext);
  const { asset } = useContext(AssetsContext);

  console.log("Asset date type", typeof asset?.metrics.lastUptimeAt)

  const event = asset?.metrics.lastUptimeAt

  event?.substring(1, 9)
  console.log(event)


  return (
    <InfoContainer>
      <CardDashboard height="750px" width="250px" title="Ativos" fontSize="1.5rem">
        <CardsContainer>
          {assets.map((asset) => {
            return (
              <CardAssets
                key={asset.id}
                name={asset.name}
                model={asset.model}
                sensors={asset.sensors}
                status={asset.status}
                id={asset.id}
              />
            )
          })}

        </CardsContainer>

      </CardDashboard>

      <LeftContent>
        <CardDashboard width="400px" height="460px" title="Motor H13D-1" fontSize="1.5rem">
          <img src={asset?.image} width="300px" height="250px" />
          <ContentInfo>
            <p>Senso: <span>{asset?.sensors}</span></p>
          </ContentInfo>
          <ContentInfo>
            <p>Status: <span>{asset?.status}</span></p>
          </ContentInfo>
          <ContentInfo>
            <p>Model: <span>{asset?.model}</span></p>
          </ContentInfo>
          <ContentInfo>
            <p>Data da última coleta: <span>{asset?.metrics.lastUptimeAt}</span></p>
          </ContentInfo>
        </CardDashboard>

        <CardDashboard
          width="400px"
          height="250px"
          title="Saúde do Ativo"
          fontSize="1.5rem"
        >
        </CardDashboard>
      </LeftContent>

      <RightContent>

        <TopContent>
          <CardDashboard
            width="49%"
            height="100%"
            title="RPM"
            fontSize="1.5rem"
          >
          </CardDashboard>
          <SpecificationsContent>
            <CardDashboard
              width="49%"
              height="100%"
              title="Temperatura Máxima"
              fontSize="1.5rem"
            >
              <Value>{asset?.specifications.maxTemp + "ºc"}</Value>
            </CardDashboard>

            <CardDashboard
              width="49%"
              height="100%"
              title="Potência kWh"
              fontSize="1.5rem"
            >
              <Value>{asset?.specifications.power ? asset?.specifications.power : "Valor não coletado"}</Value>
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