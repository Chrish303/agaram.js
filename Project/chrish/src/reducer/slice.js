import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        Registerdata: {
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            pincode: ""
        },
    },
    reducers: {
        RegisterDetails: (state, action) => {
            state.Registerdata = action.payload;
        }
    }
});

export const { RegisterDetails } = userSlice.actions;
export default userSlice.reducer;
