import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-columns">
          {/* Левая часть футера */}
          <div className="footer-left">
            <h3>{t('footer.school_name')}</h3>
            <p>{t('contacts.address')}</p>
          </div>
          
          
          <div className="footer-right">
            <p><strong>{t('footer.phone_label')}</strong></p>
            <p><strong>{t('footer.email_label')}</strong></p>
          </div>
        </div>
        
       
        <div className="footer-bottom">
          <p>{t('footer.copyright_text')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
