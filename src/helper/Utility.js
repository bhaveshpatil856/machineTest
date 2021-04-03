export const addTaskUtility = (oldstate,nextAction) => {
    
    try {
    console.log(oldstate);
    console.log(nextAction);

    const existingItem = oldstate.find(data => data.id === nextAction.id);
    console.log(existingItem);
    
    if(existingItem){
        alert("ID already Present.. Retry with Another One");
        return [...oldstate];
    }
    else{
        return [...oldstate,{...nextAction}];
    }
        
} catch (error) {
        console.log(error);
        return error; 
    }
};