import React from 'react';
import ReactApexChart  from 'react-apexcharts';
import { Card } from '../Styles';

const config = {
  series: [{
    name: 'TEAM A',
    type: 'column',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  }, {
    name: 'TEAM B',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  }, {
    name: 'TEAM C',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }],
  options: {
    chart: {
      toolbar: false,
    },   
    stroke: {
      width: [2,2,4],
      curve: 'smooth'
    },
    fill: {
      opacity: [0.7, 0.3, 1],
      // gradient: {
      //   inverseColors: true,
      //   shade: 'light',
      //   type: "vertical",
      //   opacityFrom: 0.85,
      //   opacityTo: 0.55,
      //   stops: [0, 100, 100, 100]
      // }
    },
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July',
      'Aug', 'Sept', 'Oct', 'Nov'
    ],
    yaxis: {
      title: {
        text: 'Points',
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
    
        }
      }
    }
  },
};

const LineAreaColumnChart = () => {
  return (
    <Card>
      <ReactApexChart options={config.options} series={config.series} />        
    </Card>
  );
}

export default LineAreaColumnChart;
