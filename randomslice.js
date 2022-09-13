import {createSlice} from '@reduxjs/toolkit'

export const randomslice=createSlice({
    name:"random",
    initialState:{
        value:0,
        overs:0,
        wickets:0
    },
    reducers:{
        setscore:(state,action)=>{
            state.value=state.value+action.payload
            console.log(state.value,"state.value")
        },
        setwickets:(state,action)=>{
            state.wickets=state.wickets+action.payload
            console.log(state.wickets,"state.wickets")
        },
        setOvers:(state,action)=>{
            state.overs=action.payload
        }


    }

})
export const {setwickets,setscore,setOvers}=randomslice.actions
export default randomslice.reducer