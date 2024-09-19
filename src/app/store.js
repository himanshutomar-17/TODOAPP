import { configureStore } from '@reduxjs/toolkit';
import Reducer from '../features/todo/todoSlice';
export const store = configureStore({
      reducer: Reducer
})