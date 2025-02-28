import { createSlice , nanoid  } from "@reduxjs/toolkit";


const initalState = {
    todos:[{ id: 1 , text:"Hello World"}]
}


export const todoSlice = createSlice({
    name : "todo",
    initialState: initalState,
    reducers:{
        // property : fun() and func get two params state and action 
        addTodo : (state , action) => {
            const todo = {
                id : nanoid(),
                text:action.payload.text
            }

             state.todos.push(todo) // this seems like a mutation but RTK usese immerJS . which allows  "mutations," but actually produces immutable updates
        },

        removeTodo : (state , action) => {
            state.todos  =  state.todos.filter(todo => action.payload.id !== todo.id )
            
        },

        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
            todo.text = text;
            }
        }
    }
})

export const { addTodo , removeTodo , updateTodo } = todoSlice.actions // exporting all the actions 

export default todoSlice.reducer  // giving awaness to our store about the reducer  as it will only allow updation from this reducer
