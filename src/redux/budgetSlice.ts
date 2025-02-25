import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import BudgetAPIManager from "../api/apiManager/BudgetAPIManager";

interface BudgetState {
    isLoading: boolean;
    isError: boolean;
    data: BudgetData[];
}

export interface BudgetData {
    budgetID: number,
    accountID: number,
    currency: string,
    userID: number,
    budgetCategory: string,
    limit: number,
    spent: number,
    expense: number,
}

const initialState: BudgetState = {
    isLoading: false,
    isError: false,
    data: [],
};

export const setBudget = createAsyncThunk("setBudget", async (budgetData: BudgetData[]) => {
        return budgetData;
    }
);

const budgetSlice = createSlice({
    name: "budget",
    initialState,
    reducers: {
        addBudgetState: (state, action: PayloadAction<BudgetData>) => {
            state.data?.push(action.payload);
        },
        updateBudgetState: (state, action: PayloadAction<BudgetData>) => {
            state.data = state.data?.map((budget: BudgetData) => {
                if(budget.budgetID === action.payload.budgetID){
                    return {...budget, ...action.payload};
                }
                return budget;
            });
        },
        deleteBudgetState: (state, action: PayloadAction<number>) => {
            if(state.data.length === 1){
                state.data = [];
            }
            else {
                state.data = state.data?.filter((budget) => budget.budgetID === action.payload);
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(setBudget.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(setBudget.fulfilled, (state, action: PayloadAction<BudgetData[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(setBudget.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export const { addBudgetState, updateBudgetState, deleteBudgetState } = budgetSlice.actions;
export default budgetSlice.reducer;

export const fetchBudget = (userID: number) => async (dispatch) => {
    try {
        const response = await BudgetAPIManager.getAllBudget(userID);
        dispatch(setBudget(response.data.budget));
    } catch (error) {
        console.log("Error while fetching budget ", error);
    }
};

export const addBudget = (data: BudgetData) => async (dispatch) => {
        try {
            const response = await BudgetAPIManager.addBudget(data);
            if (response.status === 201) {
                dispatch(addBudgetState(response.data.budget));
            }
            return response;
        } catch (error) {
            console.log("Error while adding budget ", error);
        }
    };

export const updateBudget = (budgetID: number, data: BudgetData) => async (dispatch) => {
        try {
            const response = await BudgetAPIManager.updateBudget(budgetID, data);
            dispatch(updateBudgetState(response.data.budget));
        } catch (error) {
            console.log("Error while updating budget ", error);
        }
    };

export const deleteAccount = (budgetID: number) => async (dispatch) => {
    try {
        await BudgetAPIManager.deleteBudget(budgetID);
        dispatch(deleteBudgetState(budgetID));
    } catch (error) {
        console.log("Error while deleting budget ", error);
    }
};