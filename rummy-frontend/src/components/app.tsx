import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header";
import SigninPage from "./signin-page";
import store from '../store/store';
import { Provider } from 'react-redux';
import SingoutPage from "./signout-page";
import RegisterPage from "./register";
import DeleteAccountPage from "./delete-account";
import ChangePasswordPage from "./change-password-page";

export default function App(){
    return <BrowserRouter>
      <Provider store={store}>
      <Header/>
      <Routes>
        <Route path={"/signin"} element={<SigninPage/>}/>
        <Route path={"/register"} element={<RegisterPage/>}/>
        <Route path={"/signout"} element={<SingoutPage/>}/>
        <Route path={"/deleteaccount"} element={<DeleteAccountPage/>}/>
        <Route path={"/updatepassword"} element={<ChangePasswordPage/>}/>
      </Routes>
      </Provider>
    </BrowserRouter>
}