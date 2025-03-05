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
  duration: string;
}

const PartitionedBarChart: React.FC<PartitionedBarChartProps> = ({ accountID, duration }) => {
  const transactions = useSelector((state: RootState) => state.transaction.data);
  const { currencyValues, currency } = useSelector((state) => state.userPreference.data);

  const partitions = useMemo(() => {
    const now = new Date();
    const partitionMap: Record<string, number> = {
      '24h': 6 * 60 * 60 * 1000,
      '7d': 24 * 60 * 60 * 1000,
      '1m': 7 * 24 * 60 * 60 * 1000,
      '6m': 30 * 24 * 60 * 60 * 1000,
      '1y': 3 * 30 * 24 * 60 * 60 * 1000,
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
      const partitionKey = `${partition}`;

      if (!partitionedData[partitionKey]) {
        partitionedData[partitionKey] = { income: 0, expense: 0 };
      }

      if (transaction.receiverAccountID === accountID) {
        if(currency){
          partitionedData[partitionKey].income += (Number(transaction.receivedAmount) || 0) / currencyValues[transaction.receivedCurrency];
        }
        else{
          partitionedData[partitionKey].income += Number(transaction.receivedAmount) || 0;
        }
      }
      if(currency){
        partitionedData[partitionKey].expense += (Number(transaction.sentAmount) || 0) / currencyValues[transaction.sentCurrency];
      }
      else{
        partitionedData[partitionKey].expense += Number(transaction.sentAmount) || 0;
      }
    });

    const partitionLabels: Record<string, string[]> = {
      '24h': ['0-6h', '6-12h', '12-18h', '18-24h'],
      '7d': ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
      '1m': ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      '6m': ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'],
      '1y': ['Q1', 'Q2', 'Q3', 'Q4'],
    };

    const partitionedArray = Object.entries(partitionedData).map(([key, value], index) => ({
      name: partitionLabels[duration][index] || key,
      income: value.income,
      expense: value.expense,
    }));

    const requiredPartitions = {
      '24h': 4,
      '7d': 7,
      '1m': 4,
      '6m': 6,
      '1y': 4,
    };

    while (partitionedArray.length < requiredPartitions[duration]) {
      partitionedArray.push({ name: partitionLabels[duration][partitionedArray.length], income: 0, expense: 0 });
    }

    return partitionedArray;
  }, [transactions, accountID, duration]);

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={partitions} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="income" fill="#3B82F6" />
        <Bar dataKey="expense" fill="#000000" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PartitionedBarChart;