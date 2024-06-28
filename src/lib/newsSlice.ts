import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import type { RootState } from "./store";

/* eslint-disable no-param-reassign */

// export const addNewUserAddress = createAsyncThunk(
//     "user/addNewProfileAddress",
//     async (data: AddNewAddressFormRequest) => {
//         const response = await addNewUserAddressApi(data);
//         return response;
//     }
// );

interface InitialState {}

const initialState: InitialState = {};

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginUser.fulfilled, (state) => {
    //             state.isAuth = true;
    //             state.isAuthChecked = true;
    //         })
    //         .addCase(signInUser.fulfilled, (state, action) => {
    //             state.user = action.payload.customer;
    //         })
    //         .addCase(loginUser.rejected, (state, action) => {
    //             state.error = action.error.message;
    //         })
    //         .addCase(getUser.fulfilled, (state, action) => {
    //             state.user = action.payload!;
    //             state.isAuth = true;
    //             state.isAuthChecked = true;
    //         })
    //         .addCase(getUser.rejected, (state) => {
    //             state.isAuthChecked = true;
    //         })
    //         .addCase(getAnonymousToken.fulfilled, (state) => {
    //             state.isAuth = false;
    //             state.isAuthChecked = true;
    //         })
    //         .addCase(signUpUser.fulfilled, (state, action) => {
    //             state.user = action.payload.customer;
    //             state.isAuth = true;
    //             state.isAuthChecked = true;
    //             state.registrationMessage = StateMessage.Registered;
    //         })
    //         .addCase(signUpUser.rejected, (state, action) => {
    //             state.error = action.error.message;
    //         })
    //         .addCase(updateUserPassword.fulfilled, (state, action) => {
    //             state.user = action.payload!;
    //             state.isAuth = true;
    //             state.isAuthChecked = true;
    //             state.updateUserMessage = StateMessage.UpdatedProfilePassword;
    //         })
    //         .addCase(updateUserPassword.rejected, (state, action) => {
    //             state.error = action.error.message;
    //         })
    //         .addCase(updateUserProfileData.fulfilled, (state, action) => {
    //             state.user = action.payload!;
    //             state.isAuth = true;
    //             state.isAuthChecked = true;
    //             state.updateUserMessage = StateMessage.UpdatedProfileData;
    //         })
    //         .addCase(updateUserProfileData.rejected, (state, action) => {
    //             state.error = action.error.message;
    //         })
    //         .addCase(updateUserAddress.fulfilled, (state, action) => {
    //             state.user = action.payload!;
    //             state.isAuth = true;
    //             state.isAuthChecked = true;
    //             state.updateUserMessage = StateMessage.UpdatedProfileAddress;
    //         })
    //         .addCase(updateUserAddress.rejected, (state, action) => {
    //             state.error = action.error.message;
    //         })
    //         .addCase(deleteUserAddress.fulfilled, (state, action) => {
    //             state.user = action.payload!;
    //             state.isAuth = true;
    //             state.isAuthChecked = true;
    //             state.updateUserMessage = StateMessage.DeletedProfileAddress;
    //         })
    //         .addCase(deleteUserAddress.rejected, (state, action) => {
    //             state.error = action.error.message;
    //         })
    //         .addCase(addNewUserAddress.fulfilled, (state, action) => {
    //             state.user = action.payload!;
    //             state.isAuth = true;
    //             state.isAuthChecked = true;
    //             state.updateUserMessage = StateMessage.AddedProfileAddress;
    //         })
    //         .addCase(addNewUserAddress.rejected, (state, action) => {
    //             state.error = action.error.message;
    //         });
    // },
});

export default newsSlice.reducer;

/* eslint-enable no-param-reassign */
