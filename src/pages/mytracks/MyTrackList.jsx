import React, { useMemo, useState } from 'react';
import './MyTracks.css'

function MyTrackList({myTracks, remove,change,trackNow}) {
    const title='Мои треки'
    const desc='Слушайте топовую музыку без рекламы'
    
    return ( 
        <div className='track-list'>
            <h2>{title}</h2>
            
            <div className='track-list-content'>
                {myTracks.map((track)=>
                    <div className={track===trackNow ?'track active':'track'} key={track.name} onClick={()=>change(track,myTracks) }>
                        <div className='track-left'>
                        <img src={track.img} className='icon'  alt=''/>
                        <div><strong>{track.name}</strong>
                        <h3>{track.singer}</h3></div>
                        </div>
                        <div className='track-right'>
                        <input type='checkbox' checked onChange={()=>remove(track)}/>
                        <h4>{track.length}</h4>
                        </div>
                    </div>
                )}
            </div>
        </div>
     );
}

export default MyTrackList;