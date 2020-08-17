import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import './styles.css';

import showPassIcon from '../../assets/images/icons/show-password.svg';

interface InputPassSignPageProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

const InputPassSignPage: React.FC<InputPassSignPageProps> = ({label, name, ...rest}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const { fieldName, registerField, defaultValue, error } = useField(name);
    
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    }, [fieldName, registerField]);
    
    return (
        <div className="input-block">
            <input type="password" id={ fieldName } ref={ inputRef } placeholder="Senha" {...rest} />
            <label htmlFor={ fieldName }>{label}</label>
            <button className="show-password-button"><img src={showPassIcon} alt="Mostrar senha"/></button>
        </div>
      
    );
  }

  export default InputPassSignPage;