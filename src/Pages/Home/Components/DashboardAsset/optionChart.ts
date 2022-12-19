import Highcharts from "highcharts";
import React from "react";

import { useContext } from "react";
import { AssetsContext } from "../../../../Context/AssetsContext";

export const OptionChart = () => {
  const { asset } = useContext(AssetsContext);

  const options = {
    chart: {
      width: 350,
      height: 200,
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
    },
    title: {
      text: asset?.healthscore
        ? asset.healthscore + "% de vida útil"
        : "% de vida útil",
      with: 200,
      height: 50,
      align: "center",
      verticalAlign: "top",
      style: {
        fontSize: 16,
      },
      y: 10,
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false,
          distance: -50,
          style: {
            fontWeight: "bold",
            color: "white",
          },
        },
        startAngle: -90,
        endAngle: 90,
        center: ["50%", "75%"],
        size: "210%",
        y: "110%",
      },
    },
    tooltip: {
      valueDecimals: 2,
      valueSuffix: " %",
    },

    series: [
      {
        type: "pie",
        name: "",
        innerSize: "30%",
        data: [
          { name: "Vida útil", y: asset?.healthscore },
          {
            name: "Defasagem",
            y: asset?.healthscore ? 100 - asset?.healthscore : "",
            color: "#000000",
          },
        ],
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 100,
          },
        },
      ],
    },
  };

  return options;
};
