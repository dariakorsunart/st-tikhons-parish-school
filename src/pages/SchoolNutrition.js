import React from 'react';
import { useTranslation } from 'react-i18next';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
function SchoolNutrition() {
  const { t } = useTranslation();

  const pdfUrl = process.env.PUBLIC_URL +'/School_Nutrition.pdf';
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="page">
      <div className="home-content">
        <h1>{t('school_nutrition.title')}</h1>
        <p>{t('school_nutrition.text')}</p>
          
        <div style={{ height: '70vh', borderRadius: '10px', overflow: 'hidden', border: '1px solid black'  }}>
          <Viewer
            fileUrl={pdfUrl}
            plugins={[
              defaultLayoutPluginInstance
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default SchoolNutrition;
