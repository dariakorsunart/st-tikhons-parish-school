import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import Modal from 'react-modal';

// Обязательно импортируйте стили для карусели
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Укажите корневой элемент для модального окна. В стандартном React-проекте это '#root'.
Modal.setAppElement('#root');

const gallerySections = {
  exhibitions: [
    '/images/exhibition1.jpg',
    '/images/exhibition2.jpg',
    '/images/exhibition3.jpg',
    '/images/exhibition4.jpg',
    '/images/exhibition5.jpg',
    '/images/exhibition6.jpg',
    '/images/exhibition7.jpg',
    '/images/exhibition8.jpg',
    '/images/exhibition9.jpg',
    '/images/exhibition10.jpg',
    '/images/exhibition11.jpg',
    '/images/exhibition12.jpg',
    '/images/exhibition13.jpg'
  ].map(imagePath => process.env.PUBLIC_URL + imagePath),
  concerts: [
    '/images/concert1.jpg',
    '/images/concert2.jpg',
    '/images/concert3.jpg',
    '/images/concert4.jpg',
    '/images/concert5.jpg',
    '/images/concert6.jpg',
    '/images/concert7.jpg',
    '/images/concert8.jpg',
    '/images/concert9.jpg',
    '/images/concert10.jpg',
    '/images/concert11.jpg',
    '/images/concert12.jpg',
    '/images/concert13.jpg',
    '/images/concert14.jpg',
    '/images/concert15.jpg',
    '/images/concert16.jpg',
    '/images/concert17.jpg',
    '/images/concert18.jpg'
  ].map(imagePath => process.env.PUBLIC_URL + imagePath),
  creativity: [
    '/images/art3.jpg',
    '/images/art2.jpg',
    '/images/drawing1.jpg',
    '/images/drawing5.jpg',
    '/images/creation1.jpg',
    '/images/creation2.jpg',
    '/images/creation13.jpg',
    '/images/creation10.jpg',
    '/images/drawing3.jpg',
    '/images/drawing6.jpg',
    '/images/creation8.jpg',
    '/images/art4.jpg',
  ].map(imagePath => process.env.PUBLIC_URL + imagePath)
};

function Gallery() {
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Показывать 3 слайда на широких экранах
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Экран до 1024px (планшеты)
        settings: {
          slidesToShow: 2, // Показывать 2 слайда
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500, // Экран до 500px (большинство мобильных)
        settings: {
          slidesToShow: 1, // Показывать 1 слайд
          slidesToScroll: 1,
        },
      },
    ],
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage('');
  };

  return (
    <div className="page gallery-page">
      <div className="home-content">
        <h1>{t('gallery.title')}</h1>
        
        {Object.keys(gallerySections).map((sectionKey) => (
          <section key={sectionKey} className="gallery-section">
            <h3>{t(`gallery.${sectionKey}_title`)}</h3>
            {/* Добавляем описание раздела */}
            <p className="gallery-description">{t(`gallery.${sectionKey}_description`)}</p>
            <Slider {...sliderSettings}>
              {gallerySections[sectionKey].map((photo, index) => (
                <div 
                  key={index} 
                  className="gallery-item-container" 
                  onClick={() => openModal(photo)}
                >
                  <img 
                    src={photo} 
                    alt={t(`gallery.${sectionKey}_title`) + ` ${index + 1}`} 
                    className="gallery-image" 
                  />
                </div>
              ))}
            </Slider>
          </section>
        ))}

        <Modal 
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <button onClick={closeModal} className="modal-close-button">×</button>
          <img src={selectedImage} alt="Enlarged view" className="modal-image" />
        </Modal>
      </div>
    </div>
  );
}

export default Gallery;