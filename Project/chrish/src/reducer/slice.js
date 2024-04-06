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
        Logindata:{
            email:"",
            password:""
        },
    },
    reducers: {
        RegisterDetails: (state, action) => {
            state.Registerdata = action.payload;
        },
        LoginDetails:(state,action)=>{
            state.Logindata=action.payload;
        },
    }
});

export const { RegisterDetails,LoginDetails } = userSlice.actions;
export default userSlice.reducer;
