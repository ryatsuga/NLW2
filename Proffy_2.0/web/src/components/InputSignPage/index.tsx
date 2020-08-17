import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import './styles.css';

interface InputSignPageProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
};


const InputSignPage: React.FC<InputSignPageProps> = ({label, name, ...rest}) => {
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
            <input id={fieldName} name={name} ref={ inputRef } placeholder={label} {...rest}/>
            <label htmlFor={fieldName}>{label}</label>
        </div>
      
    );
  }

  export default InputSignPage;