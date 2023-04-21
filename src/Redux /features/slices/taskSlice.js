import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload)
        },
        editTask: (state, action) => {
            return state.map(task => {
                return task.id == action.payload.id
                    ? { ...task, name: action.payload.newName }
                    : task
            })
        }
    }
})

export default taskSlice.reducer
export const { addTask, deleteTask, editTask } = taskSlice.actions