import { createStore, Reducer } from "redux";

export class LoginState{
    constructor(
        public token:string
    ){}
}

const reducer:Reducer<LoginState, any> = (loginState:LoginState  = {token:""}, message:any) =>{
    if(message.type === "login"){
        const newLoginState:LoginState = new LoginState(loginState.token)
        newLoginState.token = message.token;// update state with new username
        console.log(newLoginState);
        return newLoginState;
    }
    if(message.type === "logout"){
        const newLoginState:LoginState = new LoginState(loginState.token)
        newLoginState.token = "";// update state with new username
        return newLoginState;
    }
    return loginState;
}

const store = createStore(reducer); // we have created out store

export default store;