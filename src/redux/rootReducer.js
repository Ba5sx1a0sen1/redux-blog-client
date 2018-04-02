//根reducer，用来combine其他所有reducers
import { combineReducers } from "redux"
import auth from "./reducers/auth"

export default combineReducers({
    auth
})