import React from 'react';
import { ExternalLink } from 'lucide-react';
import { CountdownTimer } from './components/CountdownTimer';
import { ImageCarousel } from './components/ImageCarousel';
import { ShareSection } from './components/ShareSection';
import { HeroSection } from './components/HeroSection';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <HeroSection />
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Join The Movement?</h2>
          <ImageCarousel />
        </div>
        <ShareSection />
      </div>
    </div>
  );
}