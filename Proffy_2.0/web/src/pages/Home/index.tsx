import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import logoutIcon from '../../assets/images/icons/logout.svg';

import './styles.css';
import api from '../../services/api';

function Home() {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const {total} = response.data;
            setTotalConnections(total);
        })
    }, [])

    return (
        <div id="page-home">
            <div className="head-container">
            <div className="user-control">
            <img src="https://image.freepik.com/icones-gratis/github-circulou_318-10752.jpg" alt="Avatar"></img>
            Leandro Passos
            </div>
            <button className="logout-button">
            <img src={logoutIcon} alt="Sair"></img>
            </button>
            </div>
            <div className="page-home-banner">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"></img>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                <img 
                src={landingImg} 
                alt="Plataforma de estudos" 
                className="hero-image"
                />         </div>      

            
            <footer>
                <div className="footer-content">
                <div className="info-container">
                    <h2>Seja bem-vindo.<br/>
                    <strong>O que deseja fazer?</strong>
                    </h2>
                    
                </div>
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aula"/>
                        Dar aulas
                    </Link>
                </div>
                <div className="hide-desktop">
                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração"/>
                </span>
                </div>
                </div>
                </footer>
                </div> 
       
        

    )
}

export default Home;