import React, { Component } from "react";
import { connect } from "react-redux";
import { getTaskAction } from "../action/Task";
import { history } from "../history";
import TaskItem from './taskItem';

class Task extends Component{
    constructor(props){
        super();
    }

    
    render(){
        // console.log(this.props.tasks)
        if(!this.props.tasks){
            return <h1>Loading.....</h1>
        }
        return(
            
            <div className='container' style={{marginTop:'50px'}}>
               
                <div className='row' style={{paddingTop:'20px',paddingBottom:'20px'}}>
                    {
                        this.props.tasks.sort((a, b) => a.id > b.id ? 1 : -1)
                                        .map((taskItem)=>(
                            
                            <TaskItem data={taskItem} {...this.props} key={taskItem.id}/>
                        ))
                    }
                </div>

                <div className="fixed-bottom" style={{padding:'20px',paddingLeft:'50px'}}>
                    <div className="row" >
                        <button type="button" 
                                className="btn btn-lg btn-primary"
                                onClick={()=>{
                                    history.push('/addTask');
                                    window.location.reload();
                                }}
                                >
                                    Add Task
                                </button>
                    </div>
                </div>
            
            </div>
            
        )
    }
};

const mapStateToProps = (state) =>{
    // console.log(state);
    return {tasks: state.task.storedata}
}

export default connect(mapStateToProps,{getTaskAction})(Task);