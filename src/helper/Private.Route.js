import React from 'react';
import {Route,Redirect} from 'react-router-dom';

const PrivateRoute= (props) => {
    // console.log(props);
    let {component:Component, ...rest} = props;
    return(
        <Route {...rest}
        render = {
                props => localStorage.getItem('currentUser')
                ?
                (<Component {...props}/>)
                :
                (<Redirect to={{pathname:"/", state:{from : props.location}}}/>)
        }
        />
    )
}

export default PrivateRoute;