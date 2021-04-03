import React, { Component } from "react";

class Info extends Component{

    constructor(props){
        super();
    }


    details = (v) => {
        {
            console.log(v)
            switch(v){
                case "reactJs":
                   return ("React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.")
                case "angular":
                    return ("AngularJS is a JavaScript-based open-source front-end web framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.")
                case "html":
                   return ("The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.")
                default:
                    break;
            }
        }
    }

    render(){

        let data= this.props.data
        // console.log(this.props)
        return(
            <div className="card">
            <div className="card-header">
                <h1>{data}</h1> 
            </div>
            <div className="card-body">
                <p>{this.details(data)}</p>
            </div>
          </div>    
        )
    }
};

export default Info;