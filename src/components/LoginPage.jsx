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
        this.validator = new SimpleReactValidator({autoForceUpdate: this});
        
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
                        <input className="form-control" 
                               type="password"
                               placeholder="userPassword"
                               name="userPassword"
                               onChange={this.handleInputData}
                        />
                        {
                               this.validator.message('userPassword', this.state.userPassword, 'required|min:8')

                        }
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