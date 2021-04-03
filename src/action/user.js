import { history } from "../history";

export const LoginAction = (data) =>{
    return async(dispatch)=>{
        try {
            localStorage.setItem("currentUser",JSON.stringify(data));
//            alert("Login Successfull.......");
            history.push('/home');
            window.location.reload();
        }
        catch(e){
            console.log(e);            
        }
    }
};