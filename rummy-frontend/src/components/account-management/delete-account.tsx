import { Card, CardContent, TextField, CardActions, Button, Typography } from "@mui/material";
import axios from "axios";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginState } from "../../store/store";

export default function DeleteAccountPage(){

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const sxVals = { 
        minWidth: 300,
        maxWidth:300, 
        bgcolor: '#C5FBFF'
    };

    const passwordRef:any = useRef(null);

    let loginState:LoginState = {
        token:useSelector((state:LoginState) => state.token)
    };

    async function deleteClicked(){
        const passwordVal = passwordRef.current.value;
        const data = {
            password:passwordVal
        }
        const deleteURL = "https://valid-cell-330621.uk.r.appspot.com/users/delete"
        try{
            const result = await axios.patch(deleteURL, data)
            console.log(result);
            alert("Account Deleted Successfully")
            dispatch({type:"logout", token:""});
            navigate('/');
        }catch(error:any){
            alert("Error!!!")
            console.log(error);
        }
    }

    const delCard = <div className='centerElements'>
        <Card sx={sxVals}>
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