import React from 'react';
import { Link } from 'react-router-dom';
import './AlbumGrid.css'



function AlbumGrid(props) {

    return ( <div className='album-grid'>
        {props.albums.map(album=>
               <div className='album' key={album.name}>
                <h3>{album.name}</h3>
                <Link to={`album/${album.name}`}><img src={album.img} alt=''/></Link>
               </div>
            )}
     
        
    </div> );
}

export default AlbumGrid;