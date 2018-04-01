import React from "react"
import { Router, Route, browserHistory } from "react-router"
import App from "./components/App"
import Login from "./components/auth/Login"

export default class RenderRouter extends React.Component{
    render(){
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <Route path="/login" component={Login} />
                </Route>
            </Router>
        )
    }
}