import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import FamilyAPIManager from '../api/apiManager/FamilyAPIManager';

export interface FamilyState {
    isLoading: boolean;
    isError: boolean;
    data: FamilyData[];
}

export interface FamilyData {
    familyName: string,
    familyMembers: string,
    familyID: number,
    createdByID: number,
    createdAt: Date,
}

export interface FamilyMember {
    familyID: number,
    relationType: string,
    relationWith: string,
}

const initialState: FamilyState = {
    isLoading: false,
    isError: false,
    data: [],
};

export const setFamily = createAsyncThunk('setFamily', async (userID: number) => {
        const response = await FamilyAPIManager.getAllFamily(userID);
        return response.data.families;
    }
);

const familySlice = createSlice({
    name: 'family',
    initialState,
    reducers: { 
        addFamilyState: (state, action: PayloadAction<FamilyData>) => {
            state.data?.push(action.payload);
        },
        updateFamilyState: (state, action: PayloadAction<FamilyData>) => {
            state.data = state.data?.map((family: FamilyData) => {
                if(family.familyID === action.payload.familyID){
                    return {...family, ...action.payload};
                }
                return family;
            });
        },
        deleteFamilyState: (state, action: PayloadAction<number>) => {
            if(state.data.length === 1){
                state.data = [];
            }
            else {
                state.data = state.data?.filter((family) => family.familyID === action.payload);
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(setFamily.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(setFamily.fulfilled, (state, action: PayloadAction<FamilyData[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(setFamily.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export const { addFamilyState, updateFamilyState, deleteFamilyState } = familySlice.actions;
export default familySlice.reducer;

export const addFamily = (data: FamilyData) => async (dispatch) => {
    try {
        const response = await FamilyAPIManager.addFamily(data);
        if (response.status === 201) {
            dispatch(addFamilyState(response.data.family));
        }
        return response;
    } catch (error) {
        console.log("Error while adding family ", error);
    }
}

export const addMember = (data: { memberEmail: string, familyMember: FamilyMember }) => async (dispatch) => {
    try {
        const response = await FamilyAPIManager.addFamilyMember(data);
        if(response.data.family){
            dispatch(updateFamilyState(response.data.family));
        }
        return response;
    } catch (error) {
        console.log("Error while adding new member ", error);
    }
}

export const updateFamily = (familyID: number, data: FamilyData) => async (dispatch) => {
    try {
        const response = await FamilyAPIManager.updateFamily(familyID, data);
        dispatch(updateFamilyState(response.data.user));
    } catch (error) {
        console.log("Error while updating family ", error);
    }
}

export const deleteFamily = (familyID: number) => async (dispatch) => {
    try {
        await FamilyAPIManager.deleteFamily(familyID);
        dispatch(deleteFamilyState(familyID));
    } catch (error) {
        console.log("Error while deleting family ", error)
    }
}