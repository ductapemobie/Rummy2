import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header";
import SigninPage from "./account-management/signin-page";
import store from '../store/store';
import { Provider } from 'react-redux';
import SingoutPage from "./account-management/signout-page";
import RegisterPage from "./account-management/register";
import DeleteAccountPage from "./account-management/delete-account";
import ChangePasswordPage from "./account-management/change-password-page";

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