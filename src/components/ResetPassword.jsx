import React, { Component } from "react";
import { history } from "../history";

class ResetPassword extends Component{

    constructor(props){
        super();
        this.state={
            userPassword:''
        }
    };

    data = JSON.parse(localStorage.getItem('currentUser'))

    HandleFormData = (e) => {
        e.preventDefault();
        let item= {
                 userName: this.data.userName,
                 userPassword: this.state.userPassword
            };
//            console.log(item);

            localStorage.setItem('currentUser',JSON.stringify(item));   

            history.push('/user');
            window.location.reload();
        }

    handleInputData= (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    Logout= () => {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("persist:root");
        history.push('/');
        window.location.reload();
    }

    render(){
        return(
            <form onSubmit={this.HandleFormData}>
            <div className="container" style={{marginTop:'20px'}}>
                <div className="row" style={{margin:"20px"}}>
                    <label> <h4> Username :</h4></label>
                    <div className='col-md-8'>
                        <h3>{this.data.userName}</h3>
                    </div>
                </div>
                <div className="row" style={{margin:"20px"}}>
                    <label> <h4>New PassWord : </h4></label>
                    <div className='col-md-4'>
                    <input className="form-control" 
                               type="password"
                               placeholder="userPassword"
                               name="userPassword"
                               onChange={this.handleInputData}
                        />
                    </div>
                </div>

                <div className="fixed-bottom">
                <div className="row" >
                    <div className="col">
                    <button type="submit"  
                            className="btn btn-outline-secondary" 
                            style={{margin:'10px'}}
                    >
                        Save Password
                    </button>                    
                    
                    <button type="button" 
                            className="btn btn-outline-secondary" 
                            style={{margin:'10px'}} 
                            onClick={this.Logout}
                    >
                                LogOut
                    </button>                    
                    </div>
                </div>
                </div>
            </div>
            </form>
        )
    }
};

export default ResetPassword;