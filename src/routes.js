import React from "react"
import { Router, Route, browserHistory, hashHistory } from "react-router"
import { Provider } from "react-redux"
import App from "./components/App"
import Login from "./components/auth/Login"
import SignUp from "./components/auth/SignUp"

import { store } from "./redux/store"

import {setCurrentUser} from "./redux/actions/authAction" 
if(sessionStorage.jwtToken){
    const user = JSON.parse(sessionStorage.user)
    store.dispatch(setCurrentUser(user))
}

export default class RenderRouter extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={App}>
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={SignUp}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}