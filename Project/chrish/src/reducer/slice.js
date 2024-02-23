import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        Register:{
            name:"",
            email:"",
            password:""
        }
    }


})

export const { Register } = userSlice.actions
export default userSlice.reducer;