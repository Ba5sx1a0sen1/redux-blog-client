//根reducer，用来combine其他所有reducers
import { combineReducers } from "redux"
import auth from "./reducers/auth"
import posts from "./reducers/posts"
import post from "./reducers/post"
export default combineReducers({
    auth,
    posts,
    post
})