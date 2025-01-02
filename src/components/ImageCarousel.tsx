import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://i.ibb.co/9rd6c9j/owz-Iffe1m-AGj-Dn-AIApl-EAx-Eq7-I6-FEm-PJOK8-HAB.png",
    title: "Vexbolts",
    link: "https://www.tiktok.com/@vexbolts___/video/7455127695005912350?q=vexbolts%20mass%20following&t=1735801960828",
  },
  {
    image: "https://i.ibb.co/RDmH6Qj/o-QUy-UXBKEi-AEIXBu-PAi-JAICAB0x-Vf-IV2zmh-Bw1.png",
    title: "Yesloth",
    link: "https://www.tiktok.com/@yesloth/video/7455183660447337774?is_from_webapp=1&sender_device=pc&web_id=7455209240971445766",
  },
  {
    image: "https://i.ibb.co/ZxNMBBX/o-Ein-B22j-EYq-F25-LAvg-TId7et-Ru4r-DDDu-Efd-INS.png",
    title: "Ye Squad",
    link: "https://www.tiktok.com/@yesquad/video/7455197457685892398?is_from_webapp=1&sender_device=pc&web_id=7455209240971445766",
  }
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((current) => (current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <a 
        href={slides[currentIndex].link}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-video rounded-xl overflow-hidden group"
      >
        <img 
          src={slides[currentIndex].image}
          alt={slides[currentIndex].title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <h3 className="text-xl font-bold p-6 w-full text-center">
            {slides[currentIndex].title}
          </h3>
        </div>
      </a>
      
      <button 
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}