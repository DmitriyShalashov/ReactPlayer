import React from 'react';
import classes from './MyAvatar.module.css'

function MyAvatar({query, children, src}) {
    const avatarName=[classes.myAvatar]
    if(query){
        avatarName.push(query)
    }
    return ( 
        <div className={avatarName.join(' ')}>
            {children}
            <img src={src}/>
        </div>
     );
}

export default MyAvatar;