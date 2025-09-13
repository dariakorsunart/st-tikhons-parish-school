import React from 'react';
import { useTranslation } from 'react-i18next';
import { Viewer} from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import * as pdfjsLib from 'pdfjs-dist';
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

function Schedule() {
  const { t } = useTranslation();

  const pdfUrl = process.env.PUBLIC_URL +'/Schedule 2025-2026.pdf';
  const defaultLayoutPluginInstance = defaultLayoutPlugin( 
    
  );

  return (
    <div className="page schedule-page">
      <div className="home-content">
        <h1>{t('schedule.title')}</h1>

        <div style={{borderRadius: '10px', overflow: 'hidden', border: '1px solid black'  }}>
          <Viewer
            fileUrl={pdfUrl}
            plugins={[
              defaultLayoutPluginInstance
            ]}
          />
        </div>   
       
        <p style={{ textAlign: 'center' }}>{t('calendar.text')}</p>

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
