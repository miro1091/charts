import React, { useState, useEffect } from "react";
import Plotly from 'plotly.js';

const PlotlyChart = () => {
  const [data] = useState([
    {
      values: [16, 15, 12, 6, 5, 4, 42],
      labels: [
        "US",
        "China",
        "European Union",
        "Russian Federation",
        "Brazil",
        "India",
        "Rest of World"
      ],
      domain: { column: 0 },
      name: "GHG Emissions",
      hoverinfo: "label+percent+name",
      hole: 0.4,
      type: "pie"
    }
  ]);

  const [layout] = useState({
    title: "Global Emissions 1990-2011",
    showlegend: true,
    annotations: [
      {
        font: {
          size: 14
        },
        showarrow: false,
        text: "GHG",
        x: 0.17,
        y: 0.5
      }
    ]
  });

  useEffect(() => {
    Plotly.newPlot('myDiv', data, layout);
  }, [])

  return (
    <>
      <h2>Plotly - npm(1,905) - responsive(6/10)</h2>
      <div id={"myDiv"} />
    </>
  );
};

export default PlotlyChart;
