import { Card, CardContent, TextField, CardActions, Button, Typography } from "@mui/material";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { LoginState } from "../store/store";

export default function DeleteAccountPage(){

    const sxVals = { 
        minWidth: 300,
        maxWidth:300, 
        bgcolor: '#C5FBFF'
    };

    const passwordRef:any = useRef(null);

    let loginState:LoginState = {
        token:useSelector((state:LoginState) => state.token)
    };

    function deleteClicked(){
        const password = passwordRef.current.value;
        //TODO: make delete account require a password to delete
        alert("i have not implemented this 1 yet")
    }

    const delCard = <Card sx={sxVals}>
        <CardContent>
        <div className='centerElements'>
                <Typography>Deleting your account is a permanat action.  Please input your password to proceed</Typography>
            </div>
            <div className='centerElements'>
                <TextField variant="standard" label="password" inputRef={passwordRef} />
            </div>
        </CardContent>
        <CardActions>
            <div className='centerElements'>
                <Button size="small" onClick={deleteClicked}>Delete Account</Button>
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