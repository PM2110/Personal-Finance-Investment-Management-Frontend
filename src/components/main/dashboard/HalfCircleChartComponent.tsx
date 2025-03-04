import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const HalfCircleChartComponent: React.FC<{ spent: number, limit: number }> = ({ spent, limit }) => {
    const percentage = (spent / limit) * 100;
    
    return (
        <div style={{ width: '200px', height: '200px' }}>
            <CircularProgressbar
                value={percentage}
                text={`${spent} / ${limit}`}
                styles={buildStyles({
                    pathColor: percentage > 100 ? '#ff0000' : '#4caf50',
                    textColor: '#000',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                })}
            />
        </div>
    );
};

export default HalfCircleChartComponent;
