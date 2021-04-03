import { ADD_TASK, FETCH_ALL_TASKS, REMOVE_TASK } from "../action/taskType";
import { addTaskUtility } from "../helper/Utility";

const INITIAL_STATE_TASK = {
    storedata:[]
}

export const getTaskReducer = (state=INITIAL_STATE_TASK, action) => {
    switch(action.type){
        case FETCH_ALL_TASKS:
            return {storedata: action.payload};
        case REMOVE_TASK:
            // console.log(action.payload); 
            return {...state, storedata:state.storedata.filter(item => item.id !== action.payload.id)}
        case ADD_TASK:
            // console.log(action.payload); 
            return {...state,storedata:addTaskUtility(state.storedata,action.payload)};
        default:
            return state;
    }
}