import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import FamilyMemberAPIManager from '../api/apiManager/FamilyMemberAPIManager';

export interface FamilyMemberState {
    isLoading: boolean;
    isError: boolean;
    data: FamilyMemberData[];
}

export interface FamilyMemberData {
    memberID: number,
    familyID: number,
    user1: number,
    relationType: string,
    user2: number,
    limit: number,
    spent: number,
}

export interface FamilyAddData {
    user1: number,
    relationType: string,
    userEmail: string,
    familyID: number
}

const initialState: FamilyMemberState = {
    isLoading: false,
    isError: false,
    data: [],
};

export const setFamilyMember = createAsyncThunk('setFamilyMember', async (familyID: number) => {
        const response = await FamilyMemberAPIManager.getAllFamilyMember(familyID);
        return response.data.familyMembers;
    }
);

const familyMemberSlice = createSlice({
    name: 'familyMember',
    initialState,
    reducers: { 
        addFamilyMemberState: (state, action: PayloadAction<FamilyMemberData>) => {
            state.data?.push(action.payload);
        },
        updateFamilyMemberState: (state, action: PayloadAction<FamilyMemberData>) => {
            state.data = state.data?.map((familyMember: FamilyMemberData) => {
                if(familyMember.memberID === action.payload.memberID){
                    return {...familyMember, ...action.payload};
                }
                return familyMember;
            });
        },
        deleteFamilyMemberState: (state, action: PayloadAction<number>) => {
            if(state.data.length === 1){
                state.data = [];
            }
            else {
                state.data = state.data?.filter((familyMember) => familyMember.memberID === action.payload);
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(setFamilyMember.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(setFamilyMember.fulfilled, (state, action: PayloadAction<FamilyMemberData[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(setFamilyMember.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export const { addFamilyMemberState, updateFamilyMemberState, deleteFamilyMemberState } = familyMemberSlice.actions;
export default familyMemberSlice.reducer;

export const addFamilyMember = (data: FamilyAddData) => async (dispatch) => {
    try {
        const response = await FamilyMemberAPIManager.addFamilyMember(data);
        if (response.status === 201) {
            dispatch(addFamilyMemberState(response.data.familyMember));
        }
        return response;
    } catch (error) {
        console.log("Error while adding family member ", error);
    }
}

export const updateFamilyMember = (memberID: number, data: FamilyMemberData) => async (dispatch) => {
    try {
        const response = await FamilyMemberAPIManager.updateFamilyMember(memberID, data);
        dispatch(updateFamilyMemberState(response.data.familyMember));
    } catch (error) {
        console.log("Error while updating family member ", error);
    }
}

export const deleteFamilyMember = (memberID: number) => async (dispatch) => {
    try {
        await FamilyMemberAPIManager.deleteFamilyMember(memberID);
        dispatch(deleteFamilyMemberState(memberID));
    } catch (error) {
        console.log("Error while deleting family member ", error);
    }
}