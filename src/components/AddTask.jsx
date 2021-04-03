import React, { Component } from 'react';
import { connect } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
import { addTaskAction } from '../action/Task';

class AddTask extends Component{
    constructor(props){
        super();
        this.state = {
            UserId:  '',
            Id:  '',
            title:'',
            Completed: false
        }
        this.validator = new SimpleReactValidator({autoForceUpdate: this});
    }

    handleInputData= (e) => {
            this.setState({[e.target.name]: e.target.value});
    }

    handleCheckedBox= (c) => {
        console.log(c.target.checked);
        this.setState({ [c.target.name] : c.target.checked});
    }

    HandleFormData = (e) => {
        e.preventDefault();
        if(this.validator.allValid()){
            let item= {
                userId: parseInt(this.state.UserId),
                id: parseInt(this.state.Id),
                title: this.state.title,
                completed: this.state.Completed
            };
            this.props.addTaskAction(item);            
            // console.log(item);
        }
        else{
            this.validator.showMessages();
            this.forceUpdate();
        }
    }


    render(){
        return(
            <div className='container'>
                <form onSubmit={this.HandleFormData}>
                        <div className="form-group col-md-4">
                        <label>UserId</label>
                            <input className="form-control" 
                                   type="number"
                                   placeholder="UserId"
                                   name="UserId"
                                   onChange={this.handleInputData}
                            />
                            {
                               this.validator.message('UserId', this.state.UserId, 'required')
                            }
                        </div>
                        <div className="form-group col-md-4">
                        <label>Id</label>
                            <input className="form-control" 
                                   type="number"
                                   placeholder="Id"
                                   name="Id"
                                   onChange={this.handleInputData}
                            />
                            {
                               this.validator.message('Id', this.state.Id, 'required')
                            }
                        </div>
                        <div className="form-group col-md">
                        <label>Title</label>
                            <textarea className="form-control"
                                    type="text"
                                    placeholder="Title"
                                    name="title"
                                    onChange={this.handleInputData}
                            />
                            {
                               this.validator.message('title', this.state.title, 'required')
                            }
                        </div>

                        <div className="form-group col-md">
                        <div className="form-check" style={{marginBottom:'20px'}}>
                            <input type="checkbox" 
                                className="form-check-input"
                                id="exampleCheck1"
                                name="Completed"
                                onChange={this.handleCheckedBox}
                            />
                            <label className="form-check-label" htmlFor="exampleCheck1">Completed</label>
                        </div>
                        </div>
                        
                        
                        <div className="form-group col-md">
                            <button type="submit" className="btn btn-primary">Add</button>
                        </div>
                      
                      </form>
            </div>
        )
    }
};

const mapStateToProps=(state)=>{
    //console.log(state);
    return state
}

export default connect(mapStateToProps,{addTaskAction})(AddTask);