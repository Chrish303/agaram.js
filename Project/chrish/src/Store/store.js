import { configureStore } from '@reduxjs/toolkit'
import userReducer  from '../reducer/slice'

export default configureStore({
  reducer:{
    user:userReducer,
  }
} 
)