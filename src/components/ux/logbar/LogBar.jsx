import React from 'react';
import MyAvatar from '../../ui/avatar/MyAvatar';
import "./LogBar.css"


function LogBar(trackNow) {
   console.log()
   const albums=trackNow.track.album
    return ( 
        <div className="log-bar">
            <div className='log-play'><h2>Сейчас играет:<br></br> <span>{trackNow.track.name}</span></h2></div>
            <MyAvatar query='avatar' src={trackNow.track.img}><h4> <p>{trackNow.track.name}</p></h4></MyAvatar>
            <div className='log-singer'><h3>Исполнитель: <br></br><span> {trackNow.track.singer}</span></h3></div>
            <div className='log-singer'><h3>Альбомы: <br></br><span> {albums ?albums.join(' '):' '}</span></h3></div>
        </div>   
     );
}

export default LogBar;