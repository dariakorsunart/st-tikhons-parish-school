import React from 'react';
import { useTranslation } from 'react-i18next';


function Schedule() {
  const { t } = useTranslation();

  // Путь к вашему PDF-файлу
  const pdfUrl = process.env.PUBLIC_URL +'/Schedule 2025-2026.pdf';


  return (
    <div className="page schedule-page">
      <div className="home-content">
        <h1>{t('schedule.title')}</h1>
         {/* Встраиваем PDF-файл с помощью <iframe>.
          Атрибут 'src' указывает путь к файлу.
        */}
        <iframe
          title="School Charter"
          src={pdfUrl}
          width="100%"
          height="800px" // Высота, чтобы файл было удобно читать
          style={{ border: 'none' }}
        >
          <p>Ваш браузер не поддерживает встроенные PDF-файлы. <a href={pdfUrl}>Нажмите здесь, чтобы скачать файл.</a></p>
        </iframe>

        <p style={{ textAlign: 'center' }}>{t('calendar.text')}</p>
      
      {/* Здесь мы добавляем кнопку для Google Classroom */}
        <a 
        href="https://classroom.google.com/c/NzE0MDYxMjUyNTkz" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="google-classroom-button"
      >
         <img src={process.env.PUBLIC_URL +"/images/google-classroom.png"} alt="Google Classroom Icon" className="button-icon" />
        {t('Google Classroom')}
      </a>
      </div>
    </div>
  );
}

export default Schedule;