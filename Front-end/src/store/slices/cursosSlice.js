import {createSlice} from "@reduxjs/toolkit"

const initialState = []

export const cursosSlice = createSlice({
    name: "cursos",
    initialState,
    reducers: {
        setCursoById(state, {payload}) {
            state.splice(0,1,payload)
        },
    }
})

export const {setCursoById} = cursosSlice.actions;
export default cursosSlice.reducer;