import React from 'react';

const ServicesIntro = () => {
  return (
    <section className="services-section"> {/* Tüm alanın dış kapsayıcısı */}
      
      <div className="services-title-box"> {/* "Services" kelimesini yeşil kutuya alan box */}
        <h2 className="services-title">Services</h2> {/* Kalın ve siyah başlık */}
      </div>

      <p className="services-description"> {/* Açıklama paragrafı */}
        At our digital marketing agency, we offer a range of services to help businesses grow and succeed online.
        These services include:
      </p>
    </section>
  );
};

export default ServicesIntro;