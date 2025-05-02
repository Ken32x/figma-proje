import React from "react";

const ServicesCards = () => {
  return (
    <section className="services-cards-container">
      {/* Kart 1 */}
      <div className="service-card gray-bg">
        <div className="card-title-wrapper">
          <span className="card-title green">Search engine</span>
          <span className="card-title green">optimization</span>
        </div>
        <img src="/Cards/Cards-1.png" alt="SEO" className="service-icon" />
        <div className="learn-more">
          <div className="arrow-circle">
            <img src="/Cards/Icon.png" alt="Arrow" className="arrow-icon" />
          </div>
          <span>Learn more</span>
        </div>
      </div>

      {/* Kart 2 */}
      <div className="service-card green-bg">
        <div className="card-title-wrapper">
          <span className="card-title white">Pay-per-click</span>
          <span className="card-title white">advertising</span>
        </div>
        <img src="/Cards/Cards-2.png" alt="PPC" className="service-icon" />
        <div className="learn-more">
          <div className="arrow-circle">
            <img src="/Cards/Icon.png" alt="Arrow" className="arrow-icon" />
          </div>
          <span>Learn more</span>
        </div>
      </div>

      {/* Kart 3 */}
      <div className="service-card dark-bg">
        <div className="card-title-wrapper">
          <span className="card-title white">Social Media</span>
          <span className="card-title white">Marketing</span>
        </div>
        <img src="/Cards/Cards-3.png" alt="Social" className="service-icon" />
        <div className="learn-more">
          <div className="arrow-circle">
            <img src="/Cards/Icon-2.png" alt="Arrow" className="arrow-icon" />
          </div>
          <span>Learn more</span>
        </div>
      </div>

      {/* Kart 4 */}
      <div className="service-card gray-bg">
        <div className="card-title-wrapper">
          <span className="card-title green">Email</span>
          <span className="card-title green">Marketing</span>
        </div>
        <img src="/Cards/Cards-4.png" alt="Email" className="service-icon" />
        <div className="learn-more">
          <div className="arrow-circle">
            <img src="/Cards/Icon.png" alt="Arrow" className="arrow-icon" />
          </div>
          <span>Learn more</span>
        </div>
      </div>

      {/* Kart 5 */}
      <div className="service-card green-bg">
        <div className="card-title-wrapper">
          <span className="card-title white">Content</span>
          <span className="card-title white">Creation</span>
        </div>
        <img src="/Cards/Cards-5.png" alt="Content" className="service-icon" />
        <div className="learn-more">
          <div className="arrow-circle">
            <img src="/Cards/Icon.png" alt="Arrow" className="arrow-icon" />
          </div>
          <span>Learn more</span>
        </div>
      </div>

      {/* Kart 6 */}
      <div className="service-card dark-bg">
        <div className="card-title-wrapper">
          <span className="card-title green">Analytics and</span>
          <span className="card-title green">Tracking</span>
        </div>
        <img src="/Cards/Cards-6.png" alt="Analytics" className="service-icon" />
        <div className="learn-more">
          <div className="arrow-circle">
            <img src="/Cards/Icon-2.png" alt="Arrow" className="arrow-icon" />
          </div>
          <span>Learn more</span>
        </div>
      </div>
    </section>
  );
};


export default ServicesCards;