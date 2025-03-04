import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';

// Define types
interface TransactionData {
  transactionID: string;
  userID: number;
  senderAccountID: number;
  receiverAccountID: number;
  status: string;
  deduct: boolean;
  includeInBudget: boolean;
  budgetID: number;
  sentCurrency: string;
  receivedCurrency: string;
  sentAmount: number;
  receivedAmount: number;
  from: string;
  to: string;
  category: string;
  date: string;
}

interface PartitionedData {
  name: string;
  income: number;
  expense: number;
}

interface RootState {
  transaction: {
    data: TransactionData[];
  };
}

interface PartitionedBarChartProps {
  accountID: number;
  duration: '24h' | '7d' | '1m' | '6m' | '1y';
}

const PartitionedBarChart: React.FC<PartitionedBarChartProps> = ({ accountID, duration }) => {
  const transactions = useSelector((state: RootState) => state.transaction.data);

  const partitions = useMemo(() => {
    const now = new Date();
    const partitionMap: Record<string, number> = {
      '24h': 6 * 60 * 60 * 1000, // 6 hours
      '7d': 24 * 60 * 60 * 1000, // 1 day
      '1m': 7 * 24 * 60 * 60 * 1000, // 1 week
      '6m': 30 * 24 * 60 * 60 * 1000, // 1 month
      '1y': 3 * 30 * 24 * 60 * 60 * 1000, // 3 months
    };
    const partitionSize = partitionMap[duration];

    const partitionedData: Record<string, { income: number; expense: number }> = {};

    const getDurationMs = (duration: string): number => {
      const durationMap: Record<string, number> = {
        '24h': 24 * 60 * 60 * 1000,
        '7d': 7 * 24 * 60 * 60 * 1000,
        '1m': 30 * 24 * 60 * 60 * 1000,
        '6m': 6 * 30 * 24 * 60 * 60 * 1000,
        '1y': 12 * 30 * 24 * 60 * 60 * 1000,
      };
      return durationMap[duration];
    };
    transactions.forEach((transaction) => {
      const date = new Date(transaction.date);
      const timeDiff = now.getTime() - date.getTime();
      if (timeDiff > getDurationMs(duration)) return;

      const partition = Math.floor(timeDiff / partitionSize);
      if (!partitionedData[partition]) {
        partitionedData[partition] = { income: 0, expense: 0 };
      }

      if (transaction.receiverAccountID === accountID) {
        partitionedData[partition].income += transaction.receivedAmount || 0;
      }
      if (transaction.senderAccountID === accountID) {
        partitionedData[partition].expense += transaction.sentAmount || 0;
      }
    });

    return Object.entries(partitionedData).map(([key, value]) => ({
      name: `${key}`,
      income: value.income,
      expense: value.expense,
    }));
  }, [transactions, accountID, duration]);


  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={partitions} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="income" fill="#E5EFFF" />
        <Bar dataKey="expense" fill="#666D80" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PartitionedBarChart;