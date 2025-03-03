import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer, LabelList } from 'recharts';
import { TransactionData } from '../../../redux/transactionSlice'; // Adjust import if necessary

interface BarChartComponentProps {
    accountID: number;
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({ accountID }) => {
    const [timePeriod, setTimePeriod] = useState('7days'); // Default to 7 days
    const { userName } = useSelector((state: any) => state.user.data);

    // Fetch transactions from the Redux store
    const transactions: TransactionData[] = useSelector((state: any) => state.transaction.data);

    // Function to filter transactions based on time period
    const filterTransactionsByTimePeriod = (transactions: TransactionData[], accountID: number, timePeriod: string) => {
        const currentTime = new Date();
        let filteredTransactions = transactions.filter(
            (transaction) => transaction.senderAccountID === accountID || transaction.receiverAccountID === accountID
        );

        // Filter based on selected time period
        switch (timePeriod) {
            case '24hours':
                return filteredTransactions.filter(
                    (transaction) => currentTime.getTime() - new Date(transaction.date).getTime() <= 24 * 60 * 60 * 1000
                );
            case '7days':
                return filteredTransactions.filter(
                    (transaction) => currentTime.getTime() - new Date(transaction.date).getTime() <= 7 * 24 * 60 * 60 * 1000
                );
            case '1month':
                return filteredTransactions.filter(
                    (transaction) => currentTime.getTime() - new Date(transaction.date).getTime() <= 30 * 24 * 60 * 60 * 1000
                );
            case '6months':
                return filteredTransactions.filter(
                    (transaction) => currentTime.getTime() - new Date(transaction.date).getTime() <= 6 * 30 * 24 * 60 * 60 * 1000
                );
            case '1year':
                return filteredTransactions.filter(
                    (transaction) => currentTime.getTime() - new Date(transaction.date).getTime() <= 365 * 24 * 60 * 60 * 1000
                );
            default:
                return filteredTransactions;
        }
    };

    // Memoize the filtered transactions
    const filteredTransactions = useMemo(() => filterTransactionsByTimePeriod(transactions, accountID, timePeriod), [
        transactions,
        accountID,
        timePeriod,
    ]);

    // Process daily incoming and outgoing transactions for the chart
    const chartData = useMemo(() => {
        const dailyData: { date: string; incoming: number; outgoing: number }[] = [];

        // Calculate the start date for 7 days ago
        const currentDate = new Date();
        const startDate = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000); // 7 days ago

        // Create empty daily data for the past 7 days
        for (let i = 0; i < 7; i++) {
            const day = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
            const dayLabel = `${day.getMonth() + 1}/${day.getDate()}`;

            dailyData.push({
                date: dayLabel,
                incoming: 0,
                outgoing: 0,
            });
        }

        // Iterate through filtered transactions and sum up incoming/outgoing amounts for each day
        filteredTransactions.forEach((transaction) => {
            const transactionDate = new Date(transaction.date);
            const dayIndex = Math.floor((currentDate.getTime() - transactionDate.getTime()) / (24 * 60 * 60 * 1000)); // Day index (0 to 6)

            // Make sure the transaction date is within the last 7 days
            if (dayIndex >= 0 && dayIndex < 7) {
                
                // Identify whether the transaction is incoming or outgoing
                if (transaction.from !== userName) {
                    const amount = transaction.receivedAmount;
                    // Incoming (received)
                    dailyData[dayIndex].incoming += amount;
                } else {
                    const amount = transaction.sentAmount;
                    // Outgoing (sent)
                    dailyData[dayIndex].outgoing += amount;
                }
            }
        });

        return dailyData;
    }, [filteredTransactions, userName]);

    return (
        <div>
            {/* Dropdown for time period selection */}
            <div className="flex justify-between items-center mb-4">
                <label className="text-sm">Time Period: </label>
                <select
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(e.target.value)}
                    className="bg-white border border-gray-300 p-2 rounded"
                >
                    <option value="24hours">24 Hours</option>
                    <option value="7days">7 Days</option>
                    <option value="1month">1 Month</option>
                    <option value="6months">6 Months</option>
                    <option value="1year">1 Year</option>
                </select>
            </div>

            {/* Responsive Bar Chart */}
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="incoming" fill="#8884d8">
                        <LabelList dataKey="incoming" position="top" />
                    </Bar>
                    <Bar dataKey="outgoing" fill="#82ca9d">
                        <LabelList dataKey="outgoing" position="top" />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartComponent;
