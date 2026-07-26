import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        increment:(state,data)=>{
            state.count+=1
        },
        decrement:(state,data)=>{
            state.count-=1
        }
    }
    
})

export const {increment,decrement} = counterSlice.actions

export default counterSlice.reducer