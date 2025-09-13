import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutChurch() {
  const { t } = useTranslation();
  return (
    <div className="page">
      <div className="home-content">
        <h1>{t('about_church.title')}</h1>
        <h2>{t('about_church.greetings')}</h2>
        
        <div className="church-content-grid">
          
          <div className="church-text-column">
            <p>{t('about_church.description')}</p>
          </div>
          
          
          <div className="church-image-column">
            <img src={process.env.PUBLIC_URL +"/images/saintTikhon.jpg"} alt="St. Patriarch Tikhon" className="church-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutChurch;
