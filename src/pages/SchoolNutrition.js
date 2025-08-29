import React from 'react';
import { useTranslation } from 'react-i18next';

function SchoolNutrition() {
  const { t } = useTranslation();

 // Путь к вашему PDF-файлу
  const pdfUrl = '/School_Nutrition.pdf';


  return (
    <div className="page">
      <div className="home-content">
        <h1>{t('school_nutrition.title')}</h1>
        <p>{t('school_nutrition.text')}</p>
          
          {/* Встраиваем PDF-файл с помощью <iframe>.
          Атрибут 'src' указывает путь к файлу.
          */}
        <iframe
          title="School Nutrition"
          src={pdfUrl}
          width="100%"
          height="800px" // Высота, чтобы файл было удобно читать
          style={{ border: 'none' }}
        >
          <p>Ваш браузер не поддерживает встроенные PDF-файлы. <a href={pdfUrl}>Нажмите здесь, чтобы скачать файл.</a></p>
        </iframe>
      </div>
    </div>
  );
}

export default SchoolNutrition;