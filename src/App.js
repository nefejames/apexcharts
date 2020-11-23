import React from 'react';
import { Container} from './Styles';
import StackedAreaChart from './Area Charts/StackedAreaChart';
import BasicLineChart from './Line Charts/BasicLineChart'; 
import BasicColumnChart from './Column Charts/BasicColumnChart';
import CustomDataLabelBarChart from './Bar Charts/CustomDataLabelBarChart';
import LineAreaColumnChart from './Mixed Charts/LineAreaColumnChart';
import SimplePieChart from './Pie and Donut Chart/SimplePieChart';
import SimpleDonutChart from './Pie and Donut Chart/SimpleDonutChart';

function App() {

  return (
    <Container>
      <BasicLineChart />
      <StackedAreaChart />
      <BasicColumnChart />
      <CustomDataLabelBarChart />
      <LineAreaColumnChart />
      <SimplePieChart />
      <SimpleDonutChart />
    </Container>


  );
}

export default App;
