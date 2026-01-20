import React, { useEffect } from 'react';

interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ src, alt, isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center animate-in fade-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={src} 
          alt={alt}
          className="w-full h-full object-contain"
        />
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/20 hover:bg-white/40 rounded-full transition-colors backdrop-blur-sm"
          aria-label="Close modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Keyboard hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs md:text-sm font-mono">
          Press ESC to close
        </div>
      </div>
    </div>
  );
};
