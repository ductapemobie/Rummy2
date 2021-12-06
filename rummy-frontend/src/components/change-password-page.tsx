import { Card, CardContent, TextField, CardActions, Button, Typography } from "@mui/material";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { LoginState } from "../store/store";

export default function ChangePasswordPage(){

    const sxVals = { 
        minWidth: 300,
        maxWidth:300, 
        bgcolor: '#C5FBFF'
    };

    const passwordRef:any = useRef(null);

    let loginState:LoginState = {
        token:useSelector((state:LoginState) => state.token)
    };

    function updateClicked(){
        const password = passwordRef.current.value;
        //TODO: make delete account require a password to delete
        alert("i have not implemented this 1 yet")
    }

    const delCard = <Card sx={sxVals}>
        <CardContent>
        <div className='centerElements'>
                <TextField variant="standard" label="old password" inputRef={passwordRef} />
            </div>
            <div className='centerElements'>
                <TextField variant="standard" label="new password" inputRef={passwordRef} />
            </div>
        </CardContent>
        <CardActions>
            <div className='centerElements'>
                <Button size="small" onClick={updateClicked}>Update Password</Button>
            </div>
        </CardActions>
    </Card>

    const errorCard = <div className='centerElements'>
        <Card sx={sxVals}>
            <CardContent>
                <div className='centerElements'>
                    <Typography>You are not signed in</Typography>
                </div>
            </CardContent>
        </Card>
    </div>

    return <>{loginState.token?delCard:errorCard}</>

}