
import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4','6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => (
  <> 
      <div className='line'>
        <Line data={data} options={options} />
      </div>
  </>
);

export default LineChart;