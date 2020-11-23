import React from 'react';
import ReactApexChart  from 'react-apexcharts';
import { Card } from '../Styles';

const config = {
  series: [{
    name: "Performance",
    data: [10, 21, 35, 41, 59, 62, 79, 81, 98]
  }],
  options: {
  chart: {
    toolbar: {
      show: true
    },
  },
  dataLabels: {
    enabled: true
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'A Basic Line Chart',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
    column: {
      colors: ['#dddddd', 'transparent'], // takes an array which will be repeated on rows
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    title: {
      text: 'Month'
    }
  },
  yaxis: {
    title: {
      text: 'Performance'
    }
  }
  },
}

const BasicLineChart = () => {
  return (
    <Card>
      <ReactApexChart options={config.options} series={config.series} type="line"  />        
    </Card>
  );
}

export default BasicLineChart;
