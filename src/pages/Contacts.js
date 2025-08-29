import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

function Contacts() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((result) => {
        alert(t('contacts.success_message'));
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        alert(t('contacts.error_message'));
      });
  };

  const renderBoldedText = (text) => {
    const parts = text.split(':');
    if (parts.length > 1) {
      return (
        <>
          <strong>{parts[0]}:</strong>{parts.slice(1).join(':')}
        </>
      );
    }
    return text;
  };

  return (
    <div className="page contacts-page">
      <div className="home-content">
        <h1>{t('contacts.title')}</h1>
        
        {/* Блок с контактной информацией, выровненный по левому краю */}
        <div className="contact-info-block">
          <p>{renderBoldedText(t('contacts.main'))}</p>
          <p>{renderBoldedText(t('contacts.email'))}</p>
          <p>{renderBoldedText(t('contacts.head_teacher'))}</p>
          <p>{renderBoldedText(t('contacts.phone'))}</p>
          <p>{renderBoldedText(t('contacts.address'))}</p>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>{t('contacts.form_title')}</h2>
          <input
            type="text"
            name="name"
            placeholder={t('contacts.name_placeholder')}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t('contacts.email_placeholder')}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder={t('contacts.message_placeholder')}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">{t('contacts.submit_button')}</button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;