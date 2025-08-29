import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutSchool() {
  const { t } = useTranslation();
  return (
    <div className="page">
      <div className="home-content">
        <h1>{t('about_school.title')}</h1>
        <img src="/images/ornament-top.jpg" alt="ornament-top-left" className="ornament-top" />
        {/* Блок 1: Текст слева, Изображение справа */}
        <div className="about-block">
          <div className="about-text-column">
            <h3>{t('about_school.block_1_title')}</h3>
            <p>{t('about_school.block_1_text')}</p>
          </div>
          <div className="about-image-column">
            <img src="/images/church6.jpg" alt={t('about_school.block_1_alt')} />
          </div>
        </div>

        {/* Блок 2: Изображение слева, Текст справа (reversed) */}
        <div className="about-block reversed">
          <div className="about-text-column">
            <h3>{t('about_school.block_2_title')}</h3>
            <p>{t('about_school.block_2_text')}</p>
          </div>
          <div className="about-image-column">
            <img src="/images/church7.jpg" alt={t('about_school.block_2_alt')} />
          </div>
        </div>

        {/* Блок 3: Текст слева, Изображение справа */}
        <div className="about-block">
          <div className="about-text-column">
            <h3>{t('about_school.block_3_title')}</h3>
            <p>{t('about_school.block_3_text')}</p>
            <ul>
          <li>{t('about_school.budget_list_1')}</li>
          <li>{t('about_school.budget_list_2')}</li>
          <li>{t('about_school.budget_list_3')}</li>
        </ul>
        <p>{t('about_school.contacts')}</p>
          </div>
          <div className="about-image-column">
            <img src="/images/studyprocess6.jpg" alt={t('about_school.block_3_alt')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSchool;