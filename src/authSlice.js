import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "./axios";

export const login = createAsyncThunk("auth/login", async (params: { email: string; password: string }) => {
    const {data} = await axios.post("/account/login", params);
    return data;
});

const initialState = {
    data: null,
    status: "loading",
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(login.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = "success";
        })
        .addCase(login.rejected, (state, action) => {
            state.status = "failed";
        })
            .addCase(login.pending, (state, action) => {
                state.status = "loading";
            });
    }
})


export default authSlice.reducer;