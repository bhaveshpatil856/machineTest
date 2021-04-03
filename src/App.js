import React from 'react';
import {Component} from 'react';
import Navigation from './components/NavBar';
import { Route, Switch } from 'react-router';
import Home from './components/HomeComponent';
import Task from './components/TaskComponent';
import User from './components/UserComponent';
import Login from './components/LoginPage';
import ResetPassword from './components/ResetPassword';
import PrivateRoute from './helper/Private.Route';
import AddTask from './components/AddTask';

class App extends Component{
    render(){
        return(
            

    <React.Fragment>

    

            
        <Navigation/>
                <Route path='/' exact component={Login}/>
                
                
                <Switch>
                    <PrivateRoute path="/home" exact component={Home}/>
                    <PrivateRoute path='/task' exact component={Task}/>
                    <PrivateRoute path='/user' exact component={User}/>
                    <PrivateRoute path='/addTask' exact component={AddTask}/>
                    <PrivateRoute path='/resetpassword' exact component={ResetPassword}/>
                </Switch>
            </React.Fragment>
        )
    }
}

export default App; 