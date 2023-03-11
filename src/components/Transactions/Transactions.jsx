import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../features/transactions/transactionSlice";
import Transaction from "./Transaction";

export default function Transactions() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTransactions())
    }, [])
    const { transactions, isLoading, isError, error } = useSelector(state => state.transactions)
    
    let content = null;
    if (isLoading) content = "Loading..."
    if (!isLoading && isError) content = <p style={{ color: 'red', textAlign: 'center' }}>There is an error while loading data.</p>
    if (!isLoading && !isError && transactions.length < 1) content = <p style={{textAlign: 'center', color: 'orangered'}}>No data found.</p>
    if (!isLoading && !isError ) content = transactions?.map(item => <Transaction transaction={item} key={item.id} />)

    return (
        <div style={{border: '1px solid lightgray', padding: '12px', borderRadius: '10px'}} >
            <p style={{ textAlign: 'center', }} className="second_heading">Your Transactions:</p>
            <div className="conatiner_of_list_of_transactions">
                <ul> {content}</ul>
            </div>
        </div>
    );
}
