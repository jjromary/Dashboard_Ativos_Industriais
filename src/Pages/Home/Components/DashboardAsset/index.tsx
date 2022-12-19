import { useContext } from 'react';
import CardAssets from "../../../../Components/CardAssets";
import CardDashboard from "../../../../Components/CardDashboard";
import { AssetsContext } from '../../../../Context/AssetsContext';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";
import { BottomContent, CardsContainer, ChartContent, ContentInfo, InfoContainer, LeftContent, RightContent, SpecificationsContent, TopContent, Value } from "./styles";
import { OptionChartHelphscore } from './optionsChartHelphscore';
import { optionsChartRPM } from './optionsChartRPM';
import { optionsChartTotalCollection } from './optionsChartTotalCollection';
import { optionChartHoursCollection } from './optionChartHoursCollection';

highchartsMore(Highcharts);
solidGauge(Highcharts);

export default function DashBoardAsset() {
  const { asset } = useContext(AssetsContext);
  const { assets } = useContext(AssetsContext);

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
          <ChartContent>
            <HighchartsReact
              highcharts={Highcharts}
              options={OptionChartHelphscore()}
            />
          </ChartContent>
        </CardDashboard>
      </LeftContent>

      <RightContent>

        <TopContent>
          <CardDashboard
            width="49%"
            height="100%"
            title=" Tacômetro"
            fontSize="1.5rem"
          >
            <ChartContent>
              <HighchartsReact
                highcharts={Highcharts}
                options={optionsChartRPM()}
              />
            </ChartContent>
          </CardDashboard>
          <SpecificationsContent>
            <CardDashboard
              width="49%"
              height="100%"
              title="Temperatura Máxima"
              fontSize="1.5rem"
            >
              <Value>{asset?.specifications.maxTemp ? asset?.specifications.maxTemp + "ºc" : "-"}</Value>
            </CardDashboard>

            <CardDashboard
              width="49%"
              height="100%"
              title="Potência kWh"
              fontSize="1.5rem"
            >
              <Value>{asset?.specifications.power ? asset?.specifications.power : "-"}</Value>
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
            <ChartContent>
              <HighchartsReact
                highcharts={Highcharts}
                options={optionsChartTotalCollection()}
              />
            </ChartContent>
          </CardDashboard>
          <CardDashboard
            width="49%"
            height="335px"
            title="Total de Horas Coletadas"
            fontSize="2rem"
          >
            <ChartContent>
              <HighchartsReact
                highcharts={Highcharts}
                options={optionChartHoursCollection()}
              />
            </ChartContent>
          </CardDashboard>

        </BottomContent>
      </RightContent>

    </InfoContainer>
  )
}