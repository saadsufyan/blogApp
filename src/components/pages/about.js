import React from 'react';
import Login from "./Login/Login";
import { BrowserRouter as Router, Route} from 'react-router-dom';

function About() {
    return (
        <React.Fragment>
            <Route path="/login" exact component={Login} 
            />
            <h1>About/Admin Panel</h1>
            <p>
                This is the TodoList app v1.0.0. It is part of the react crash course
            </p>
        </React.Fragment>
    ) 
}

export default About;