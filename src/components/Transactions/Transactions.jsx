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
    if (!isLoading && !isError && transactions.length < 1) content = <p style={{textAlign: 'center', color: 'orangered'}}>No data found.</p>
    if (!isLoading && !isError && transactions.length > 0) content = transactions.map(item => <Transaction transaction={item} key={item.id} />)

    return (
        <>
            <p className="second_heading">Your Transactions:</p>
            <div className="conatiner_of_list_of_transactions">
                <ul> {content}</ul>
            </div>
        </>
    );
}
