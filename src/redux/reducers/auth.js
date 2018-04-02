import isEmpty from "lodash/fp/isEmpty"

const initialState = {//reducer必须的初始state
    isAuthenticated:false,
    currentUser:{}
}

export default (state=initialState,action={})=>{
    switch(action.type){
        case 'AUTH_USER':
            return {
                isAuthenticated:!isEmpty(action.user),
                currentUser:action.user
            }
        default:
            return state //初始化调用
    }
}