import React, { useEffect, useState } from "react";
const ReactHighcharts = require("highcharts");

const HighCharts = () => {
  const [series] = useState([
    {
      name: "Gases",
      data: [
        {
          name: "Argon",
          y: 0.9,
          color: "#3498db"
        },
        {
          name: "Nitrogen",
          y: 78.1,
          color: "#9b59b6"
        },
        {
          name: "Oxygen",
          y: 20.9,
          color: "#2ecc71"
        },
        {
          name: "Trace Gases",
          y: 0.1,
          color: "#f1c40f"
        }
      ]
    }
  ]);

  const highChartsRender = () => {
    ReactHighcharts.chart({
      chart: {
        type: "pie",
        renderTo: "highChart"
      },
      title: {
        verticalAlign: "middle",
        floating: true,
        text: "Earth's Atmospheric Composition",
        style: {
          fontSize: "10px"
        }
      },
      plotOptions: {
        pie: {
          dataLabels: {
            format: "{point.name}: {point.percentage:.1f} %"
          },
          innerSize: "70%",
          showInLegend: true
        }
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            }
          }
        ]
      },
      series: series
    });
  };

  useEffect(() => {
    highChartsRender();
  }, []);

  return (
    <>
      <h2>HighCharts - npm(43,164) - responsive(8/10)</h2>
      <div id="highChart" />
    </>
  );
};

export default HighCharts;
