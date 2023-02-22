import { configureStore } from '@reduxjs/toolkit'
import TodosReducer, { TODOS_REDUCER_KEY } from './todos.slice'


export default configureStore({
  reducer: {
    [TODOS_REDUCER_KEY]: TodosReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})