import React from 'react';
import { useTranslation } from 'react-i18next';
import teachers from '../data/teachers.json';

function Teachers() {
  const { t } = useTranslation();
  const teacherCount = teachers.length;

  return (
    <div className="page teachers-page">
      <div className="home-content">

      <h1>{t('teachers.teachers_list_title')}</h1>

          <div className="group-photo-container">
          <img 
            src={process.env.PUBLIC_URL +"/images/teachers_photo.jpg"} 
            alt={t('teachers.group_photo_alt')} 
            className="group-photo" 
          />
        </div>
      
        <div className="teachers-list">
          {teachers.map((teacher, index) => (
            <div 
              key={teacher.id} 
              className={`teacher-card ${index === teacherCount - 1 ? 'last-teacher-card' : ''}`}
            >
              <h2>{teacher.name}</h2>
              <h3>{teacher.position}</h3>
              <h4>{teacher.subject}</h4>
            </div>
          ))}
        </div>

      
      </div>
    </div>
  );
}

export default Teachers;
