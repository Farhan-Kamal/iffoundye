import React from 'react';
import { ExternalLink } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

export function HeroSection() {
  return (
    <div className="text-center mb-16">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Mass Follow Vexbolts
      </h1>
      <div className="mb-8">
        <CountdownTimer />
      </div>
      <p className="text-xl md:text-2xl text-purple-200 mb-8">
        Join the movement! Let's bring Vexbolts into 2025! 📢🚨
      </p>
      <a
        href="https://www.tiktok.com/@vexbolts"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
      >
        Follow Now
        <ExternalLink className="ml-2 w-5 h-5" />
      </a>
    </div>
  );
}