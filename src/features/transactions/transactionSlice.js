import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addTransaction, editTransaction, removeTransaction, viewTransactions } from "./transactionAPI"




// async thunk functions
export const createTransaction = createAsyncThunk("tracker/addTransaction", async (data) => {
    const res = await addTransaction(data);
    return await res;
})

export const updateTransaction = createAsyncThunk("tracker/updateTransaction", async ({ id, data }) => {
    const res = await editTransaction(id, data);
    return await res;
})


export const deleteTransaction = createAsyncThunk("tracker/removeTransaction", async (id) => {
    const res = await removeTransaction(id);
    return await res;
})


export const getTransactions = createAsyncThunk("tracker/getTransaction", async () => {
    const res = await viewTransactions();
    return await res;
})


// initial state
const initialState = {
    transactions: [],
    isLoading: false,
    isError: false,
    error: "",
    editing: {},
}


// slice 

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        enableEditiong: (state, action ) =>{
            state.editing = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            // view transactions
            .addCase(getTransactions.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })

            .addCase(getTransactions.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.transactions = payload;
            })
           
            .addCase(getTransactions.rejected, (state, { error }) => {
                state.isLoading = false;
                state.isError = true;
                state.error = error?.message;
            })

            // create transactions
            .addCase(createTransaction.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })

            .addCase(createTransaction.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.transactions.push(payload)
            })
            .addCase(createTransaction.rejected, (state, { error }) => {
                state.isLoading = false;
                state.isError = true;
                state.error = error?.message;
            })

            // update transactions
            .addCase(updateTransaction.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })

            .addCase(updateTransaction.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                // find index 
                const index = state.transactions.findIndex(item => item.id === payload.id)
                state.transactions[index] = payload; // replace that index with current payload
            })
            .addCase(updateTransaction.rejected, (state, { error }) => {
                state.isLoading = false;
                state.isError = true;
                state.error = error?.message;
            })

            // delete transactions
            .addCase(deleteTransaction.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })

            .addCase(deleteTransaction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                
                state.transactions = state.transactions.filter(item => item.id != action.meta.arg)
            })
            .addCase(deleteTransaction.rejected, (state, { error }) => {
                state.isLoading = false;
                state.isError = true;
                state.error = error?.message;
            })


    }
})


export default transactionSlice.reducer;
export const {enableEditiong} = transactionSlice.actions;