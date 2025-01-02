import React from 'react';
import { Share2 } from 'lucide-react';

export function ShareSection() {
  return (
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Spread the Word!</h2>
      <div className="flex justify-center space-x-4">
        <Share2 className="w-6 h-6" />
        <p className="text-lg">
          Share this with your friends and let's make this event{' '}
          <a
            href="https://www.tiktok.com/@kmooi.ae/video/7441383128729423112?is_from_webapp=1&sender_device=pc&web_id=7455209240971445766"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 transition-all"
          >
            massive
          </a>!
        </p>
        <p>This website is not run or owned by vexbolts, yesloth, or ye squad.</p>
      </div>
    </div>
  );
}