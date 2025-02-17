import React from 'react';

interface GaugeChartProps {
    percentage: number;
}

const GaugeChartComponent: React.FC<GaugeChartProps> = ({ percentage }) => {
    const radius = 50;
    const totalLines = 21;
    const activeLines = Math.round(totalLines * percentage);

    const lines = Array.from({ length: totalLines }, (_, i) => {
        const angle = (i / totalLines) * 180;
        const x1 = 60 + radius * Math.cos((angle - 180) * (Math.PI / 180));
        const y1 = 60 + radius * Math.sin((angle - 180) * (Math.PI / 180));
        const x2 = 60 + (radius - 15) * Math.cos((angle - 180) * (Math.PI / 180));
        const y2 = 60 + (radius - 15) * Math.sin((angle - 180) * (Math.PI / 180));
        const color = i > (totalLines -  activeLines) ? 'black' : '#818898';

        return (
            <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={color}
                strokeWidth="4"
            />
        );
    });

    return (
        <svg width="120" height="120" viewBox="0 0 120 60">
            {lines}
            <text x="60" y="60" textAnchor="middle" fontSize="12" fill="#000000">
                Spent $2103
            </text>
        </svg>
    );
};

export default GaugeChartComponent;