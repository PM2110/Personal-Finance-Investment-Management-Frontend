import { useEffect, useState } from "react";
import { RiArrowGoForwardLine, RiArrowLeftSLine, RiArrowRightSLine, RiFilter3Line, RiSearchLine } from "react-icons/ri";
import MainTransactionDetailsComponent from "./MainTransactionDetailsComponent";
import MainTransactionFilterForm from "./MainTransactionFilterForm";
import { useSelector } from "react-redux";
import { deleteTransaction, setTransactions, TransactionData } from "../../../redux/transactionSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import toast from "react-hot-toast";
import { MdAccountBalance } from "react-icons/md";
import { AccountData } from "../../../redux/accountSlice";

const MainTransactionsComponent = () => {

    const dispatch = useDispatch<AppDispatch>();

    const accounts: AccountData[] = useSelector((state) => state.account?.data);
    const [selectedAccount, setSelectedAccount] = useState(accounts ? accounts[0] : null);

    const transactionsData: TransactionData[] = useSelector((state) => state.transaction.data);
    const { userName } = useSelector((state) => state.user.data);

    const [selected, setSelected] = useState(1);
    
    const [visibleTransactionDetails, setVisibleTransactionDetails] = useState(false);
    const [visibleTransactionFilterForm, setVisibleTransactionFilterForm] = useState(false);


    const [transaction, setTransaction] = useState(transactionsData);
    const [selectedTransaction, setSelectedTransaction] = useState<TransactionData>();
    
    const [sortColumn, setSortColumn] = useState("name");
    const [sortOrder, setSortOrder] = useState("asc");
    
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    useEffect(() => {
        dispatch(setTransactions(userName));
        setTransaction(transactionsData.filter((transaction: TransactionData) => transaction.senderAccountID === selectedAccount?.accountID || transaction.receiverAccountID === selectedAccount?.accountID));
    }, [selectedAccount])

    const handleSort = (column: keyof typeof transactionsData[0]) => {
        const order = sortColumn === column && sortOrder === "asc" ? "desc" : "asc";
        setSortColumn(column);
        setSortOrder(order);

        const sortedTransactions = [...transaction].sort((a, b) => {
            if (a[column] < b[column]) return order === "asc" ? -1 : 1;
            if (a[column] > b[column]) return order === "asc" ? 1 : -1;
            return 0;
        });

        setTransaction(sortedTransactions);
    };

    const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1);
    };

    const paginatedTransactions = transaction.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleTransactionDetails: () => void = () => {
        setVisibleTransactionDetails(!visibleTransactionDetails);
    }

    const handleTransactionFilter: () => void = () => {
        setVisibleTransactionFilterForm(!visibleTransactionFilterForm);
    }

    const handleDelete = () => {
        try {
            dispatch(deleteTransaction(selectedTransaction.transactionID));
            toast.success("Transaction deleted successfully.")
            handleTransactionDetails();
        } catch (error) {
            toast.error("Error while deleting transaction.");
            console.log("Error occured while deleting transaction ", error);
        }
    }

    if(!transactionsData || transactionsData.length === 0){
        return (<div className="h-full flex items-center justify-center text-[#666D80]">No Transactions Found.</div>);
    }

    return (
        <div className="flex w-full h-full flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-5">
            <div className="flex gap-3 items-center justify-between text-[14px]">
                <div className="flex gap-2 items-center text-[#666D80] border-[#DFE1E7] border-2 px-3 py-2 rounded-lg">
                    <RiSearchLine className="text-[16px]" />
                    <input className="focus:outline-none" placeholder="Search" />
                </div>
                <div className="flex flex-row gap-2">
                    <button className="flex items-center gap-2 text-[13px]  border-[#DFE1E7] border-2 px-3 py-2 rounded-lg hover:bg-black hover:border-black hover:text-white hover:cursor-pointer"><RiArrowGoForwardLine className="text-[14px]" /> Export</button>
                    <div className="flex gap-2 items-center border-[#DFE1E7] border-2 px-4 py-2 rounded-lg">
                        <MdAccountBalance className="text-[14px]"/>
                        <select onChange={(e) => setSelectedAccount(accounts.filter((account) => account.accountID === Number(e.target.value))[0])} className="focus:outline-none pr-1">
                            {accounts && accounts.length !== 0 && accounts.map((account, index) => (
                                <option key={index} value={account?.accountID}>{account?.accountHolder} (Acc No.: xxx{account?.accountNumber.slice(account?.accountNumber.length - 4)})</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex flex-col border-[#DFE1E7] border-2 rounded-xl h-full p-3">
                <div className="flex flex-col gap-2 lg:flex-row justify-between lg:items-center">
                    <div className="w-fit flex gap-2 bg-[#ECEFF3] p-1 rounded-lg text-[#666D80] text-[14px] ">
                        <button onClick={() => setSelected(1)} className={`${selected === 1 ? "bg-white rounded-lg px-10 py-2 text-black" : "px-10 py-2"}`}>All</button>
                        <button onClick={() => setSelected(2)} className={`${selected === 2 ? "bg-white rounded-lg px-6 py-2 text-black" : "px-6 py-2"}`}>Income</button>
                        <button onClick={() => setSelected(3)} className={`${selected === 3 ? "bg-white rounded-lg px-6 py-2 text-black" : "px-6 py-2"}`}>Expense</button>
                        <button onClick={() => setSelected(4)} className={`${selected === 4 ? "bg-white rounded-lg px-6 py-2 text-black" : "px-6 py-2"}`}>Pending</button>
                        <button onClick={() => setSelected(5)} className={`${selected === 5 ? "bg-white rounded-lg px-6 py-2 text-black" : "px-6 py-2"}`}>Rejected</button>
                    </div>
                    <div className="flex s gap-3 text-[14px]">
                        <div className="flex gap-2 items-center text-[#666D80] border-[#DFE1E7] border-2 px-3 py-2 rounded-lg">
                            <RiSearchLine className="text-[16px]" />
                            <input className="focus:outline-none" placeholder="Search transaction" />
                        </div>
                        <button onClick={handleTransactionFilter} className="flex gap-2 items-center border-[#DFE1E7] border-2 px-4 py-2 rounded-lg">
                            <RiFilter3Line className="text-[16px]" />
                            Filter
                        </button>
                    </div>
                </div>
                <div className="flex flex-col my-4 w-full h-full max-h-full gap-5">
                    <div className="flex flex-col border-[#DFE1E7] border-2 h-full max-h-full rounded-xl p-3">
                        <div className="w-full h-[85%] overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="text-left bg-gray-100 text-[14px]">
                                        <th className="p-3 cursor-pointer font-normal" onClick={() => handleSort("from")}>To / From</th>
                                        <th className="p-3 cursor-pointer font-normal" onClick={() => handleSort("sentAmount")}>Amount Sent / Received</th>
                                        <th className="p-3 font-normal">Category</th>
                                        <th className="p-3 font-normal">Status</th>
                                        <th className="p-3 cursor-pointer font-normal" onClick={() => handleSort("date")}>Date & Time</th>
                                        <th className="p-3 font-normal"></th>
                                    </tr>
                                </thead>
                                <tbody className="overflow-y-auto">
                                    {selected === 1 && paginatedTransactions.map((transaction: TransactionData, index: number) => (
                                        <tr key={index} onClick={() => { setSelectedTransaction(transaction); setVisibleTransactionDetails(!visibleTransactionDetails) }} className="border-[#DFE1E7] border-t hover:bg-gray-50 text-[13px]">
                                            <td className="p-3 w-[27.5%]">{transaction.to === userName ? transaction.from : transaction.to}</td>
                                            <td className="p-3 w-[20%]">{transaction.to === userName ? `${transaction.receivedCurrency} ${Number(transaction.receivedAmount).toFixed(2)}` : `${transaction.sentCurrency} ${Number(transaction.sentAmount).toFixed(2)}`}</td>
                                            <td className="p-3 w-[12%]">{transaction.category}</td>
                                            <td className="p-3 w-[12%]">{transaction.status}</td>
                                            <td className="p-3 w-[27.5%]">{new Date(transaction.date).toLocaleString()}</td>
                                            <td className="p-3 w-[5%]"><RiArrowRightSLine onClick={() => { setSelectedTransaction(transaction); setVisibleTransactionDetails(!visibleTransactionDetails) }} className="text-[22px] text-black"/></td>
                                        </tr>
                                    ))}
                                    {selected === 2 && paginatedTransactions.map((transaction: TransactionData, index: number) => (
                                        transaction.to === userName && transaction.status === "Completed" && <tr key={index} onClick={() => { setSelectedTransaction(transaction); setVisibleTransactionDetails(!visibleTransactionDetails) }} className="border-[#DFE1E7] border-t hover:bg-gray-50 text-[13px]">
                                            <td className="p-3 w-[27.5%]">{transaction.to === userName ? transaction.from : transaction.to}</td>
                                            <td className="p-3 w-[20%]">{transaction.receivedCurrency} {Number(transaction.receivedAmount).toFixed(2)}</td>
                                            <td className="p-3 w-[12%]">{transaction.category}</td>
                                            <td className="p-3 w-[12%]">{transaction.status}</td>
                                            <td className="p-3 w-[27.5%]">{transaction.date}</td>
                                            <td className="p-3 w-[5%]"><RiArrowRightSLine onClick={() => { setSelectedTransaction(transaction); setVisibleTransactionDetails(!visibleTransactionDetails) }} className="text-[22px] text-black"/></td>
                                        </tr>
                                    ))}
                                    {selected === 3 && paginatedTransactions.map((transaction: TransactionData, index: number) => (
                                        transaction.from === userName && transaction.status === "Completed" && <tr key={index} onClick={() => { setSelectedTransaction(transaction); setVisibleTransactionDetails(!visibleTransactionDetails) }} className="border-[#DFE1E7] border-t hover:bg-gray-50 text-[13px]">
                                            <td className="p-3 w-[27.5%]">{transaction.to === userName ? transaction.from : transaction.to}</td>
                                            <td className="p-3 w-[20%]">{transaction.sentCurrency} {Number(transaction.sentAmount).toFixed(2)}</td>
                                            <td className="p-3 w-[12%]">{transaction.category}</td>
                                            <td className="p-3 w-[12%]">{transaction.status}</td>
                                            <td className="p-3 w-[27.5%]">{transaction.date}</td>
                                            <td className="p-3 w-[5%]"><RiArrowRightSLine onClick={() => { setSelectedTransaction(transaction); setVisibleTransactionDetails(!visibleTransactionDetails) }} className="text-[22px] text-black"/></td>
                                        </tr>
                                    ))}
                                    {selected === 4 && paginatedTransactions.map((transaction: TransactionData, index: number) => (
                                        transaction.status === "Pending" && <tr key={index} onClick={() => { setSelectedTransaction(transaction); setVisibleTransactionDetails(!visibleTransactionDetails) }} className="border-[#DFE1E7] border-t hover:bg-gray-50 text-[13px]">
                                            <td className="p-3 w-[27.5%]">{transaction.to === userName ? transaction.from : transaction.to}</td>
                                            <td className="p-3 w-[20%]">{transaction.sentCurrency} {Number(transaction.sentAmount).toFixed(2)}</td>
                                            <td className="p-3 w-[12%]">{transaction.category}</td>
                                            <td className="p-3 w-[12%]">{transaction.status}</td>
                                            <td className="p-3 w-[27.5%]">{transaction.date}</td>
                                            <td className="p-3 w-[5%]"><RiArrowRightSLine onClick={() => { setSelectedTransaction(transaction); setVisibleTransactionDetails(!visibleTransactionDetails) }} className="text-[22px] text-black"/></td>
                                        </tr>
                                    ))}
                                    {selected === 5 && paginatedTransactions.map((transaction: TransactionData, index: number) => (
                                        transaction.status === "Rejected" && <tr key={index} onClick={() => { setSelectedTransaction(transaction); setVisibleTransactionDetails(!visibleTransactionDetails) }} className="border-[#DFE1E7] border-t hover:bg-gray-50 text-[13px]">
                                            <td className="p-3 w-[27.5%]">{transaction.to === userName ? transaction.from : transaction.to}</td>
                                            <td className="p-3 w-[20%]">{transaction.sentCurrency} {Number(transaction.sentAmount).toFixed(2)}</td>
                                            <td className="p-3 w-[12%]">{transaction.category}</td>
                                            <td className="p-3 w-[12%]">{transaction.status}</td>
                                            <td className="p-3 w-[27.5%]">{transaction.date}</td>
                                            <td className="p-3 w-[5%]"><RiArrowRightSLine onClick={() => { setSelectedTransaction(transaction); setVisibleTransactionDetails(!visibleTransactionDetails) }} className="text-[22px] text-black"/></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex flex-row h-[15%] justify-between items-center mt-5">
                            <div className="flex flex-row justify-end w-[55%] items-center gap-3 text-[13px]">
                                <button
                                    disabled={currentPage === 1}
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                    className="border-[#DFE1E7] border-2 p-1 rounded-full disabled:opacity-50"
                                >
                                    <RiArrowLeftSLine className="text-[18px] text-black"/>
                                </button>
                                <span>{currentPage}</span>
                                <button
                                    disabled={currentPage * itemsPerPage >= transaction.length}
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                    className=" border-[#DFE1E7] border-2 p-1 rounded-full disabled:opacity-50"
                                >
                                    <RiArrowRightSLine className="text-[18px] text-black"/>
                                </button>
                            </div>
                            <div className="flex flex-row justify-end items-center gap-2 text-[13px] w-[45%]">
                                <span>Show</span>
                                <select
                                    value={itemsPerPage}
                                    onChange={handleItemsPerPageChange}
                                    className="border-[#DFE1E7] border px-2 py-1 rounded"
                                >
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                </select>
                                <span>entries</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {(visibleTransactionDetails || visibleTransactionFilterForm) && (
                <div className="fixed inset-0 bg-black/70 z-10"></div>
            )}
            <MainTransactionDetailsComponent isVisible={visibleTransactionDetails} onClose={handleTransactionDetails} userName={userName} handleDelete={handleDelete} transaction={selectedTransaction}/>
            <MainTransactionFilterForm isVisible={visibleTransactionFilterForm} onClose={handleTransactionFilter} />
        </div>
    );
}

export default MainTransactionsComponent;