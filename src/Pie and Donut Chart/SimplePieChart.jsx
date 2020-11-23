import React from 'react';
import ReactApexChart  from 'react-apexcharts';
import { Card } from '../Styles';

const config = {
  series: [20, 10, 35, 12, 23],
  options: {
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 450
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  },
};

const SimplePieChart = () => {
  return (
    <Card>
      <ReactApexChart options={config.options} series={config.series} type="pie" />        
    </Card>
  );
}

export default SimplePieChart;
