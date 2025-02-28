import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import AccountAPIManager from "../api/apiManager/AccountAPIManager";

interface AccountState {
    isLoading: boolean;
    isError: boolean;
    data: AccountData[];
}

export interface AccountData {
    userID: number,
    accountID: number,
    cvv: number,
    accountNumber: string,
    accountHolder: string,
    accountType: string,
    balance: number,
    currency: string,
}

const initialState: AccountState = {
    isLoading: false,
    isError: false,
    data: [],
};

export const setAccounts = createAsyncThunk("setAccounts", async (accountData: AccountData[]) => {
        return accountData;
    }
);

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        addAccountState: (state, action: PayloadAction<AccountData>) => {
            state.data?.push(action.payload);
        },
        updateAccountState: (state, action: PayloadAction<AccountData>) => {
            state.data = state.data?.map((account: AccountData) => {
                if(account.accountID === action.payload.accountID){
                    return {...account, ...action.payload};
                }
                return account;
            });
        },
        deleteAccountState: (state, action: PayloadAction<number>) => {
            if(state.data.length === 1){
                state.data = [];
            }
            else {
                state.data = state.data?.filter((account) => account.accountID !== action.payload);
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(setAccounts.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(setAccounts.fulfilled, (state, action: PayloadAction<AccountData[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(setAccounts.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export const { addAccountState, updateAccountState, deleteAccountState } = accountSlice.actions;
export default accountSlice.reducer;

export const getAccount = (accountID: number) => async () => {
    try {
        const response = await AccountAPIManager.getAccount(accountID);
        return response.data.account;
    } catch (error) {
        console.log("Error while fetching account ", error);
    }
}

export const getAccounts = (userID: number) => async () => {
    try {
        const response = await AccountAPIManager.getAllAccounts(userID);
        return response.data.accounts ? response.data.accounts : null
    } catch (error) {
        console.log("Error while fetching other user's accounts ", error);
    }
}

export const fetchAccount = (userID: number) => async (dispatch) => {
    try {
        const response = await AccountAPIManager.getAllAccounts(userID);
        dispatch(setAccounts(response.data.accounts));
    } catch (error) {
        console.log("Error while fetching accounts ", error);
    }
};

export const addAccount = (data: AccountData) => async (dispatch) => {
        try {
            // console.log(data);
            const response = await AccountAPIManager.addAccount(data);
            // console.log(response.data.account);
            if (response.status === 201) {
                dispatch(addAccountState(response.data.account));
            }
            return response;
        } catch (error) {
            console.log("Error while adding account ", error);
        }
    };

export const updateAccount = (accountID: number, data: AccountData) => async (dispatch) => {
        try {
            const response = await AccountAPIManager.updateAccount(accountID, data);
            if(response.data.account){
                dispatch(updateAccountState(response.data.account));
            }
            return response;
        } catch (error) {
            console.log("Error while updating account ", error);
        }
    };

export const deleteAccount = (accountID: number) => async (dispatch) => {
    try {
        await AccountAPIManager.deleteAccount(accountID);
        dispatch(deleteAccountState(accountID));
    } catch (error) {
        console.log("Error while deleting account ", error);
    }
};