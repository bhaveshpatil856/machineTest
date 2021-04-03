import React, { Component } from "react";
import { connect } from "react-redux";
import {history} from '../history'

class User extends Component{

constructor(props){
    super();
}

data= JSON.parse(localStorage.getItem('currentUser'));

Logout= () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("persist:root");
    history.push('/');
    window.location.reload();
}

// decryptPassWord = (value) => {
//     let i=0;
//     for(i=0;i < value.length;i++){
//     ;
//     }
// } 

    render(){
       // console.log(this.data.userName);
        return(
            <div className="container" style={{marginTop:'20px'}}>
                <div className="row" style={{margin:"20px"}}>
                    <label> <h4> Username :</h4></label>
                    <div className='col-md-8'>
                        <h3>{this.data.userName}</h3>
                    </div>
                </div>
                <div className="row" style={{margin:"20px"}}>
                    <label> <h4>PassWord : </h4></label>
                    <div className='col-md-4'>
                        <h3>********</h3>
                    </div>
                </div>

                <div className="fixed-bottom">
                <div className="row" >
                    <div className="col">
                    <button type="button" 
                            className="btn btn-outline-secondary" 
                            style={{margin:'10px'}}
                            onClick={()=> {
                                history.push('/resetpassword');
                                window.location.reload();
                            }}
                    >
                        Change Password
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
        )
    }
};

const mapStateToProps= (state) => {
   // console.log(state);
    return state
}

export default connect(mapStateToProps)(User);