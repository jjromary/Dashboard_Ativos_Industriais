import { useContext } from "react";
import { AssetsContext } from "../../../../../Context/AssetsContext";

export const optionChartHoursCollection = () => {
  const { asset } = useContext(AssetsContext);

  const option = {
    chart: {
      type: "column",
      width: 450,
      height: 270,
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "Total de horas coletadas com ativo ligado",
    },
    xAxis: {
      categories: [asset?.sensors],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Total de horas coletadas",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.0f} horas coletas</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: asset?.name,
        data: [asset?.metrics.totalUptime],
      },
    ],
  };
  return option;
};
