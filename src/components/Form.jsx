
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTransaction } from '../features/transactions/transactionSlice';

export default function Form() {
    const [data, setData] = useState({ name: "", type: "", amount: 0 })
    const dispatch = useDispatch();
    const { transactions } = useSelector(state => state.transactions)
    const maxId = transactions.reduce((acc, cur) => Math.max(acc, cur.id), 0)

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(createTransaction({ id: maxId + 1, ...data, amount: Number(data.amount) }))
    }


    return (
        <div className="form">
            <h3>Add new transaction</h3>
            <form onSubmit={e => handleSubmit(e)}>

                <div className="form-group">
                    <label htmlFor="transaction_name">Name</label>
                    <input
                        type="text"
                        name="transaction_name"
                        id="transaction_name"
                        placeholder="Transaction Name"
                        required
                        value={data.name}
                        onChange={e => setData({ ...data, name: e.target.value })}
                    />
                </div>

                <div className="form-group radio">
                    <label >Type</label>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="income"
                            name="transaction_type"
                            id="income"
                            checked={data.type === "income"}
                            onChange={e => setData({ ...data, type: "income" })}
                        />
                        <label htmlFor="income">Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="transaction_type"
                            id="expense"
                            placeholder="Expense"

                            checked={data.type === "expense"}
                            onChange={e => setData({ ...data, type: "expense" })}
                        />
                        <label htmlFor="expense">Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="transaction_amount">Amount</label>
                    <input
                        type="number"
                        placeholder="3000"
                        name="transaction_amount"
                        id="transaction_amount"
                        
                        // value={data.amount}
                        onChange={e => setData({ ...data, amount: e.target.value })}
                    />
                </div>

                <button className="btn">Add Transaction</button>

            </form>
            <button className="btn cancel_edit">Cancel Edit</button>
        </div>
    );
}
