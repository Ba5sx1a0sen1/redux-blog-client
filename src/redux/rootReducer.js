//根reducer，用来combine其他所有reducers
import { combineReducers } from "redux"
import auth from "./reducers/auth"
import posts from "./reducers/posts"

export default combineReducers({
    auth,
    posts
})