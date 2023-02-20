import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    filteredCursos: [],
}

export const cursosSlice = createSlice({
    name: "cursos",
    filteredCursos: [],
    initialState,
    reducers: {
        setCursoById(state, {payload}) {
            state.splice(0,1,payload)
        },
        getFilteredCursos:(state, action) =>{
            state.filteredCursos = action.payload;
        }
    }
})

export const {setCursoById, getFilteredCursos} = cursosSlice.actions;
export default cursosSlice.reducer;