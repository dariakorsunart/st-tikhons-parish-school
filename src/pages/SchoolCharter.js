import React from 'react';
import { useTranslation } from 'react-i18next';

function SchoolCharter() {
  const { t } = useTranslation();

  // Путь к вашему PDF-файлу
  const pdfUrl = '/school_charter.pdf';

  return (
    <div className="page charter-page">
      <div className="home-content">
        <h1>{t('charter.title')}</h1>
        
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

        <p>{t('charter.text')}</p>
      </div>
    </div>
  );
}

export default SchoolCharter;