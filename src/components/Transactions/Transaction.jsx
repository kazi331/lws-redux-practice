import { useDispatch } from 'react-redux'
import deleteImage from "../../assets/images/delete.svg";
import editImage from "../../assets/images/edit.svg";
import { deleteTransaction, updateTransaction } from '../../features/transactions/transactionSlice';

export default function Transaction({ transaction }) {
    const { amount, id, name, type } = transaction || {}
    const dispatch = useDispatch();
    return (
        <li className="transaction income">
            <p>{name}</p>
            <div className="right">
                <p>৳ {amount}</p>
                <button onClick={() => dispatch(updateTransaction(id))} className="link">
                    <img alt="Edit" className="icon" src={editImage} />
                </button>
                <button onClick={() => dispatch(deleteTransaction(id))} className="link">
                    <img alt="Delete" className="icon" src={deleteImage} />
                </button>
            </div>
        </li>
    );
}
