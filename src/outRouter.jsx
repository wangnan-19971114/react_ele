import React from 'react';
import {
    Switch, Route, BrowserRouter as Router
} from "react-router-dom";
import Inde from "./views/inde.jsx";
export default class outRouter extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" component={Inde}></Route>

                </Switch>
            </Router>
        )
    }
}