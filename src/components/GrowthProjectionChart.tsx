import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GrowthProjectionChart = () => {
  const data = {
    labels: ['2025', '2026', '2027', '2028', '2029', '2030'],
    datasets: [
      {
        label: 'Capital Deployed (₹ Cr)',
        data: [10, 20, 40, 80, 160, 200],
        borderColor: '#1f77b4',
        backgroundColor: 'rgba(31, 119, 180, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Rental Income (₹ Lakh/year)',
        data: [60, 120, 240, 480, 960, 1440],
        borderColor: '#ff7f0e',
        backgroundColor: 'rgba(255, 127, 14, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Net Profit (₹ Lakh/year)',
        data: [35, 70, 140, 280, 560, 1120],
        borderColor: '#2ca02c',
        backgroundColor: 'rgba(44, 160, 44, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'A3T Ventures Projected Growth Trajectory (2025–2030)',
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Value',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Year',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default GrowthProjectionChart;