import React from 'react';
import './MyTracks.css'
import { Link, useParams } from 'react-router-dom'
import SimpleBar from 'simplebar-react';


function TrackList({tracks=[],myTracks,create,remove,change,trackNow}) {
    
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
            <div className="track-list-title">
                <h2>{params.name}</h2>
                <Link to='/'> На главную</Link>
            </div>
            <div className='track-list-content'>
                
                {usingTracks.map((track,index)=>
                        
                        <div className={track==trackNow ?'track active':'track'} key={track.name} >
                        <div className='track-left' onClick={(e)=>change(track,usingTracks) }>
                        <img src={track.img} className='icon' alt=''/>
                        <div><strong>{track.name}</strong>
                        <h3>{track.singer}</h3></div>
                        </div>
                        <div className='track-right' >
                        {myTracks.includes(track)
                            ?<input type='checkbox' checked onChange={()=>{remove(track)}}/>
                            :<input type='checkbox' onChange={()=>{create(track)}}/>
                        }
                        {myTracks.includes(track)
                            ?<h4 onClick={()=>{remove(track)}}>Удалить</h4>
                            :<h4 onClick={()=>{create(track)}}>Добавить</h4>
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