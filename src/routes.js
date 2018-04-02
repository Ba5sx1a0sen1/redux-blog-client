import React from "react"
import { Router, Route, browserHistory, hashHistory } from "react-router"
import { Provider } from "react-redux"
import App from "./components/App"
import Login from "./components/auth/Login"
import { store } from "./redux/store"

export default class RenderRouter extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={App}>
                        <Route path="/login" component={Login} />
                    </Route>
                </Router>
            </Provider>
        )
    }
}