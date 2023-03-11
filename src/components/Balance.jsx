import { useSelector } from "react-redux";
import numberWithCommas from "../utils/makeCurrency";

export default function Balance() {
    const { transactions } = useSelector(state => state.transactions)

    const calculateTotal = () => {
        let balance = 0;
        transactions.forEach(transaction => {
            const { type, amount } = transaction;
            if (type === 'income') {
                balance += Number(amount);
            } else {
                balance -= Number(amount);
            }
        })
        return balance
    }

    return (
        <div className="top_card">
            <p>Your Current Balance</p>
            <h3>
                <span>৳ </span>
                <span>{calculateTotal().toLocaleString()}</span>
            </h3>
        </div>
    );
}
