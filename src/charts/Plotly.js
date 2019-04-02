import React, { useState } from "react";
import Plot from "react-plotly.js";

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

  return (
    <>
      <h2>Plotly - npm(1,905) - responsive(6/10)</h2>
      <Plot
        data={data}
        layout={layout}
        style={{ width: "100%", height: "100%" }}
        useResizeHandler={true}
      />
    </>
  );
};

export default PlotlyChart;
