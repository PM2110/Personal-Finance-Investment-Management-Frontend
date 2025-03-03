import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer, LabelList } from 'recharts';
import { TransactionData } from '../../../redux/transactionSlice'; // Adjust import if necessary
import { UserData } from '../../../redux/userSlice';
import { GoCreditCard } from 'react-icons/go';

interface BarChartComponentProps {
    accountID: number;
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({ accountID }) => {
    const [timePeriod, setTimePeriod] = useState('7days');
    const { userName } = useSelector((state: { user: { data: UserData } }) => state.user.data);

    const transactions: TransactionData[] = useSelector((state: { transaction: { data: TransactionData[] } }) => state.transaction.data);

    const filterTransactionsByTimePeriod = (transactions: TransactionData[], accountID: number, timePeriod: string) => {
        const currentTime = new Date();
        const filteredTransactions = transactions.filter(
            (transaction) => transaction.senderAccountID === accountID || transaction.receiverAccountID === accountID
        );

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

    const filteredTransactions = useMemo(() => filterTransactionsByTimePeriod(transactions, accountID, timePeriod), [
        transactions,
        accountID,
        timePeriod,
    ]);

    const chartData = useMemo(() => {
        const dailyData: { date: string; incoming: number; outgoing: number }[] = [];

        const currentDate = new Date();
        const startDate = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);

        for (let i = 0; i < 7; i++) {
            const day = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
            const dayLabel = `${day.getMonth() + 1}/${day.getDate()}`;

            dailyData.push({
                date: dayLabel,
                incoming: 0,
                outgoing: 0,
            });
        }

        filteredTransactions.forEach((transaction) => {
            const transactionDate = new Date(transaction.date);
            const dayIndex = Math.floor((currentDate.getTime() - transactionDate.getTime()) / (24 * 60 * 60 * 1000));

            if (dayIndex >= 0 && dayIndex < 7) {
                
                if (transaction.from !== userName) {
                    const amount = transaction.receivedAmount;
                    dailyData[dayIndex].incoming += amount;
                } else {
                    const amount = transaction.sentAmount;
                    dailyData[dayIndex].outgoing += amount;
                }
            }
        });

        return dailyData;
    }, [filteredTransactions, userName]);

    return (
        <div>
            <div className="flex h-auto justify-between text-[14px]">
                <div className="flex gap-2 items-center">
                    <GoCreditCard />
                    Budget Overview
                </div>
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
            <div className="bg-[#DFE1E7] h-[1px] mt-1"></div>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="incoming" fill="#E5EFFF">
                        <LabelList dataKey="incoming" position="top" />
                    </Bar>
                    <Bar dataKey="outgoing" fill="#666D80">
                        <LabelList dataKey="outgoing" position="top" />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartComponent;