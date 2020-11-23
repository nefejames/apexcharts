import React from 'react';
import ReactApexChart  from 'react-apexcharts';
import { Card } from '../Styles';

const config = {
  series: [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }],
  options: {
    chart: {
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        distributed: true,
        horizontal: true,
        columnWidth: '70%',
        startingShape: "flat",
        endingShape: "rounded",
        dataLabels: {
          position: 'bottom',
        },
      }
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
        'United States', 'China', 'India'
      ],
    },
    title: {
        text: 'A bar chart',
        align: 'center',
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: false
      },
      y: {
        title: {
          formatter: () => ""
          }
        }
      }
    }
};


const CustomDataLabelBarChart = () => {
  return (
    <Card>
      <ReactApexChart options={config.options} series={config.series} type="bar" />        
    </Card>
  );
}

export default CustomDataLabelBarChart;
