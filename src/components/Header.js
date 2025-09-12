import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); 
  };

  const closeMenu = () => {
    setIsOpen(false);
  };


  return (
    <header className="header">

      <nav className="navbar">
      <Link to="/" className="header-brand" onClick={closeMenu}>
          <h1 className="school-title">Русская Православная Приходская Школа <br/>
          при Храме cвятителя Тихона <br/> и Новомучеников Российских</h1>
           {/* Десктопный логотип */}
          <img src={process.env.PUBLIC_URL +"/images/logo2.jpg"} alt="School logo" className="header-logo-desktop"/>
          <img src={process.env.PUBLIC_URL +"/images/logo1.jpg"} alt="School logo" className="header-logo-mobile"/>    
        </Link>

     <div className="header-right">
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {/* Добавляем ссылку на главную страницу */}
          <li><Link to="/" onClick={closeMenu}>{t('header.school_title')}</Link></li>
          <li><Link to="/about-school" onClick={closeMenu}>{t('header.about_school')}</Link></li>
          <li><Link to="/about-church" onClick={closeMenu}>{t('header.about_church')}</Link></li>
          <li><Link to="/teachers" onClick={closeMenu}>{t('header.teachers')}</Link></li>
          <li><Link to="/schedule" onClick={closeMenu}>{t('header.schedule')}</Link></li>
          <li><Link to="/school-charter" onClick={closeMenu}>{t('header.charter')}</Link></li>
          <li><Link to="/school-nutrition" onClick={closeMenu}>{t('header.school_nutrition')}</Link></li>
          <li><Link to="/calendar" onClick={closeMenu}>{t('header.calendar')}</Link></li>
          <li><Link to="/gallery" onClick={closeMenu}>{t('header.gallery')}</Link></li>
          <li><Link to="/contacts" onClick={closeMenu}>{t('header.contacts')}</Link></li>    
        </ul>
        
         
         <div className="lang-switcher">
          <button onClick={() => changeLanguage('ru')}>RU</button>
          <button onClick={() => changeLanguage('en')}>EN</button>
         </div>

         <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
      </nav>
    </header>
  );
}

export default Header;
