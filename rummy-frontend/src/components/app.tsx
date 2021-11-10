import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./header";
import SigninPage from "./signin-page";

export default function App(){
    return <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={"/signin"} element={<SigninPage/>}></Route>
      </Routes>
    </BrowserRouter>
}