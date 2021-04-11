import React, { Component } from 'react';
import { connect } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
import { getTaskAction } from '../action/Task';
import { LoginAction } from '../action/user';

class Login extends Component{

    constructor(){
        super();
        this.state = {
            userName:"",
            userPassword:"",
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
              }});
        
    }

    HandleFormData = (e) => {
        e.preventDefault();
        if(this.validator.allValid()){
        let item= {
                    userName: this.state.userName,
                    userPassword: this.state.userPassword
            };
            console.log(item);
            this.props.LoginAction(item);   
        }
        else{
            this.validator.showMessages();
            this.forceUpdate();
        }

            
        }

    handleInputData= (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    componentDidMount(){
        this.props.getTaskAction();
        
    }

    render(){
        return(
            <div className="container" style={{marginTop:'20px'}}>
            <div className="row">
                <div className="col-md-8">
                  <form onSubmit={this.HandleFormData}>
                   <div className="form-group">
                       <h5>Username</h5>
                        <input className="form-control" 
                               type="text"
                               placeholder="userName"
                               name="userName"
                               onChange={this.handleInputData}
                        />
                            {
                               this.validator.message('userName', this.state.userName, 'required')
                            }
                    </div>
                    <div className="form-group">
                    <h5>Password</h5>
                        <input className="form-control" 
                               type="password"
                               placeholder="userPassword"
                               name="userPassword"
                               onChange={this.handleInputData}
                        />
                        {this.validator.message('userPassword', this.state.userPassword, 'required|userPassword')}

                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                  
                </div>
            </div>
        </div>
    )
    }
}

const mapStateToProps= (state)=>{
    // console.log(state);
    return state;
}

export default connect(mapStateToProps,{getTaskAction,LoginAction})(Login);