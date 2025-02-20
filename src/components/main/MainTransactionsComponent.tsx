import { useState } from "react";
import { RiArrowGoForwardLine, RiFilter3Line, RiSearchLine } from "react-icons/ri";
import MainTransactionDetailsComponent from "./MainTransactionDetailsComponent";
import MainTransactionFilterForm from "./MainTransactionFilterForm";

const transactionsData = [
    { id: 1, name: "Jakob Mango", amount: 86563.96, status: "Checking", date: "Feb 25, 2024 4:44 am", method: "Wire" },
    { id: 2, name: "Ryan Bergson", amount: 4694.12, status: "Ops Payroll", date: "Feb 20, 2024 10:25 pm", method: "ACH" },
    { id: 3, name: "Lincoln Gouse", amount: 3350.75, status: "Checking", date: "Mar 17, 2024 8:23 pm", method: "Wire" },
    { id: 4, name: "Netflix Income", amount: 1165.31, status: "AP", date: "Mar 1, 2024 12:40 am", method: "Wire" },
    { id: 5, name: "Nolan Septimus", amount: 1421.63, status: "Checking", date: "Mar 7, 2024 6:02 pm", method: "Wire" },
    { id: 6, name: "Spotify Subscription", amount: 4453.37, status: "Checking", date: "Mar 1, 2024 4:39 pm", method: "Wire" },
    { id: 7, name: "Marilyn Lipshutz", amount: 2611.06, status: "Checking", date: "Mar 16, 2024 8:29 am", method: "Wire" },
    { id: 8, name: "Lindsey Gouse", amount: 4876.64, status: "Checking", date: "Feb 24, 2024 11:51 pm", method: "Wire" },
];

const MainTransactionsComponent = () => {

    const [selected, setSelected] = useState(1);
    const [visibleTransactionDetails, setVisibleTransactionDetails] = useState(false);
    const [visibleTransactionFilterForm, setVisibleTransactionFilterForm] = useState(false);

    const [transactions, setTransactions] = useState(transactionsData);
    const [sortColumn, setSortColumn] = useState("name");
    const [sortOrder, setSortOrder] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const handleSort = (column: keyof typeof transactionsData[0]) => {
        const order = sortColumn === column && sortOrder === "asc" ? "desc" : "asc";
        setSortColumn(column);
        setSortOrder(order);

        const sortedTransactions = [...transactions].sort((a, b) => {
            if (a[column] < b[column]) return order === "asc" ? -1 : 1;
            if (a[column] > b[column]) return order === "asc" ? 1 : -1;
            return 0;
        });

        setTransactions(sortedTransactions);
    };

    const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1);
    };

    const paginatedTransactions = transactions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleTransactionDetails: () => void = () => {
        setVisibleTransactionDetails(!visibleTransactionDetails);
    }

    const handleTransactionFilter: () => void = () => {
        setVisibleTransactionFilterForm(!visibleTransactionFilterForm);
    }

    return (
        <div className="flex w-full h-full flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            <div className="flex gap-3 items-center justify-between text-[14px]">
                <div className="flex gap-2 items-center text-[#666D80] border-[#DFE1E7] border-2 px-3 py-2 rounded-lg">
                    <RiSearchLine className="text-[16px]" />
                    <input className="focus:outline-none" placeholder="Search" />
                </div>
                <button className="flex items-center gap-2 text-[13px]  border-[#DFE1E7] border-2 px-3 py-2 rounded-lg hover:bg-black hover:border-black hover:text-white hover:cursor-pointer"><RiArrowGoForwardLine className="text-[14px]" /> Export</button>
            </div>
            <div className="flex flex-col border-[#DFE1E7] border-2 rounded-xl h-auto p-3">
                <div className="flex flex-col gap-2 lg:flex-row justify-between lg:items-center">
                    <div className="w-fit flex gap-2 bg-[#ECEFF3] p-1 rounded-lg text-[#666D80] text-[14px] ">
                        <button onClick={() => setSelected(1)} className={`${selected === 1 ? "bg-white rounded-lg px-10 py-2 text-black" : "px-10 py-2"}`}>All</button>
                        <button onClick={() => setSelected(2)} className={`${selected === 2 ? "bg-white rounded-lg px-6 py-2 text-black" : "px-6 py-2"}`}>Income</button>
                        <button onClick={() => setSelected(3)} className={`${selected === 3 ? "bg-white rounded-lg px-6 py-2 text-black" : "px-6 py-2"}`}>Expense</button>
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
                <div className="flex flex-col w-full h-full gap-5">
                    <div className="rounded-xl p-3">
                        <div className="w-full overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="text-left bg-gray-100">
                                        <th className="p-3 cursor-pointer" onClick={() => handleSort("name")}>To / From</th>
                                        <th className="p-3 cursor-pointer" onClick={() => handleSort("amount")}>Amount</th>
                                        <th className="p-3">Status</th>
                                        <th className="p-3 cursor-pointer" onClick={() => handleSort("date")}>Date & Time</th>
                                        <th className="p-3">Payment Method</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paginatedTransactions.map((transaction) => (
                                        <tr key={transaction.id} className="border-t hover:bg-gray-50">
                                            <td className="p-3">{transaction.name}</td>
                                            <td className="p-3">${transaction.amount.toFixed(2)}</td>
                                            <td className="p-3">{transaction.status}</td>
                                            <td className="p-3">{transaction.date}</td>
                                            <td className="p-3">{transaction.method}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <div className="flex items-center gap-2">
                                <span>Show</span>
                                <select
                                    value={itemsPerPage}
                                    onChange={handleItemsPerPageChange}
                                    className="border px-2 py-1 rounded"
                                >
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                </select>
                                <span>entries</span>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <button
                                    disabled={currentPage === 1}
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                    className="px-3 py-1 border rounded disabled:opacity-50"
                                >
                                    Prev
                                </button>
                                <span>Page {currentPage}</span>
                                <button
                                    disabled={currentPage * itemsPerPage >= transactions.length}
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                    className="px-3 py-1 border rounded disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {(visibleTransactionDetails || visibleTransactionFilterForm) && (
                <div className="fixed inset-0 bg-black/70 z-10"></div>
            )}
            <MainTransactionDetailsComponent isVisible={visibleTransactionDetails} onClose={handleTransactionDetails} />
            <MainTransactionFilterForm isVisible={visibleTransactionFilterForm} onClose={handleTransactionFilter} />
        </div>
    );
}

export default MainTransactionsComponent;