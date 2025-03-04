import React from 'react';
import { AccountData } from '../../../redux/accountSlice';
import { GoCreditCard } from 'react-icons/go';
import { useSelector } from 'react-redux';
import { TransactionData } from '../../../redux/transactionSlice';
import { MdHealthAndSafety } from 'react-icons/md';
import { getCurrency } from '../../currency';
import { RiArrowLeftDownLine, RiArrowRightUpLine } from 'react-icons/ri';

interface DashboardHealthScoreComponentProps {
    account: AccountData | null;
}

const DashboardHealthScoreComponent: React.FC<DashboardHealthScoreComponentProps> = ({ account }) => {
    const transactions = useSelector((state) => state.transaction.data);
    const incomeTransactions = transactions.filter((transaction: TransactionData) => transaction.receiverAccountID === account?.accountID);
    const expenseTransactions = transactions.filter((transaction: TransactionData) => transaction.senderAccountID === account?.accountID);

    let totalIncome = incomeTransactions.reduce((sum: number, transaction: TransactionData) => sum + Number(transaction.receivedAmount), 0);
    let totalExpenses = expenseTransactions.reduce((sum: number, transaction: TransactionData) => sum + Number(transaction.sentAmount), 0);
    const { currencyValues, currency } = useSelector((state) => state.userPreference.data);
    const healthScore = totalExpenses === 0 ? 100 : (totalIncome / totalExpenses) * 100 > 100 ? 100 : (totalIncome / totalExpenses) * 100 ;
    if(currency){
        totalIncome = totalIncome / currencyValues[account?.currency];
        totalExpenses = totalExpenses / currencyValues[account?.currency];
    }
    if (!account) {
        return <div>No account selected</div>;
    }

    return (
        <div className="flex flex-col gap-2 border-[#DFE1E7] border-2 rounded-xl h-fit p-2">
            <div className="flex h-auto justify-between text-[14px]">
                <div className="flex gap-2 items-center">
                    <GoCreditCard />
                    Health Score
                </div>
            </div>
            <div className="bg-[#DFE1E7] h-[1px] mt-1"></div>
            <div className="m-2 flex gap-4 text-[14px] justify-between text-[#666D80]">
                <div className="flex w-full flex-row gap-2 items-center">
                    <div className="bg-[#F8F5FF] p-4 rounded-full">
                        <MdHealthAndSafety className=" text-black text-[17px]"/>
                    </div>
                    <div className="flex flex-col justify-between">
                        Health Score
                        <div className="text-black ">
                            {healthScore.toFixed(2)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#DFE1E7] h-[1px] mt-1"></div>
            <div className="flex w-full flex-row gap-2 items-center">
                <div className="bg-[#F8F5FF] p-4 rounded-full">
                    <RiArrowLeftDownLine className=" text-black text-[17px]"/>
                </div>
                <div className="flex flex-col justify-between">
                    Total Income
                    <div className="flex items-center gap-1 text-[#666D80] text-[13px]">
                        {currency ? getCurrency(currency) : getCurrency(account.currency)} {Number(totalIncome).toFixed(2)}
                    </div>
                </div>
            </div>
            <div className="bg-[#DFE1E7] h-[1px] mt-1"></div>
            <div className="flex w-full flex-row gap-2 items-center">
                <div className="bg-[#E5EFFF] p-4 rounded-full">
                    <RiArrowRightUpLine className=" text-blue-600 text-[17px]"/>
                </div>
                <div className="flex flex-col justify-between">
                    Total Expense
                    <div className="flex items-center gap-1 text-[#666D80] text-[13px]">
                        {currency ? getCurrency(currency) : getCurrency(account.currency)} {Number(totalExpenses).toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHealthScoreComponent;