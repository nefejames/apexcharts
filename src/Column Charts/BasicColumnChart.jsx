import React from 'react';
import ReactApexChart  from 'react-apexcharts';
import { Card } from '../Styles';

const config = {
  series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
  options: {
    chart: {
      stacked: false,
      toolbar: {
        show: false
       }
    },
    plotOptions: {
      bar: {
        columnWidth: '75%',
        endingShape: 'rounded',
        dataLabels: {
          position: "top"
        },
      },
    },
    dataLabels: {
      offsetY: -25,
      style: {
        fontSize: '12px',
        colors: ["#304758"]
      }
    },
    stroke: {
      show: true,
      width: 4,
      colors: ['red', "blue", "green" ]
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    title: {
      text: 'A column chart',
      align: 'center',
    },
    // fill: {
    //   opacity: 1
    // },
    // tooltip: {
    //   y: {
    //     formatter: (val) => "$" + val + " thousand"
    //   }
    // }
  },
};


const BasicColumnChart = () => {
  return (
    <Card>
      <ReactApexChart options={config.options} series={config.series} type="bar" />        
    </Card>
  );
}

export default BasicColumnChart;
