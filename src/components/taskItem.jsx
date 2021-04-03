import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTaskAction } from "../action/Task";

class TaskItem extends Component{

    constructor(props){
        super(props);
    }

    formatTitle = (value)=> {
        // console.log(value);
        if(!value){return null;}
        if(value.length > 20){
            return value.substring(0,20) + '...';
        }
        else{
            return value;
        }
    }

    removeItem = async() => {
        console.log(this.props.data);
        let a=  await this.props.removeTaskAction(this.props.data);
        console.log(a);
    }

    render(){
        // console.log(this.props.data)
        return(
            
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h4>
                    <center>
                        {this.props.data.id}
                    </center>
                    </h4>
                </div>
                <div className="col-sm">
                    <h4><center>{this.formatTitle(this.props.data.title)}</center></h4>
                </div>
                <div className="col-sm">
                    <h4><center>{this.props.data.completed.toString()}</center></h4>
                </div>
                <div className="col-sm">
                    <button type="button" 
                            className="btn btn-danger"
                            onClick={()=>this.removeItem()}
                    > 
                        Delete 
                    </button>
                </div>
            </div>
            <hr/>
        </div>
    )
}
}

const mapStateToProps = (state) =>{
    //  console.log(state)
        return state;
    }

export default connect(mapStateToProps,{removeTaskAction})(TaskItem);