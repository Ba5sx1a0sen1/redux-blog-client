import axios from "axios"
import {browserHistory} from "react-router"
import {Settings} from "../../settings"

export function setCurrentUser(user){
    return {
        type:'AUTH_USER',
        user
    }
}

function handleError(error){
    if(error.response){
        console.log(error.response.data.error)
    }else{
        console.log(error)
    }
}

export function login(data){
    return dispatch=>{
        axios.post(`${Settings.host}/auth/login`,data)
            .then(response=>{
                const {token,user} = response.data
                sessionStorage.setItem('jwtToken',token)
                sessionStorage.setItem('user',JSON.stringify(user))
                dispatch(setCurrentUser(user))
                browserHistory.push('/')
                console.log('登录成功了')
            })
            .catch(error=>{
                handleError(error)
            })
    }
}