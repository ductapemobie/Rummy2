import { Button, Card, CardActions, CardContent } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { LoginState } from "../store/store";
import Typography from '@mui/material/Typography';


export default function SingoutPage(){

    const dispatch = useDispatch()

    let loginState:LoginState = {
        token:useSelector((state:LoginState) => state.token)
    };

    const sxVals = { 
        minWidth: 300,
        maxWidth:300, 
        bgcolor: '#C5FBFF'
    };

    function logoutClicked(){
        dispatch({type:"logout", token:""});
    }

    const logoutCard = <div className='centerElements'>
        <Card sx={sxVals}>
            <CardActions>
                <div className='centerElements'>
                    <Button size="small" onClick={logoutClicked}>Log Out</Button>
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

    return <>{loginState.token?logoutCard:errorCard}</>
}