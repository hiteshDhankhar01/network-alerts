import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import alerts from '../assets/eve.json';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
);

const AlertsOverTime = () => {
    const timeCount = {};

    alerts.forEach(alert => {
        if (alert.alert) {
            const time = new Date(alert.timestamp).toLocaleString();
            timeCount[time] = (timeCount[time] || 0) + 1;
        }
    });

    const sortedTimes = Object.keys(timeCount).sort((a, b) => new Date(a) - new Date(b));

    const data = {
        labels: sortedTimes,
        datasets: [{
            label: 'Alerts Over Time',
            data: sortedTimes.map(time => timeCount[time]),
            fill: false,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }]
    };

    return <Line data={data} />;
};

export default AlertsOverTime;
