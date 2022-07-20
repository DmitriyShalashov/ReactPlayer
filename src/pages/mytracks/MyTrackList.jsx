import React, { useMemo, useState } from 'react';
import './MyTracks.css'
import { useParams } from 'react-router-dom'

function MyTrackList({myTracks, remove,change}) {

    

   
    
    const title='Мои треки'
    const desc='Слушайте топовую музыку без рекламы'
    


     



    return ( 
        <div className='track-list'>
            <h2>{title}</h2>
            <p>{desc}</p>
            <div className='track-list-content'>
                {myTracks.map((track)=>
                    <div className='track' key={track.name}>
                        <div className='track-left'>
                        <img src={track.img} className='icon' onClick={()=>change(track,myTracks)} alt=''/>
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