import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useMemo } from 'react';
import { GetConstant } from '../../constants';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent: React.FC<{ accountID: number, duration: string }> = ({ accountID, duration }) => {
    const transactions = useSelector((state: RootState) => state.transaction.data);
    const { currencyValues, currency } = useSelector((state) => state.userPreference.data);

    const filteredTransactions = useMemo(() => {
        const now = new Date();
        const durationMap: Record<string, number> = {
            '24h': 24 * 60 * 60 * 1000,
            '7d': 7 * 24 * 60 * 60 * 1000,
            '1m': 30 * 24 * 60 * 60 * 1000,
            '6m': 6 * 30 * 24 * 60 * 60 * 1000,
            '1y': 12 * 30 * 24 * 60 * 60 * 1000,
        };
        const durationMs = durationMap[duration];

        return transactions.filter((transaction) => {
            const date = new Date(transaction.date);
            const timeDiff = now.getTime() - date.getTime();
            return timeDiff <= durationMs;
        });
    }, [transactions, duration]);

    const incomeCategories: Record<string, number> = {};
    const expenseCategories: Record<string, number> = {};

    filteredTransactions.forEach((transaction) => {
        if (transaction.receiverAccountID === accountID) {
            if (!incomeCategories[transaction.category]) {
                incomeCategories[transaction.category] = 0;
            }
            if(currency){
                incomeCategories[transaction.category] += Number(transaction.receivedAmount) / currencyValues[transaction.receivedCurrency];
            } else {
                incomeCategories[transaction.category] += Number(transaction.receivedAmount);
            }
        } else if (transaction.senderAccountID === accountID) {
            if (!expenseCategories[transaction.category]) {
                expenseCategories[transaction.category] = 0;
            }
            if(currency){
                expenseCategories[transaction.category] += Number(transaction.sentAmount) / currencyValues[transaction.sentCurrency];
            } else {
                expenseCategories[transaction.category] += Number(transaction.sentAmount);
            }
        }
    });

    const incomeData = {
        labels: Object.keys(incomeCategories),
        datasets: [
            {
                label: 'Income',
                data: Object.values(incomeCategories),
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40',
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40',
                ],
            },
        ],
    };

    const expenseData = {
        labels: Object.keys(expenseCategories),
        datasets: [
            {
                label: 'Expense',
                data: Object.values(expenseCategories),
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40',
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40',
                ],
            },
        ],
    };

    return (
        <div className="flex flex-col lg:flex-row gap-4 border-[#DFE1E7] border-2 p-2 rounded-xl">
            <div className="w-full lg:w-1/2">
                <h3 className="text-center">{GetConstant("INCOME_BY_CATEGORY")}</h3> {/* Use constant here */}
                <Pie data={incomeData} />
            </div>
            <div className="w-full lg:w-1/2">
                <h3 className="text-center">{GetConstant("EXPENSE_BY_CATEGORY")}</h3> {/* Use constant here */}
                <Pie data={expenseData} />
            </div>
        </div>
    );
};

export default PieChartComponent;
