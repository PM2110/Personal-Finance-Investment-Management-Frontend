import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import TransactionAPIManager from '../api/apiManager/TransactionAPIManager';

interface TransactionState {
    isLoading: boolean;
    isError: boolean;
    data: TransactionData[];
}

export interface TransactionData {
    transactionID: string,
    userID: number,
    balanceID: number,
    currency: string,
    fees: number,
    from: string,
    to: string,
    category: string,
    amount: number,
    date: string,
}

const initialState: TransactionState = {
    isLoading: false,
    isError: false,
    data: [],
};

export const setTransactions = createAsyncThunk('setTransactions', async (userName: string) => {
        const response = await TransactionAPIManager.getAllTransaction(userName);
        return response.data.transactions;
    }
);

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: { 
        addTransactionState: (state, action: PayloadAction<TransactionData>) => {
            state.data?.push(action.payload);
        },
        updateTransactionState: (state, action: PayloadAction<TransactionData>) => {
            state.data = state.data?.map((transaction: TransactionData) => {
                if(transaction.transactionID === action.payload.transactionID){
                    return {...transaction, ...action.payload};
                }
                return transaction;
            });
        },
        deleteTransactionState: (state, action: PayloadAction<string>) => {
            if(state.data.length === 1){
                state.data = [];
            }
            else {
                state.data = state.data?.filter((transaction) => transaction.transactionID !== action.payload);
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(setTransactions.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(setTransactions.fulfilled, (state, action: PayloadAction<TransactionData[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(setTransactions.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export const { addTransactionState, updateTransactionState, deleteTransactionState } = transactionSlice.actions;
export default transactionSlice.reducer;

export const addTransaction = (data: TransactionData) => async (dispatch) => {
    try {
        const response = await TransactionAPIManager.addTransaction(data);
        if (response.status === 201) {
            dispatch(addTransactionState(response.data.transaction));
        }
        return response;
    } catch (error) {
        console.log("Error while adding transaction ", error);
    }
}

export const updateTransaction = (transactionID: string, data: TransactionData) => async (dispatch) => {
    try {
        const response = await TransactionAPIManager.updateTransaction(transactionID, data);
        dispatch(updateTransactionState(response.data.user));
    } catch (error) {
        console.log("Error while updating transaction ", error);
    }
}

export const deleteTransaction = (transactionID: string) => async (dispatch) => {
    try {
        await TransactionAPIManager.deleteTransaction(transactionID);
        dispatch(deleteTransactionState(transactionID));
    } catch (error) {
        console.log("Error while deleting transaction ", error)
    }
}