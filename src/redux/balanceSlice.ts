import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import BalanceAPIManager from "../api/apiManager/BalanceAPIManager";

interface BalanceState {
    isLoading: boolean;
    isError: boolean;
    data: BalanceData[];
}

export interface BalanceData {
    userID: number,
    balanceID: number,
    balanceName: string,
    income: number,
    expense: number,
    currency: string,
}

const initialState: BalanceState = {
    isLoading: false,
    isError: false,
    data: [],
};

export const setBalance = createAsyncThunk("setBalance", async (balanceData: BalanceData[]) => {
        return balanceData;
    }
);

const balanceSlice = createSlice({
    name: "balance",
    initialState,
    reducers: {
        addBalanceState: (state, action: PayloadAction<BalanceData>) => {
            state.data?.push(action.payload);
        },
        updateBalanceState: (state, action: PayloadAction<BalanceData>) => {
            state.data = state.data?.map((balance: BalanceData) => {
                if(balance.balanceID === action.payload.balanceID){
                    return {...balance, ...action.payload};
                }
                return balance;
            });
        },
        deleteBalanceState: (state, action: PayloadAction<number>) => {
            if(state.data.length === 1){
                state.data = [];
            }
            else {
                state.data = state.data?.filter((balance) => balance.balanceID === action.payload);
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(setBalance.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(setBalance.fulfilled, (state, action: PayloadAction<BalanceData[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(setBalance.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export const { addBalanceState, updateBalanceState, deleteBalanceState } = balanceSlice.actions;
export default balanceSlice.reducer;

export const fetchBalance = (userID: number) => async (dispatch) => {
    try {
        const response = await BalanceAPIManager.getAllBalance(userID);
        dispatch(setBalance(response.data.balance));
    } catch (error) {
        console.log("Error while fetching balance ", error);
    }
};

export const addBalance = (data: BalanceData) => async (dispatch) => {
        try {
            // console.log(data);
            const response = await BalanceAPIManager.addBalance(data);
            // console.log(response.data.account);
            if (response.status === 201) {
                dispatch(addBalanceState(response.data.balance));
            }
            return response;
        } catch (error) {
            console.log("Error while adding balance ", error);
        }
    };

export const updateBalance = (balanceID: number, data: BalanceData) => async (dispatch) => {
        try {
            const response = await BalanceAPIManager.updateBalance(balanceID, data);
            dispatch(updateBalanceState(response.data.balance));
        } catch (error) {
            console.log("Error while updating balance ", error);
        }
    };

export const deleteAccount = (balanceID: number) => async (dispatch) => {
    try {
        await BalanceAPIManager.deleteBalance(balanceID);
        dispatch(deleteBalanceState(balanceID));
    } catch (error) {
        console.log("Error while deleting balance ", error);
    }
};