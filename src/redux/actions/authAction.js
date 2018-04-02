import axios from "axios"

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
        axios.post('http://localhost:3000/auth/login',data)
            .then(response=>{
                const {token,user} = response.data
                sessionStorage.setItem('jwtToken',token)
                sessionStorage.setItem('user',JSON.stringify(user))
                dispatch(setCurrentUser(user))
                console.log('登录成功了')
            })
            .catch(err=>{
                handleError(error)
            })
    }
}