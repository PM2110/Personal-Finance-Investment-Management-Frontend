import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import UserPreferenceAPIManager from '../api/apiManager/UserPreferenceAPIManager';

interface UserPreferenceState {
    isLoading: boolean;
    isError: boolean;
    data: UserPreferenceData | null;
}

export interface UserPreferenceData {
    userID: number,
    language: string,
    theme: string,
    generalNotifications: string,
    notificationMethods: string,
    currency: string,
    timeZone: string,
    dateFormat: string,
}

const initialState: UserPreferenceState = {
    isLoading: false,
    isError: false,
    data: null,
};

export const setUserPreference = createAsyncThunk('setUserPreference', async (userPreferenceData : UserPreferenceData | null) => {
        return userPreferenceData as UserPreferenceData;
    }
);

const userPreferenceSlice = createSlice({
    name: 'userPreference',
    initialState,
    reducers: {  },
    extraReducers: (builder) => {
        builder
            .addCase(setUserPreference.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(setUserPreference.fulfilled, (state, action: PayloadAction<UserPreferenceData>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(setUserPreference.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export default userPreferenceSlice.reducer;

export const fetchUserPreference = (userID: number) => async (dispatch) => {
    try {
        const response = await UserPreferenceAPIManager.getUserPreference(userID);
        dispatch(setUserPreference(response.data.userPreference));
    } catch (error) {
        console.log("Error while fetching user preference ", error);
    }
}

export const addUserPreference = (data: UserPreferenceData) => async (dispatch) => {
    try {
        const response = await UserPreferenceAPIManager.addUserPreference(data);
        if (response.status === 201) {
            dispatch(setUserPreference(response.data.userPreference));
        }
        return response;
    } catch (error) {
        console.log("Error while creating user preference ", error);
    }
}

export const updateUserPreference = (userID: number, data: UserPreferenceData) => async (dispatch) => {
    try {
        const response = await UserPreferenceAPIManager.updateUserPreference(userID, data);
        dispatch(setUserPreference(response.data.userPreference));
    } catch (error) {
        console.log("Error while updating user preference ", error);
    }
}

export const deleteUserPreference = (userID: number) => async (dispatch) => {
    try {
        await UserPreferenceAPIManager.deleteUserPreference(userID);
        dispatch(setUserPreference(null));
    } catch (error) {
        console.log("Error while deleting user preference ", error);
    }
}