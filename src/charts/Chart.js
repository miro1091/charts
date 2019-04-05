import React from "react";
import { Doughnut } from "react-chartjs-2";

const Chart = () => {
  const data = {
    labels: ["Red", "Green", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ]
  };

  return (
    <>
      <h2>Doughnut Example - npm(118,689) - responsive(10/10)</h2>
      <Doughnut data={data} options={{ responsive: true }} />
    </>
  );
};

export default Chart;
