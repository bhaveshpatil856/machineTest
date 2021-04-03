import { showTasks } from '../api/taskFetch';
import { history } from '../history';
import { ADD_TASK, FETCH_ALL_TASKS,REMOVE_TASK } from './taskType';

export const getTaskAction = () =>{
    return async(dispatch)=>{
        try {
            let response= await showTasks();
            // console.log(response);
            dispatch({type:FETCH_ALL_TASKS, payload: response.data})
        }
        catch(e){
            console.log(e);            
        }
    }
};

export const removeTaskAction = (data) =>{
    return async(dispatch)=>{
        try {
            setTimeout(() => {
            dispatch({type:REMOVE_TASK, payload: data});
            },1000);
        }
        catch(e){
            console.log(e);            
        }
    }
};

export const addTaskAction = (data) =>{
    return async(dispatch)=>{
        try {
            
            dispatch({type:ADD_TASK, payload: data});
            history.push('/task');
            window.location.reload();
        }
        catch(e){
            console.log(e);            
        }
    }
};
