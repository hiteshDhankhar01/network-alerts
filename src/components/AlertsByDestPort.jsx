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

const AlertsByDestPort = () => {
    const destPortCount = {};
    alerts.forEach(alert => {
        if (alert.alert) {
            destPortCount[alert.dest_port] = (destPortCount[alert.dest_port] || 0) + 1;
        }
    });

    const data = {
        labels: Object.keys(destPortCount),
        datasets: [{
            label: 'Alerts by Destination Port',
            data: Object.values(destPortCount),
            backgroundColor: 'rgba(255, 206, 86, 0.6)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
        }]
    };

    return <Bar data={data} />;
};

export default AlertsByDestPort;
