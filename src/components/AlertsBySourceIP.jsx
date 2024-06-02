import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import alerts from '../assets/eve.json';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
);

const AlertsBySourceIP = () => {
    const srcIPCount = {};
    alerts.forEach(alert => {
        if (alert.alert) {
            srcIPCount[alert.src_ip] = (srcIPCount[alert.src_ip] || 0) + 1;
        }
    });

    const data = {
        labels: Object.keys(srcIPCount),
        datasets: [{
            label: 'Alerts by Source IP',
            data: Object.values(srcIPCount),
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
        }]
    };

    return <Bar data={data} />;
};

export default AlertsBySourceIP;
