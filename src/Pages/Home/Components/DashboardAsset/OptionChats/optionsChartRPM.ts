import { useContext } from "react";
import { AssetsContext } from "../../../../../Context/AssetsContext";

export const optionsChartRPM = () => {
  const { asset } = useContext(AssetsContext);

  const options = {
    chart: {
      type: "gauge",
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false,
      width: 450,
      height: 270,
    },

    title: {
      text: "rpm",
    },

    pane: {
      startAngle: -90,
      endAngle: 90,
      background: null,
      center: ["50%", "75%"],
      size: "110%",
    },

    // the value axis
    yAxis: {
      min: 0,
      max: 5000,
      tickPixelInterval: 100,
      tickPosition: "inside",
      tickColor: "#002F47",
      tickLength: 20,
      tickWidth: 2,
      minorTickInterval: null,
      labels: {
        distance: 20,
        style: {
          fontSize: "14px",
        },
      },
      plotBands: [
        {
          from: 0,
          to: 2000,
          color: "#55BF3B", // green
          thickness: 20,
        },
        {
          from: 2001,
          to: 4000,
          color: "#DDDF0D", // yellow
          thickness: 20,
        },
        {
          from: 4001,
          to: 5000,
          color: "#DF5353", // red
          thickness: 20,
        },
      ],
    },

    series: [
      {
        name: "RPM",
        data: [asset?.specifications.rpm],
        tooltip: {
          valueSuffix: " rpm",
        },
        dataLabels: {
          format: asset?.specifications.rpm + " rpm",
          borderWidth: 0,
          color: "#333333",
          style: {
            fontSize: "16px",
          },
        },
        dial: {
          radius: "80%",
          backgroundColor: "#002F47",
          baseWidth: 12,
          baseLength: "0%",
          rearLength: "0%",
        },
        pivot: {
          backgroundColor: "gray",
          radius: 6,
        },
      },
    ],
  };

  return options;
};
