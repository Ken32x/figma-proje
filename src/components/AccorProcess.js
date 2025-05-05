import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const steps = [
  {
    title: 'Adım 1: Danışmanlık',
    content: 'İlk görüşmede hedeflerinizi, mevcut stratejilerinizi ve beklentilerinizi ele alırız.',
  },
  {
    title: 'Adım 2: Strateji Geliştirme',
    content: 'Pazarı analiz eder, markanıza özel bir strateji oluştururuz.',
  },
  {
    title: 'Adım 3: Uygulama',
    content: 'Stratejiyi hayata geçirir, araç ve yöntemlerle uygulamaya başlarız.',
  },
  {
    title: 'Adım 4: Takip ve Optimizasyon',
    content: 'Performansı izler ve gerektiğinde stratejiyi optimize ederiz.',
  },
  {
    title: 'Adım 5: Raporlama',
    content: 'Gelişmeleri düzenli olarak sizinle paylaşırız.',
  },
  {
    title: 'Adım 6: Sürekli İyileştirme',
    content: 'Uzun vadeli başarı için süreçleri günceller ve geliştiririz.',
  },
];

const AccorProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={{ width: '100%', paddingLeft: '220px', maxWidth: '900px' }}>
      <h2>Çalışma Sürecimiz</h2>
      {steps.map((step, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={step.title}
          content={step.content}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
export default AccorProcess;