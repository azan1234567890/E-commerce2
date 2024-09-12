import { createSlice } from "@reduxjs/toolkit";
const initialState={
    value: 0,
}
export const calculaterSlice = createSlice({
    name: 'testing',
    initialState,
    reducers:{
    Increment: (state, action)=>{
            const {value1,value2} = action.payload;
            state.value = Number(value1) + Number(value2)
        },
        Decrement: (state ,action)=>{
            const {value1,value2} = action.payload;
            state.value = Number(value1) - Number(value2)
        },
        multiply: (state , action)=>{
            const {value1,value2} = action.payload;
            state.value = Number(value1) * Number(value2)
        },
        divide: (state, action)=>{
            const {value1,value2} = action.payload;
            state.value = Number(value1) / Number(value2)
        }
    }
});
export const { Increment,Decrement, multiply ,divide} = calculaterSlice.actions
export default calculaterSlice.reducer