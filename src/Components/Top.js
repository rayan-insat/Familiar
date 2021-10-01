import { useEffect } from "react/cjs/react.development";
import {useState} from 'react';
import '../Styles/Top.css';

function Top({url,type}){

    const [data,setData]=useState({});

    function fetchData(){
        fetch(url, {
            "method": "GET",
	    "headers": {
	    	"x-rapidapi-host": "v3.football.api-sports.io",
            "x-apisports-key":"2106675c0a835ed31caebfbfba910c83"
    	}
        })
        .then(predata=>predata.json())
        .then(dat=>{setData(dat);
        console.log(dat);})
    }

    useEffect(()=>{fetchData()},[url])


    return (<div className="Top">
        {data.hasOwnProperty("response")  ? 
<ul>
    <li><h2>{type==="goals" ? data.response[0].statistics[0].goals.total:data.response[0].statistics[0].goals.assists}</h2><img src={data.response[0].player.photo} alt=""></img><h3>{data.response[0].player.name}</h3></li>
    <li><h2>{type==="goals" ? data.response[1].statistics[0].goals.total:data.response[1].statistics[0].goals.assists}</h2><img src={data.response[1].player.photo}></img><h3>{data.response[1].player.name}</h3></li>
    <li><h2>{type==="goals" ? data.response[2].statistics[0].goals.total:data.response[2].statistics[0].goals.assists}</h2><img src={data.response[2].player.photo}></img><h3>{data.response[2].player.name}</h3></li>
</ul>:null}
    </div>);
}

export default Top;