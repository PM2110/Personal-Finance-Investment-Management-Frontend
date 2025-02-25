import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import UserAPIManager from '../api/apiManager/UserAPIManager';
import NewsAPIManager from '../api/apiManager/NewsAPIManager';

interface UserState {
    isLoading: boolean;
    isError: boolean;
    data: UserData | null;
}

export interface UserData {
    userID: number,
    isVerified: boolean,
    userName: string,
    email: string,
    password: string,
    phoneNumber: string,
    address: string,
    profilePic: string
}

interface EmailData {
    to: string,
    subject: string,
    html: string,
}

const initialState: UserState = {
    isLoading: false,
    isError: false,
    data: null,
};

export const setUser = createAsyncThunk('setUser', async (userData : UserData | null) => {
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

export const fetchNews = (newsType: string) => async() => {
    try {
        const response = await NewsAPIManager.getNews(newsType);
        return response.data.news;
    } catch (error) {
        console.log("Error while fetching news ", error);
    }
}

export const sendEmail = (data: EmailData) => async() => {
    try {
        await UserAPIManager.sendEmail(data);
    } catch (error) {
        console.log("Error while sending email ", error);
    }
}

export const signUp = (data: UserData) => async (dispatch) => {
    try {
        const response = await UserAPIManager.signUp(data);
        if (response.status === 201) {
            dispatch(setUser({ ...response.data.user, phoneNumber: '',  address: '', profilePic: ''}));
        }
        return response;
    } catch (error) {
        console.log("Error while signing up ", error);
    }
}

export const signIn = (data: UserData) => async (dispatch) => {
    try {
        const response = await UserAPIManager.signIn({ ...data, userName: '' });
        if (response.data.user) {
            dispatch(setUser({ ...data, userID: response.data.user.userID, userName: response.data.user.userName, phoneNumber: '',  address: '', profilePic: ''}));
        }
        return response;
    } catch (error) {
        console.log("Error while signing in ", error)
    }
}

export const updateUser = (userID: number, data: UserData) => async (dispatch) => {
    try {
        const response = await UserAPIManager.updateUser(userID, data);
        dispatch(setUser(response.data.user));
    } catch (error) {
        console.log("Error while updating user ", error);
    }
}

export const deleteUser = (userID: number) => async (dispatch) => {
    try {
        await UserAPIManager.deleteUser(userID);
        dispatch(setUser(null));
    } catch (error) {
        console.log("Error while deleting user ", error);
    }
}