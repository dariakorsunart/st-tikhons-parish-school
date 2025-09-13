import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  return (
    <div className="page home-page">
      <div className="home-content">
      <h1>{t('about_school.welcome_text')}</h1>
      <div className="header-images">
      <img src={process.env.PUBLIC_URL +"/images/ornament-top-left.jpg"} alt="ornament-top-left" className="ornament top-left" />
      <img src={process.env.PUBLIC_URL + "/images/bird2.jpg"} alt="Логотип школы" className="home-logo" />
      <img src={process.env.PUBLIC_URL +"/images/ornament-top-right.jpg"} alt="ornament-top-right" className="ornament top-right" />
      </div>
       <h2>{t('home.mission_text')}</h2>
        <p>{t('about_school.block_1_text')}</p>
        <h2>{t('about_school.block_2_title')}</h2>
        <p>{t('about_school.block_2_text')}</p>
        <h2>{t('about_school.block_3_title')}</h2>
        <p>{t('about_school.block_3_text')}</p>
        <ul>
          <li>{t('about_school.budget_list_1')}</li>
          <li>{t('about_school.budget_list_2')}</li>
          <li>{t('about_school.budget_list_3')}</li>
        </ul>
        <p>{t('about_school.contacts')}</p>
      </div>
    </div>
  );
}

export default Home;
