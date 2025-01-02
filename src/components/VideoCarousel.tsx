import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  {
    id: '7441383128729423112',
    username: 'kmooi.ae',
    title: 'Join the Movement'
  },
  {
    id: '7441383128729423112',
    username: 'kmooi.ae',
    title: 'Community Support'
  },
  {
    id: '7441383128729423112',
    username: 'kmooi.ae',
    title: 'Make an Impact'
  }
];

export function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Load TikTok embed script
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % videos.length);
    }, 8000);

    return () => {
      clearInterval(interval);
      document.body.removeChild(script);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((current) => (current + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((current) => (current - 1 + videos.length) % videos.length);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="relative aspect-video bg-black/20 rounded-xl overflow-hidden">
        <blockquote 
          className="tiktok-embed" 
          cite={`https://www.tiktok.com/@${videos[currentIndex].username}/video/${videos[currentIndex].id}`}
          data-video-id={videos[currentIndex].id}
        >
          <section>
            <a 
              target="_blank" 
              title={`@${videos[currentIndex].username}`} 
              href={`https://www.tiktok.com/@${videos[currentIndex].username}?refer=embed`}
            >
              @{videos[currentIndex].username}
            </a>
          </section>
        </blockquote>
      </div>
      
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
        {videos.map((_, index) => (
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