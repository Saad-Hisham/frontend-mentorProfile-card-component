import { createSlice } from '@reduxjs/toolkit';


const counterSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: ["test", "tests" ]
    },
    reducers: {
        test: (state,action) => {
          console.log(state.todos=action.payload)
        },
    }

},
)

export const { test } = counterSlice.actions;

export default counterSlice.reducer;