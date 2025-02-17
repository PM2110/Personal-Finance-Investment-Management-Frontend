import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BarChatComponent: React.FC = () => {
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2",
        axisY: {
            prefix: "",
            tickLength: 0,
            suffix: "K",
            includeZero: true
        },
        legend: {
            cursor: "pointer",
            itemclick: (e: { dataSeries: { visible?: boolean }; chart: { render: () => void } }) => {
                if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                    e.dataSeries.visible = false;
                } else {
                    e.dataSeries.visible = true;
                }
                e.chart.render();
            }
        },
        toolTip: {
            shared: true
        },
        data: [{
            type: "column",
            name: "Germany",
            showInLegend: true,
            color: "#E5EFFF",
            yValueFormatString: "$##,###K",
            dataPointWidth: 10,
            dataPoints: [
                { label: "Q1", y: 5 },
                { label: "Q2", y: 10 },
                { label: "Q3", y: 12 },
                { label: "Q4", y: 14 },
                { label: "Q8", y: 14 },
                { label: "Q7", y: 12 },
            ]
        }, {
            type: "column",
            name: "India",
            color: "#666D80",
            showInLegend: true,
            yValueFormatString: "$##,###K",
            dataPointWidth: 10,
            dataPoints: [
                { label: "Q1", y: 7 },
                { label: "Q2", y: 11 },
                { label: "Q3", y: 15 },
                { label: "Q4", y: 16 },
                { label: "Q8", y: 16 },
                { label: "Q7", y: 15 },
            ]
        }]
    };

    return (
        <div className='h-full w-full rounded-xl'>
            <CanvasJSChart options={options} containerProps={{ height: "100%", width: "100%" }} />
        </div>
    );
}

export default BarChatComponent;