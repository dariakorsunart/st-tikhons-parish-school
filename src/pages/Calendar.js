import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles.css';

function Calendar() {
  const { t } = useTranslation();
  const containerRef = useRef(null);
 
  useEffect(() => {
    // 1. Set the global configuration object as the script requires
    window.___azcfg = {
      api: 'https://azbyka.ru/days/widgets',
      css: 'https://azbyka.ru/days/css/api.min.css',
      image: '1',
      prevNextLinks: '1'
    };
  // 2. Create the script element
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = 'https://azbyka.ru/days/js/api.min.js';

  // 3. Append the script to the head or body of the document
  const scriptContainer = document.head || document.body;
  scriptContainer.appendChild(script);  

  // 4. Cleanup function: remove the script and the config object when the component unmounts
  return () => {
    if (scriptContainer.contains(script)) {
      scriptContainer.removeChild(script);
    }
    delete window.___azcfg;
  };
}, []); // The empty array ensures this runs only once

  return (
    <div className="page calendar-page">
      <div className="home-content">
      <h1>{t('header.calendar')}</h1>
  
      <div className="azbyka-saints" ref={containerRef}></div>
      </div>
    </div>
  );
}

export default Calendar;