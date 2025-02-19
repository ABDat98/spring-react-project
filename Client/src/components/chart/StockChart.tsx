import React, { useRef, useEffect } from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);

interface ReusableChartProps {
    data: any; // Chart.js data object
    options?: any; // Chart.js options (optional)
    type?: 'line' | 'bar' | 'radar' | 'pie'; // Chart type (default: 'bar')
}

const ReusableChart = ({ data, options, type = 'line' }: ReusableChartProps) => {
    const chartRef = useRef<ChartJS>(null);
    const canvasStyles = {
        backgroundColor: '#FFFFFF', // Chart background color
        borderRadius: '10px', // Chart border radius
        borderColor: '#FFFFFF', // Chart border color
        ShadowRoot: '0 4px 6px rgba(0, 0, 0, 0.1)', // Chart shadow
    };
    return <Chart ref={chartRef} style={canvasStyles}type={type} data={data} options={options} />;
};

export default ReusableChart;







