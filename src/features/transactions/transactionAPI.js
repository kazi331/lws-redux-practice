import axios from "../../utils/axios"

export const addTransaction = async (data) => {
    const res = await axios.post("/transactions", data)
    return await res.data;
}

export const editTransaction = async (id, data) => {
    const res = await axios.put(`/transactions/${id}`, data)
    return await res.data;
}

export const removeTransaction = async (id) => {
    const res = await axios.delete(`/transactions/${id}`)
    return await res.data;
}

export const viewTransactions = async () => {
    const res = await axios.get(`/transactions`)
    return await res.data;
}