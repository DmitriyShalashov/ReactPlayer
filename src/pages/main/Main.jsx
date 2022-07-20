import React from 'react';
import LogBar from '../../components/ux/logbar/LogBar';
import Navigation from '../../components/ux/navigation/Nav';
import Player from '../../components/ux/player/Player';
import './Main.css'

function Main(props) {

  
    
    return ( 
        <div className='full-screen'>
            <LogBar track={props.trackNow} />
            {props.children}
            <Navigation/>
            <Player track={props.trackNow} changeTrackNext={props.changeTrackNext} changeTrackPrev={props.changeTrackPrev}/>
        </div>
     );
}

export default Main;