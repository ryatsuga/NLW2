import React, { useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import showPassIcon from '../../assets/images/icons/show-password.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import SideBanner from '../../components/SideBanner';
import InputSignPage from '../../components/InputSignPage';

interface FormData {
    email: string,
};

function ForgotPassword() {
    const formRef = useRef<FormHandles>(null);
    const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(formRef);
    };

    return (
        <div id="page-forgot-password">
            <div className="forgot-password-container">
            <div className="head-container">
                <Link to="/sign-in" className="back"><img src={backIcon} alt="Voltar"/></Link>
                </div>
                <div className="forgot-password-content">
                    <div className="info-container">
                    <h2>Eita, esqueceu sua senha?</h2>
                    <label>Não esquenta, vamos dar um jeito nisso.</label>
                    </div>
                    <Form ref={ formRef } onSubmit={ handleSubmit }>
                    <InputSignPage name="email" label="E-mail" />
                    <button className="forgot-password-button">Enviar</button>
                    </Form>
                    <footer className="forgot-password-footer">
                    <label>
                        Ir para home?<br/>
                        <Link to="/" className="login-button">Início</Link>
                    </label>
                    <span className="small-description">
                    É de graça <img src={purpleHeartIcon} alt="É de graça"/>
                    </span>
                </footer>
                </div>
            
            </div>
            <SideBanner />
        </div>
           
            
    )
}

export default ForgotPassword;