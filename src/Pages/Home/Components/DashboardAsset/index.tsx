import { useContext } from 'react';
import ativo from '../../../../Assets/ativo.svg'
import CardAssets from "../../../../Components/CardAssets";
import CardDashboard from "../../../../Components/CardDashboard";
import { AssetsContext } from '../../../../Context/AssetsContext';
import { BottomContent, CardsContainer, ContentInfo, InfoContainer, LeftContent, RightContent, SpecificationsContent, TopContent, Value } from "./styles";

export default function DashBoardAsset() {
  const { assets } = useContext(AssetsContext);
  const { asset } = useContext(AssetsContext);



  // console.log(asset?.metrics.lastUptimeAt.substring(0, 10).split("-").reverse().join("-"))

  console.log("teste horas", asset?.metrics.lastUptimeAt.substring(11, 19))

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
        <CardDashboard width="450px" height="450px" title={asset?.name} fontSize="1.5rem">
          <img src={asset?.image} width="350px" height="250px" />
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
            <p>Data da última coleta: <span>{asset?.metrics.lastUptimeAt ?
              asset?.metrics.lastUptimeAt.substring(0, 10).split("-").reverse().join("-") + " - " + asset?.metrics.lastUptimeAt.substring(11, 19) :
              ""}
            </span>
            </p>
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
              <Value>{asset?.specifications.maxTemp ? asset?.specifications.maxTemp + "ºc" : ""}</Value>
            </CardDashboard>

            <CardDashboard
              width="49%"
              height="100%"
              title="Potência kWh"
              fontSize="1.5rem"
            >
              <Value>{asset?.specifications.power ? asset?.specifications.power : ""}</Value>
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