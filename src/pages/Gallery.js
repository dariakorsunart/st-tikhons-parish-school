import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import Modal from 'react-modal';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

Modal.setAppElement('#root');

const gallerySections = {
  exhibitions: [
    '/images/exhibition1.jpg',
    '/images/exhibition2.jpg',
    '/images/exhibition3.jpg',
    '/images/exhibition5.jpg',
    '/images/exhibition7.jpg',
    '/images/exhibition8.jpg',
    '/images/exhibition9.jpg',
    '/images/exhibition10.jpg',
    '/images/exhibition12.jpg',
    '/images/exhibition13.jpg'
  ].map(imagePath => process.env.PUBLIC_URL + imagePath),
  concerts: [
    '/images/concert3.jpg',
    '/images/concert4.jpg',
    '/images/concert5.jpg',
    '/images/concert7.jpg',
    '/images/concert8.jpg',
    '/images/concert9.jpg',
    '/images/concert10.jpg',
    '/images/concert11.jpg',
    '/images/concert12.jpg',
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

const GallerySection = ({ sectionKey, images, openModal }) => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 500);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section key={sectionKey} className="gallery-section">
      <h3>{t(`gallery.${sectionKey}_title`)}</h3>
      <p className="gallery-description">{t(`gallery.${sectionKey}_description`)}</p>
      <Slider {...sliderSettings}>
        {images.map((photo, index) => (
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
  );
};

function Gallery() {
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

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
          <GallerySection
            key={sectionKey}
            sectionKey={sectionKey}
            images={gallerySections[sectionKey]}
            openModal={openModal}
          />
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