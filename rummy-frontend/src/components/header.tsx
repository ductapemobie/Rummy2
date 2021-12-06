import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LoginState } from "../store/store";

export default function Header(){

    const loginState:LoginState = {token:useSelector((state:LoginState) => state.token)};

    const outHeader = <ul>
            <li><Link to={'/signin'}>Sign In</Link></li>
            <li><Link to={'/register'}>Register</Link></li>
        </ul>

    const inHeader = <ul>
        <li><Link to={'/signout'}>Sign Out</Link></li>
        <li><Link to={'/updatepassword'}>Update Password</Link></li>
        <li><Link to={'/deleteaccount'}>Delete Account</Link></li>
    </ul>

    return <>{loginState.token?inHeader:outHeader}</>
}