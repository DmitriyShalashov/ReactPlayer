import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './Nav.css'

function Navigation() {
    return ( 
        
            <div className='nav-bar'>
                <div className='nav-items'>
                    <ul>
                    <li><Link to='/'>Плейлисты</Link></li>
                    <li><Link to='/mytracks'>Мои треки</Link></li>
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