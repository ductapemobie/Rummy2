import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ViewGamesPage(){

    //todo change from type any
    const [games, updateGames] = useState<any[]>();
    const [gamesTable, updateGamesTable] = useState<any>();
    const navigate = useNavigate();

    async function loadGames(){
        const getUrl:string = "https://valid-cell-330621.uk.r.appspot.com"
        try{
            const result = await axios.get(getUrl+'/games')
            updateGames(result.data)
        }catch(error){
            console.log(error)
            alert("Cannot load games at this time :(")
        }
    }

    async function viewGameBtnClicked(gameId:number){
        navigate('/')
    }

    useEffect(()=>{
        console.log(games);
        if (games){
            updateGamesTable(
                <table className="centerElements">
                    <tr><th>Room Name</th><th>Players</th><th>Player Limit</th><th>More Details</th></tr>

                    {games.map((game) => <tr>
                            <td>{game.roomName}</td><td>{game.players}</td><td>{game.playerLimit}
                            </td><td><button onClick={()=>viewGameBtnClicked(game.gameId)}>More Details</button></td>
                        </tr>)}
                </table>
            )
        }else{
            loadGames();
        }
    }, [games])

    return <div className="centerElements">
        <div className="centerElements"><button onClick={loadGames}>Refresh Games</button></div>
        {gamesTable}
    </div>
}