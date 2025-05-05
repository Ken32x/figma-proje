import React from 'react';

const AccordionItem = ({ index, title, content, isActive, onClick }) => {
  return (
    <div className="accordion-item">
      <div
        className={`accordion-header ${isActive ? 'active' : ''}`}
        onClick={onClick}
      >
        <div className="accordion-title">
          <strong>{`0${index + 1}`}</strong> {title}
        </div>
        <div className="accordion-icon">{isActive ? '-' : '+'}</div>
      </div>
      <div className={`accordion-content ${isActive ? 'open' : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;