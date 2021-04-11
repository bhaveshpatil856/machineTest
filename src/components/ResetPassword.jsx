import React, { Component } from "react";
import { history } from "../history";
import SimpleReactValidator from 'simple-react-validator';


class ResetPassword extends Component{

    constructor(props){
        super();
        this.state={
            userPassword:''
        }
        this.validator = new SimpleReactValidator({
                autoForceUpdate: this,
                className: 'text-danger',
                validators: {
                    userPassword: {  // name the rule
                      message: 'Password must contains minimum eight characters, at least one letter, one number and one special character',
                      rule: (val, params, validator) => {
                        return validator.helpers.testRegex(val,/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i) && params.indexOf(val) === -1
                      },
                      //messageReplace: (message, params) => message.replace(':values', this.helpers.toSentence(params)),  // optional
                      required: true  // optional
                    }
                  }
                })
    };

    data = JSON.parse(localStorage.getItem('currentUser'))

    HandleFormData = (e) => {
        e.preventDefault();
        if(this.validator.allValid()){
        let item= {
                 userName: this.data.userName,
                 userPassword: this.state.userPassword
            };
//            console.log(item);

            localStorage.setItem('currentUser',JSON.stringify(item));   
            window.alert("password Changed Successfully..")

            history.push('/user');
            window.location.reload();
        }
        else{
            this.validator.showMessages();
            this.forceUpdate();
        }

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
                    <label> <h4>New Password : </h4></label>
                    <div className='col-md-4'>
                    <input className="form-control" 
                               type="password"
                               placeholder="userPassword"
                               name="userPassword"
                               onChange={this.handleInputData}
                        />
                        {
                               this.validator.message('userPassword', this.state.userPassword, 'required|userPassword')
                        }
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