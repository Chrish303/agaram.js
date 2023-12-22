import { createSlice } from '@reduxjs/toolkit'

const   initialState={LoggindData:{

}}
 const  Userslice = createSlice({
  name: 'user',
  initialState,

  reducers: {
   
    Update:(state,action)=>{
      state.LoggindData=action.payload
    },
   Logout:(state)=>{
    state.value={}
   }
  },
})


export const { Update,Logout} = Userslice.actions

export default Userslice.reducer