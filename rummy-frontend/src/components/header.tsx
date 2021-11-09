import { Link } from "react-router-dom";

export default function Header(){
    return <ul>
        <li><Link to={'/signin'}>Sign in</Link></li>
    </ul>
}