import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './MyTracks.css'

function MyTrackList({myTracks, remove,change,trackNow}) {
    const title='Мои треки'
    const desc='Слушайте топовую музыку без рекламы'
    
    const removeTrack =(e, track)=>{
        remove(track)
    }

    return ( 
        <div className='track-list'>
            <div className="track-list-title">
            <h2>{title}</h2>
                <Link to='/'> На главную</Link>
            </div>
           
            <div className='track-list-content'>
                {myTracks.map((track)=>
                    <div className={track===trackNow ?'track active':'track'} key={track.name} onClick={()=>change(track,myTracks) }>
                        <div className='track-left'>
                        <img src={track.img} className='icon'  alt=''/>
                        <div><strong>{track.name}</strong>
                        <h3>{track.singer}</h3></div>
                        </div>
                        <div className='track-right' onClick={(e)=>e.stopPropagation()}>
                        <input type='checkbox' checked onChange={(e)=>removeTrack(e, track)}/>
                        <h4>{track.length}</h4>
                        </div>
                    </div>
                )}
            </div>
        </div>
     );
}

export default MyTrackList;