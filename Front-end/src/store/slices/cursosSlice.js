import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    filteredCursos: [],
}

export const cursosSlice = createSlice({
    name: "cursos",
    initialState,
    reducers: {
        getFilteredCursos:(state, action) =>{
            state.filteredCursos = action.payload;
        }
    }
})

export const {setCursoById, getFilteredCursos} = cursosSlice.actions;
export default cursosSlice.reducer;