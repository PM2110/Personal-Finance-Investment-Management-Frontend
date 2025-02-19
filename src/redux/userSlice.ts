import { dispatch } from './../../node_modules/react-hot-toast/src/core/store';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import UserAPIManager from '../api/apiManager/UserAPIManager';

interface UserState {
    isLoading: boolean;
    isError: boolean;
    data: UserData | null;
}

export interface UserData {
    userName: string,
    email: string,
    phoneNumber: string,
    address: string,
    profilePic: string
}

const initialState: UserState = {
    isLoading: false,
    isError: false,
    data: null,
};

export const setUser = createAsyncThunk('setUser', async (userData : UserData) => {
        return userData as UserData;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {  },
    extraReducers: (builder) => {
        builder
            .addCase(setUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(setUser.fulfilled, (state, action: PayloadAction<UserData>) => {
                console.log(action.payload);
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(setUser.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export default userSlice.reducer;

export const signUp = (data: {userName: string, email: string, password: string}) => async (dispatch) => {
    try {
        await UserAPIManager.signUp(data);
        dispatch(setUser({ ...data, phoneNumber: '',  address: '', profilePic: ''}));
    } catch (error) {
        console.log("Error while signing up ", error);
    }
}

export const signIn = (data: {email: string, password: string}) => async (dispatch) => {
    try {
        const response = await UserAPIManager.signIn(data);
        dispatch(setUser({ ...data, userName: response.data.user.userName, phoneNumber: '',  address: '', profilePic: ''}));
        return response;
    } catch (error) {
        console.log("Error while signing in ", error)
    }
}