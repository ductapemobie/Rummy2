import { Card, CardContent, TextField, CardActions, Button, Typography } from "@mui/material";
import axios from "axios";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginState } from "../../store/store";

export default function ChangePasswordPage(){

    const sxVals = { 
        minWidth: 300,
        maxWidth:300, 
        bgcolor: '#C5FBFF'
    };

    const oldPasswordRef:any = useRef(null);
    const newPasswordRef:any = useRef(null);

    let loginState:LoginState = {
        token:useSelector((state:LoginState) => state.token)
    };

    async function updateClicked(){
        const oldPasswordVal = oldPasswordRef.current.value;
        const newPasswordVal = newPasswordRef.current.value;
        const data = {
            oldPassword:oldPasswordVal,
            newPassword:newPasswordVal
        }
        const updateURL = "https://valid-cell-330621.uk.r.appspot.com/users/updatepassword";
        try{
            const result = await axios.patch(updateURL, data)
            console.log(result);
            alert("Password Updated Successfully")
        }catch(error){
            alert("Error: Incorrect Password")
        }
    }

    const delCard = <div className='centerElements'>
        <Card sx={sxVals}>
            <CardContent>
            <div className='centerElements'>
                    <TextField variant="standard" label="old password" inputRef={oldPasswordRef} />
                </div>
                <div className='centerElements'>
                    <TextField variant="standard" label="new password" inputRef={newPasswordRef} />
                </div>
            </CardContent>
            <CardActions>
                <div className='centerElements'>
                    <Button size="small" onClick={updateClicked}>Update Password</Button>
                </div>
            </CardActions>
        </Card>
    </div>

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