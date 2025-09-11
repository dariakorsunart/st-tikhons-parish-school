import React from 'react';
import { useTranslation } from 'react-i18next';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function SchoolCharter() {
  const { t } = useTranslation();

  // Путь к вашему PDF-файлу
  const pdfUrl = process.env.PUBLIC_URL +'/school_charter.pdf';
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="page charter-page">
      <div className="home-content">
        <h1>{t('charter.title')}</h1>
        
        <div style={{ height: '100%' }}>
          <Viewer
            fileUrl={pdfUrl}
            plugins={[
              defaultLayoutPluginInstance
            ]}
          />
        </div>

        <p>{t('charter.text')}</p>
      </div>
    </div>
  );
}

export default SchoolCharter;