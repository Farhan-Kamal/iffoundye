import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  useEffect(() => {
    // Load TikTok embed script when modal opens
    if (isOpen) {
      const script = document.createElement('script');
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-gray-900 rounded-xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all z-10"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="aspect-video p-4">
          <blockquote 
            className="tiktok-embed" 
            cite="https://www.tiktok.com/@kmooi.ae/video/7441383128729423112" 
            data-video-id="7441383128729423112"
          >
            <section>
              <a target="_blank" title="@kmooi.ae" href="https://www.tiktok.com/@kmooi.ae?refer=embed">@kmooi.ae</a>
            </section>
          </blockquote>
        </div>
      </div>
    </div>
  );
}