import axios from "axios"
import {browserHistory} from "react-router"
import {Settings} from "../../settings"

function handleError(error){
    if(error.response){
        console.log(error.response.data.error) 
    }else{
        console.log(error)
    }
}

export function newPost(data){
    return function(dispatch){
        axios.post(`${Settings.host}/posts`,data,{
            headers:{'Authorization':sessionStorage.getItem('jwtToken')}
        }).then(response=>{
            dispatch({type:'ADD_POST',post:response.data.post})
            browserHistory.push('/dashboard')
            console.log(response.data)
        }).catch(err=>{
            handleError(err)
        })
    }
}

export function fetchPosts(){
    return (dispatch)=>{
        axios.get(`${Settings.host}/posts`)
            .then(response=>{
                console.log(response.data.posts)
                dispatch({type:'LOAD_POSTS',posts:response.data.posts})
            }).catch(err=>{
                handleError(err)
            })
    }
}