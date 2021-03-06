import React from 'react';
import Tilt from 'react-parallax-tilt';
import './logo.css';
import brain from './brain.png';

const Logo = () => {
    return(
        <Tilt className='Tilt br2 shadow-2' style={{ height: '150px', width: '150px'}}>
            <div className='pa3'>
                <img style={{paddingTop: '5px'}} alt='logo' src={brain}></img>
            </div>
        </Tilt>
    );
}

export default Logo;