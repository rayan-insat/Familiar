import facebook from '../Assets/Socialmedialogos/facebook.svg';
import insta from '../Assets/Socialmedialogos/instagram.svg';
import reddit from '../Assets/Socialmedialogos/reddit.svg';
import spotify from '../Assets/Socialmedialogos/spotify.svg';
import youtube from '../Assets/Socialmedialogos/youtube.svg';
import discord from '../Assets/Socialmedialogos/discord.svg';
import HoverButton from './Hover';
import { gsap } from 'gsap';
import '../Styles/ShortcutsBanner.css';
import { useEffect, useRef } from 'react';


function ShortcutsBanner(){

    const face=useRef();
    const instagram=useRef();
    const redd=useRef();
    const spot=useRef();
    const you=useRef();
    const dis=useRef();

    useEffect(()=>{const logos=[face.current,instagram.current,redd.current,spot.current,you.current,dis.current]
       logos.forEach(ele=>{new HoverButton(ele);})
        });
    return (
        <div className="ShortcutsBanner">
            <a href="https://www.facebook.com/" ref={face}><img src={facebook} alt="facebook"></img></a>
            <a href="https://www.instagram.com/"ref={instagram}><img src={insta} alt="instagram"></img></a>
            <a href="https://www.reddit.com/" ref={redd}><img src={reddit} alt="reddit"></img></a>
            <a href="https://www.spotify.com/us/" ref={spot}><img src={spotify} alt="spotify"></img></a>
            <a href="https://www.youtube.com/" ref={you}><img src={youtube} alt="youtube"></img></a>
            <a href="https://discord.com/" ref={dis}><img src={discord} alt="discord"></img></a>
        </div>
        );
}

export default ShortcutsBanner;