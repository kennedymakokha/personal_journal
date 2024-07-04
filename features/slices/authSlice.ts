import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeData } from "./../../utils/asyncStorage";
const initialState = {

    userInfo: null
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {

            state.userInfo = action.payload;
            storeData('user_id', action.payload._id)
            storeData('token', action.payload.token)
        },

        logout: (state, action) => {
            state.userInfo = null;
            AsyncStorage.removeItem('userInfo')
            AsyncStorage.removeItem('token')
            AsyncStorage.removeItem('user_id')
            console.log("Logo")
        },

    }
})
export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer
