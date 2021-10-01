import { useState } from "react";
import logo from '../Assets/FootballLogo.PNG';
import '../Styles/FootballCard.css';
import Fixture from "./Fixture";
import Top from "./Top";

function FootballCard(){
    const [team,setTeam]=useState("Manchester united");
    const [league,setLeague]=useState("39");
    
    function TeamSelectionHandler(){
        let TeamName=document.querySelector(".Team-name-input").value;
        setTeam(TeamName);
    }

    return(
        <div className="FootballCard">
            <div className="FootballCard-logo">
                <img src={logo} alt="striker"></img>
            </div>
            <div className="Team-name">
                <input className="Team-name-input" spellcheck='false' autocorrect='off' placeholder="Manchester united"></input>
                <button className="Team-name-button" onClick={TeamSelectionHandler}>
                    <i class="fas fa-search-location"></i>
                </button>
            </div>
            <Fixture team={team} setLeague={setLeague} />
            <p id="a">Top Scorers:</p>
            <Top url= {`https://v3.football.api-sports.io/players/topscorers?season=2021&league=${league}`} type="goals"/>
            <p id="b">Top Assists:</p>
            <Top url= {`https://v3.football.api-sports.io/players/topassists?season=2021&league=${league}` } type="assists"/>
        </div>
    )
}

export default FootballCard;