import React from 'react';
import {  Link } from 'react-router-dom';
import './Nav.css'

function Navigation() {
    return ( 
        
            <div className='nav-bar'>
                <div className='nav-items'>
                    <ul>
                    <Link to='/'><li>Плейлисты</li></Link>
                    <Link to='/mytracks'><li>Мои треки</li></Link>
                        <li>Популярные исполнители</li>
                        <li>Мои плейлисты</li>
                    </ul>
                    <ul id="lk">
                        <li>Личный кабинет</li>
                        <li>О сервисе</li>
                    </ul>    
                </div>
            </div>
        
      );
}

export default Navigation;