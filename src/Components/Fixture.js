import { useEffect, useState } from "react";
import {TeamsList} from '../Assets/TeamsList'
import '../Styles/Fixture.css';

let Teamid="33";

function Fixture({team,setLeague}){
    let Matchday=0;
    const [data,setData]=useState({});

    
    function Teamidfinder(){
        let aux=TeamsList.find(Team=>Team.name.toLocaleLowerCase()===team.toLocaleLowerCase());
        if(aux){Teamid=aux.id;}
        if(Teamid<70){setLeague('39');}
        else if (Teamid<100){setLeague('61');}
        else if (Teamid<200){setLeague('78');}
        else if (Teamid<250){setLeague('94');}
        else if (Teamid<520){setLeague('135');}
        else{setLeague("140");}
    }


    function fetchFixture(){
        fetch(`https://v3.football.api-sports.io/fixtures?team=${Teamid}&season=2021&from=2021-10-01&to=2022-09-01&timezone=Africa%2FTunis`, {
            "method": "GET",
	    "headers": {
	    	"x-rapidapi-host": "v3.football.api-sports.io",
            "x-apisports-key":"2106675c0a835ed31caebfbfba910c83"
    	}
        })
        .then(response => {
            return response.json();
            })
        .then(dat=>{
        setData(dat);})

    }

    function dateparse(str){
        let straux="";
        for(let i=0;i<10;i++){
            straux+=str[i];
        }
        straux+=" At ";
        for(let i=11;i<16;i++){straux+=str[i];}
         return straux;
    }

    useEffect(()=>{Teamidfinder();
        fetchFixture();},[team]);

    return(
        <div className="Fixture">
            {data.hasOwnProperty("response") ? <div> <div className="Matchday-box"><img src={data.response[Matchday].teams.home.logo} alt="" />
            <h3 className="left">{data.response[Matchday].teams.home.name} </h3> VS <h3 className="right"> {data.response[Matchday].teams.away.name}</h3>
            <img src={data.response[Matchday].teams.away.logo} alt="" /></div><h2>{dateparse(data.response[Matchday].fixture.date)}</h2></div>:null }
        </div>
    )
}

export default Fixture;
