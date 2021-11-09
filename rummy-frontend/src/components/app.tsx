import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./header";

export default function App(){
    return <BrowserRouter>
      <Link to={'/signin'}>link</Link>
      <Routes>
        <Route path={"/signin"} element={<Header/>}></Route>
      </Routes>
    </BrowserRouter>
}