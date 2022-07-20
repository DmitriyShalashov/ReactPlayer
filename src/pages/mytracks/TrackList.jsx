import React from 'react';
import './MyTracks.css'
import { useParams } from 'react-router-dom'



function TrackList({tracks=[],myTracks,create,remove,change,changeQueue}) {
    
    const params = useParams()
    const usingTracks=[]

    tracks.map((track)=>{
        if(track.album.includes(params.name))
        {
            usingTracks.push(track)
        }
        
    })
    
 
    
    
    return ( 
        <div className='track-list'>
            <h2>{params.name}</h2>
            <p>{}</p>
            <div className='track-list-content'>
                {usingTracks.map((track,index)=>
                        
                        <div className='track' key={track.name}>
                        <div className='track-left'>
                        <img src={track.img} className='icon' onClick={()=>change(track,usingTracks) }alt=''/>
                        <div><strong>{track.name}</strong>
                        <h3>{track.singer}</h3></div>
                        </div>
                        <div className='track-right'>
                        {myTracks.includes(track)
                            ?<input type='checkbox' checked onChange={()=>{remove(track)}}/>
                            :<input type='checkbox' onChange={()=>{create(track)}}/>
                        }
                        {myTracks.includes(track)
                            ?<h4>Удалить</h4>
                            :<h4>Добавить</h4>
                        }
                    
                        <h4>{track.length}</h4>
                        </div>
                    </div>
                )}
            </div>
        </div>
     );
}

export default TrackList;