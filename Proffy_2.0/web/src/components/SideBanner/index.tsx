import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import bgImg from '../../assets/images/main-background.svg';
import bgMobileImg from '../../assets/images/main-background-mobile.svg';
import logoImg from '../../assets/images/logo.svg';

const SideBanner: React.FC = (props) => {
    const [isMinWidth, setIsMinWidth] = useState(Number(window.innerWidth < 1250))
    
    function reportResize() {
        const changeValidation = Number(window.innerWidth < 1250) != isMinWidth;
        if(changeValidation) setIsMinWidth(Number(window.innerWidth < 1250))
     }

     useEffect(() => { 
        window.addEventListener('resize', reportResize)
        return () => window.removeEventListener('resize', reportResize)
    }, [ isMinWidth ])
    
    return (
            <div className="proffy-banner">
            <div  className="proffy-banner-bg" style={isMinWidth ? { backgroundImage:`url(${bgMobileImg})` } : { backgroundImage:`url(${bgImg})` }}>
            <div className="logo-container">
                    <img src={logoImg} alt="Proffy"></img>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
            </div>
            </div>
    )
}

export default SideBanner;