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

  // Check if we're on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: isMobile ? 'bottom' : 'top',
        labels: {
          font: {
            size: isMobile ? 10 : 12,
          },
          padding: isMobile ? 15 : 20,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      title: {
        display: true,
        text: isMobile 
          ? 'A3T Ventures Growth (2025–2030)' 
          : 'A3T Ventures Projected Growth Trajectory (2025–2030)',
        font: {
          size: isMobile ? 14 : 16,
          weight: 'bold',
        },
        padding: {
          top: 10,
          bottom: isMobile ? 15 : 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          size: isMobile ? 12 : 14,
        },
        bodyFont: {
          size: isMobile ? 11 : 13,
        },
        cornerRadius: 8,
        displayColors: true,
      },
    },
    scales: {
      y: {
        title: {
          display: !isMobile,
          text: 'Value',
          font: {
            size: isMobile ? 10 : 12,
          },
        },
        ticks: {
          font: {
            size: isMobile ? 10 : 11,
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        title: {
          display: !isMobile,
          text: 'Year',
          font: {
            size: isMobile ? 10 : 12,
          },
        },
        ticks: {
          font: {
            size: isMobile ? 10 : 11,
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
    elements: {
      point: {
        radius: isMobile ? 3 : 4,
        hoverRadius: isMobile ? 5 : 6,
      },
      line: {
        borderWidth: isMobile ? 2 : 3,
      },
    },
  };

  return (
    <div className="w-full">
      {/* Mobile: smaller height, Desktop: larger height */}
      <div className="h-64 sm:h-80 md:h-96 lg:h-[500px] w-full">
        <Line data={data} options={options} />
      </div>
      
      {/* Mobile-specific legend for better readability on small screens */}
      {isMobile && (
        <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>Capital Deployed (₹ Cr)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span>Rental Income (₹ Lakh/year)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Net Profit (₹ Lakh/year)</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GrowthProjectionChart;