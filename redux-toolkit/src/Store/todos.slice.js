import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";

const todoAdapter = createEntityAdapter({
  selectId: (todo) => todo.cid,
});

export const TODOS_REDUCER_KEY = "todos";

export const loadTodos = createAsyncThunk("todos/loadTodos", (payload) =>
  axios.get(payload).then((response) => response.data)
);

const { reducer: TodosReducer, actions } = createSlice({
  name: TODOS_REDUCER_KEY,
  initialState: todoAdapter.getInitialState(),
  reducers: {
    addTodo: {
      reducer: todoAdapter.addOne,
      prepare: (todo) => {
        return {
          payload: { cid: Math.random(), ...todo },
        };
      },
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadTodos.fulfilled, todoAdapter.addMany);
  },
});

const { selectAll } = todoAdapter.getSelectors();

export const selectTodos = createSelector(
  (state) => state[TODOS_REDUCER_KEY],
  selectAll
);

export const { addTodo } = actions;

export default TodosReducer;
