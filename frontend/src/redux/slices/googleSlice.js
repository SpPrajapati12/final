import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    guser : []
}


const GSlice = createSlice({
    name : "g-user",
    initialState,
    reducers : {
        getUserData(state,action) {
            state.guser = action.payload
        }
    }
})

export const {getUserData} = GSlice.actions


export default GSlice.reducer