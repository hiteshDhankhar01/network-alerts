import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import alerts from '../assets/eve.json';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const AlertsByCategory = () => {
    const categoryCount = {};
    alerts.forEach(alert => {
        if (alert.alert) {
            const category = alert.alert.category;
            categoryCount[category] = (categoryCount[category] || 0) + 1;
        }
    });

    const data = {
        labels: Object.keys(categoryCount),
        datasets: [{
            data: Object.values(categoryCount),
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 206, 86, 0.6)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
        }]
    };

    return <Pie data={data} />;
};

export default AlertsByCategory;
