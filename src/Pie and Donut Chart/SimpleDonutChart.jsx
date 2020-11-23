import React from 'react';
import ReactApexChart  from 'react-apexcharts';
import { Card } from '../Styles';

const config = {
  series: [44, 55, 41, 17, 15],
  options: {
    chart: {
      type: 'donut',
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  },          
};


const SimpleDonutChart = () => {
  return (
    <Card>
      <ReactApexChart options={config.options} series={config.series} type="donut" />        
    </Card>
  );
}

export default SimpleDonutChart;
