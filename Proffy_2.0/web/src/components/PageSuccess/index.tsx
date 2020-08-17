import React from 'react';
import {Link} from 'react-router-dom';

import bgImg from '../../assets/images/success-background.svg';
import successIcon from '../../assets/images/icons/success-check-icon.svg';

import './styles.css';

interface PageSuccessProps {
    title: string;
    descriptionOne: string;
    descriptionTwo?: string;
    link: string;
    buttonDescription: string;
}

const PageSuccess: React.FC<PageSuccessProps> = (props) => {
    return (
        <div id="page-success">
        <div className="bg-container" style={{ backgroundImage:`url(${bgImg})` }}>
        <div className="success-content">
            <img src={successIcon} alt="Sucesso" className="success-image"/>
            <h3 className="title">{ props.title }</h3>
            <div className="description">{ props.descriptionOne }</div>
            <div className="description">{ props.descriptionTwo }</div>
            <div className="button-container">
            <Link to={ props.link } className="button">
                { props.buttonDescription }
            </Link>
        </div>
        </div>

    </div>
      </div>
    );
  }

  export default PageSuccess;