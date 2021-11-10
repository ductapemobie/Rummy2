import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography';
import '../app.css'
import { useRef } from 'react';

export default function SigninPage() {
    const usernameRef:any = useRef(null);
    const passwordRef:any = useRef(null);

    const sxVals = { 
        minWidth: 300,
        maxWidth:300, 
        bgcolor: '#C5FBFF'
    };

    function btnClicked(){
        alert([usernameRef.current.value, passwordRef.current.value])
    }

    return (
        <div className='centerElements'>
            <Card sx={sxVals}>
            <CardContent>
                <div className='centerElements'>
                    <TextField variant="standard" label="username" inputRef={usernameRef}/>
                </div>
                <div className='centerElements'>
                    <TextField variant="standard" label="password" inputRef={passwordRef}/>
                </div>
            </CardContent>
            <CardActions>
                <div className='centerElements'>
                    <Button size="small" onClick={btnClicked}>Log In</Button>
                </div>
            </CardActions>
            </Card>
        </div>
    );
}
