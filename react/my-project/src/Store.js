import { configureStore } from '@reduxjs/toolkit'
import Userslice from './Userslice'

export default configureStore({
  reducer: {
    user:Userslice
    
  },
})