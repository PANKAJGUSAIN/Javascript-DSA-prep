import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    todo: [],
    Comments: ["verynice"],
    status: "pending",
    users: [],
}

export const fetchNewUsers = createAsyncThunk("todo/fetchNewUsers", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
})

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {

        //reducers
        addTodo: (state, action) => {
            const payload = action.payload.text
            state.todo.push(payload)
        },
        removeTodo: (state, action) => {
        }

    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchNewUsers.pending, (state, action) => {
            state.status = "pending",
            state.users = []
        })
        .addCase(fetchNewUsers.fulfilled , (state , action)=>{
            state.status = "success"
            state.users = action.payload
        })
        .addCase(fetchNewUsers.rejected, (state, action) => {
            state.status = "rejected";
            state.users = []
          });

    }
})

export const { addTodo , removeTodo } = todoSlice.reducer;
export default todoSlice.reducer;
