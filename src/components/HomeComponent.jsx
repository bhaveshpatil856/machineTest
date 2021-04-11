import React, { Component } from "react";
import Info from './information';
import { Dropdown } from "react-bootstrap";

class Home extends Component{

    constructor(){
        super();
        this.state = {
            item:''
        }
    }

    handleInput=(e)=>{
        // console.log(e.target.id);
        this.setState({item: e.target.id});
    }
    

    render(){
        return(
            <div className='container' style={{marginTop:"50px"}}>
                
                <Dropdown style={{margin:'20px'}}>
                <Dropdown.Toggle variant="success" 
                                 id="dropdown-basic"
                >
                    Select Language
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item id="ReactJs" onClick={this.handleInput}  >React JS</Dropdown.Item>
                    <Dropdown.Item id="Angular" onClick={this.handleInput} >Angular</Dropdown.Item>
                    <Dropdown.Item id="HTML" onClick={this.handleInput} >HTML</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <div className='container' style={{marginTop:'50px'}}>
                <Info data={this.state.item}/>
            </div>

            </div>
            )
    }
};

export default Home;