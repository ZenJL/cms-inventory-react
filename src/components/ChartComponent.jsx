import * as React from 'react';
import { useState } from 'react';
// import Paper from '@mui/material/Paper';
import {
  Chart,
  PieSeries,
  // AreaSeries,
  Legend,
  // Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const dataInit = [
  { partLabel: 'Meet', percent: 11.6 },
  { partLabel: 'Vegetable', percent: 39.3 },
  { partLabel: 'Rice', percent: 49.1 },
];

export default function ChartComponent() {
  const [chartData] = useState(dataInit);

  return (
    <Chart data={chartData} width={'850'} height={'360'}>
      <PieSeries
        name='Series name'
        valueField='percent'
        argumentField='partLabel'
      />

      <Legend />

      <Animation />
    </Chart>
    // <Paper>
    // </Paper>
  );
}
