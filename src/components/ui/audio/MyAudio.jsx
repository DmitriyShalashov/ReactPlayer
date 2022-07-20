import React from 'react';

function MyAudio({src}) {

    return ( 
        <div>
        <audio src={src} className='audio'></audio>
        
        </div>
     );
}

export default MyAudio;