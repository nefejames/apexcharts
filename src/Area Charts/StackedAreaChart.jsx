import React from 'react';
import ReactApexChart  from 'react-apexcharts';
import { Card } from '../Styles';

const config = {
  series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
  options: {
    chart: {  
     
      toolbar: {
        show: false
      },
    }, 
    title: {
      text: 'A Basic Area Chart',
      align: 'left'
    },
    dataLabels: {
      enabled: true
    },
    stroke: {
      curve: 'smooth'
    },

    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
  },
}

const StackedAreaChart = () => {
  return (
    <Card>
      <ReactApexChart options={config.options} series={config.series} type="area" />        
    </Card>
  );
}

export default StackedAreaChart;
