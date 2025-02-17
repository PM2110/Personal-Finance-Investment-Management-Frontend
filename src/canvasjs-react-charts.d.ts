declare module '@canvasjs/react-charts' {
    interface CanvasJSChartProps {
        options?: object;
        containerProps?: React.HTMLAttributes<HTMLDivElement>;
        onRef?: (ref: object) => void;
    }

    interface CanvasJSStatic {
        Chart: new (containerId: string, options: object) => void;
        addColorSet: (name: string, colors: string[]) => void;
        formatNumber: (number: number) => string;
    }
    const CanvasJSReact: {
        CanvasJS: CanvasJSStatic;
        CanvasJSChart: React.ComponentType<CanvasJSChartProps>;
    };
    export default CanvasJSReact;
}