import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography';
import '../../app.css'
import { useRef } from 'react';
import { LoginState } from '../../store/store';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {

    const navigate = useNavigate();

    let loginState:LoginState = {
        token:useSelector((state:LoginState) => state.token)
    };

    const usernameRef:any = useRef(null);
    const passwordRef:any = useRef(null);

    const sxVals = { 
        minWidth: 300,
        maxWidth:300, 
        bgcolor: '#C5FBFF'
    };

    async function registerClicked(){
        const usernameVal = usernameRef.current.value;
        const passwordVal = passwordRef.current.value;
        const data = {
            username:usernameVal,
            password:passwordVal
        }
        const loginURL = "https://valid-cell-330621.uk.r.appspot.com/users"
        try{
            const result = await axios.post(loginURL, data)
            console.log(result);
            alert("Account Created Successfully")
            navigate('/signin');
        }catch(error:any){
            alert("Error!!!")
            console.log(error);
        }
    }

    const loginCard = <div className='centerElements'>
        <Card sx={sxVals}>
            <CardContent>
                <div className='centerElements'>
                    <TextField variant="standard" label="username" inputRef={usernameRef} />
                </div>
                <div className='centerElements'>
                    <TextField variant="standard" label="password" inputRef={passwordRef} />
                </div>
            </CardContent>
            <CardActions>
                <div className='centerElements'>
                    <Button size="small" onClick={registerClicked}>Register</Button>
                </div>
            </CardActions>
        </Card>
    </div>

    const messageCard = <div className='centerElements'>
        <Card sx={sxVals}>
            <CardContent>
                <div className='centerElements'>
                    <Typography>You are signed in</Typography>
                </div>
            </CardContent>
        </Card>
    </div>

    return (
        loginState.token?messageCard:loginCard
    );
}

