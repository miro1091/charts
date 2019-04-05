import React, { useState } from "react";
import Chart from "react-apexcharts";

const ApexCharts = () => {
  const [options] = useState({
    responsive: [
      {
        breakpoint: 560,
        options: {
          chart: {
            width: 350
          },
          legend: {
            position: "bottom"
          }
        }
      },
      {
        breakpoint: 440,
        options: {
          chart: {
            width: 250
          }
        }
      },
      {
        breakpoint: 330,
        options: {
          chart: {
            width: 200
          }
        }
      }
    ]
  });

  const [series] = useState([44, 55, 41, 17, 15]);

  return (
    <>
      <h2>ApexCharts - npm(2,039) - responsice(9/10)</h2>
      <Chart options={options} series={series} type="donut" width="500" />
    </>
  );
};

export default ApexCharts;
