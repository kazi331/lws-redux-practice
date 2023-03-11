import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../features/transactions/transactionSlice";
import Transaction from "./Transaction";

export default function Transactions() {
    const { transactions, isLoading, isError, error } = useSelector(state => state.transactions)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTransactions())
    }, [])

    let content = null;
    if (isLoading) content = "Loading..."
    if (!isLoading && isError) content = <p style={{ color: 'red' }}>There is error while loading data.</p>
    if (!isLoading && !isError && transactions.length < 1) content = "No data found"
    if (!isLoading && !isError && transactions.length > 0) content = transactions.map(item => {
        return <ul key={item.id}>
            <Transaction />
        </ul>
    })

    return (
        <>
            <p className="second_heading">Your Transactions:</p>
            <div className="conatiner_of_list_of_transactions">{content}</div>
        </>
    );
}
